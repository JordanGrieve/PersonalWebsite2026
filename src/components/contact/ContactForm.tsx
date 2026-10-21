"use client";

import { useActionState } from "react";
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
      {pending ? null : <i className="ph ph-arrow-up-right" />}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState<ContactState, FormData>(sendMessage, {});

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(20px,3cqw,30px)",
      }}
    >
      {state.ok ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 12,
            padding: "26px 0",
          }}
        >
          <i
            className="ph ph-check-circle"
            style={{ fontSize: "2.125rem", color: "var(--color-accent)" }}
          />
          <h3 style={{ margin: 0, fontSize: "1.375rem" }}>Message sent</h3>
          <p style={{ margin: 0, fontSize: "0.90625rem", color: "var(--color-neutral-400)" }}>
            It is in my inbox. I reply within a day — and replying to it reaches you, so there
            is nothing else for you to do.
          </p>
        </div>
      ) : (
        <form action={action} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="field">
            <label htmlFor="cf-name">Your name</label>
            <input className="input" id="cf-name" name="name" placeholder="Ruth Kelso" />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              className="input"
              id="cf-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">Your message</label>
            <textarea
              className="input"
              id="cf-msg"
              name="message"
              required
              placeholder="Send a message saying hello :D"
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
            <div role="alert" style={{ fontSize: "0.78125rem", color: "var(--color-accent-300)" }}>
              {state.error}
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
