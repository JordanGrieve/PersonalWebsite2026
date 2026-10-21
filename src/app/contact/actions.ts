"use server";

import { site } from "@/data/site";

/**
 * The contact form's submit handler.
 *
 * The form used to hand the visitor a `mailto:` draft and hope they pressed
 * send in whatever their machine opens — Outlook, usually, and nothing at
 * all on a desktop with no mail client registered. That is a silent failure
 * on the one form whose entire job is to get somebody to make contact.
 *
 * Posts to Resend's REST API with `fetch` rather than pulling in their SDK:
 * one endpoint, one JSON body, and this project has no runtime dependencies
 * beyond Next and React.
 *
 * Needs `RESEND_API_KEY` in the environment. `CONTACT_FROM` is optional —
 * without a verified sending domain Resend only allows `onboarding@resend.dev`
 * as the sender, and only delivers to the address that owns the account,
 * which is where this is going anyway.
 */

export type ContactState = { ok?: true; error?: string };

/** Caps, so the form cannot be used to push an arbitrary payload. */
const LIMITS = { name: 100, email: 200, message: 5000 };

export async function sendMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  /* A field no human sees and every naive bot fills in. Not a wall, but it
     stops the traffic that costs nothing to stop. */
  if (formData.get("company")) return { ok: true };

  const name = String(formData.get("name") ?? "").trim().slice(0, LIMITS.name);
  const email = String(formData.get("email") ?? "").trim().slice(0, LIMITS.email);
  const message = String(formData.get("message") ?? "").trim().slice(0, LIMITS.message);

  /* Deliberately loose. The only test that means anything is whether a reply
     arrives, and an over-strict pattern rejects real addresses. */
  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) {
    return { error: "That email address does not look right — check it and try again." };
  }
  if (message.length < 4) {
    return { error: "Add a line or two so I know what you are after." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return { error: `Something broke at my end. Email me directly at ${site.email}.` };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [site.email],
        /* So replying in Gmail answers the sender, not me. */
        reply_to: email,
        subject: `Portfolio message${name ? ` from ${name}` : ""}`,
        text: [name && `Name: ${name}`, `Email: ${email}`, "", message]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      /* Resend's body says why; the visitor does not need to know. */
      console.error("Contact form: Resend returned", response.status, await response.text());
      return { error: `That did not send. Email me directly at ${site.email}.` };
    }
  } catch (cause) {
    console.error("Contact form: request failed", cause);
    return { error: `That did not send. Email me directly at ${site.email}.` };
  }

  return { ok: true };
}
