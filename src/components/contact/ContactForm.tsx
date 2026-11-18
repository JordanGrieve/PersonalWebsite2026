"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage, type ContactState } from "@/app/contact/actions";
import { site } from "@/data/site";

/**
 * The contact form. Posts to a server action that sends the message on; it
 * no longer hands the visitor a `mailto:` draft and hope they press send in
 * a mail client that may not exist. The address stays visible underneath
 * either way, so there is always a route that does not depend on this.
 */
function SubmitButton() {
  /* Reads the pending state of the form this button sits inside, which is
     why it has to be its own component. */
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary btn-block" type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send message"}
      {pending ? null : <i aria-hidden="true" className="ph ph-arrow-up-right" />}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState<ContactState, FormData>(sendMessage, {});
  const sentRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /* Where focus goes once the server has answered.

     On success the form is replaced by the confirmation, which takes the
     focused Send button out of the document — focus falls back to <body>, a
     screen reader says nothing at all, and the next Tab starts from the top
     of the site. So focus moves to the confirmation's heading, which is also
     what gets it read out.

     On an error about one field, focus goes to that field: the message is
     tied to it with aria-describedby, so arriving there reads the label, that
     it is invalid, and why. */
  useEffect(() => {
    if (state.ok) sentRef.current?.focus();
    else if (state.field) {
      formRef.current?.querySelector<HTMLElement>(`[name="${state.field}"]`)?.focus();
    }
  }, [state]);

  /** Marks one field as the subject of the current error. */
  const invalid = (field: "email" | "message") =>
    state.field === field
      ? ({ "aria-invalid": true, "aria-describedby": "cf-error" } as const)
      : {};

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(1.3333em,3cqw,2em)",
      }}
    >
      {state.ok ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.8em",
            padding: "1.7333em 0",
          }}
        >
          <i
            aria-hidden="true" className="ph ph-check-circle"
            style={{ fontSize: "2.125rem", color: "var(--color-accent)" }}
          />
          <h2 ref={sentRef} tabIndex={-1} style={{ margin: 0, fontSize: "1.375rem", outline: "none" }}>
            Message sent
          </h2>
          <p style={{ margin: 0, fontSize: "0.90625rem", color: "var(--color-neutral-400)" }}>
            It is in my inbox. I reply within a day — and replying to it reaches you, so there
            is nothing else for you to do.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          action={action}
          style={{ display: "flex", flexDirection: "column", gap: "0.9333em" }}
        >
          {/* `autoComplete` on the two personal fields lets a browser or a
              password manager fill them in (WCAG 1.3.5) — which matters most
              to people for whom typing is the hard part. The one field that
              is not required says so; the other two are marked `required`,
              which a screen reader announces. */}
          <div className="field">
            <label htmlFor="cf-name">Your name (optional)</label>
            <input
              className="input"
              id="cf-name"
              name="name"
              autoComplete="name"
              defaultValue={state.values?.name}
              placeholder="Ruth Kelso"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              className="input"
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              defaultValue={state.values?.email}
              placeholder="you@company.com"
              {...invalid("email")}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">Your message</label>
            <textarea
              className="input"
              id="cf-msg"
              name="message"
              required
              defaultValue={state.values?.message}
              placeholder="Send a message saying hello :D"
              {...invalid("message")}
            />
          </div>

          {/* The honeypot. Off screen, hidden from the accessibility tree and
              out of the tab order, so nothing but a bot ever fills it in. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
          />

          {state.error ? (
            <div
              id="cf-error"
              role="alert"
              style={{ fontSize: "0.78125rem", color: "var(--color-accent-300)" }}
            >
              {/* An icon as well as the colour: the purple alone does not
                  say "error" to anyone who cannot tell it from the body
                  text around it. */}
              <i aria-hidden="true" className="ph ph-x-circle" /> {state.error}
            </div>
          ) : null}

          <SubmitButton />

          <p style={{ margin: 0, fontSize: "0.78125rem", color: "var(--color-neutral-500)" }}>
            Or email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </form>
      )}
    </div>
  );
}
