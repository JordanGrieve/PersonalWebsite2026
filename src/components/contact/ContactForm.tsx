"use client";

import { useState } from "react";
import { site } from "@/data/site";

/**
 * The brief form. Submitting hands the message to the visitor's own mail
 * client, pre-filled, rather than posting it anywhere — so a brief either
 * visibly reaches a compose window or visibly does not. The previous version
 * said "Message sent" and then dropped it.
 *
 * TODO: replace with a server action (Resend, Postmark, an inbox webhook) so
 * the form posts directly. That needs an API key in the environment; until
 * then this is the honest version.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || msg.trim().length < 4) {
      setErr(true);
      return;
    }
    setErr(false);

    const subject = "Hello from your portfolio";
    const body = [name && `Name: ${name}`, `Email: ${email}`, "", msg]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function reset() {
    setSent(false);
    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(20px,3cqw,30px)",
      }}
    >
      {sent ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 12,
            padding: "26px 0",
          }}
        >
          <i className="ph ph-envelope-simple" style={{ fontSize: 34, color: "var(--color-accent)" }} />
          <h3 style={{ margin: 0, fontSize: 22 }}>Check your email app</h3>
          <p style={{ margin: 0, fontSize: 14.5, color: "var(--color-neutral-400)" }}>
            Thanks {name || "there"} — your message is written and waiting in a
            draft. Press send there and it reaches me; I reply within a day.
          </p>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--color-neutral-500)" }}>
            Nothing opened?{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <button className="btn btn-secondary" onClick={reset}>
            Write another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
          noValidate
        >
          <div className="field">
            <label htmlFor="cf-name">Your name</label>
            <input
              className="input"
              id="cf-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">Your message</label>
            <textarea
              className="input"
              id="cf-msg"
              name="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Send a message saying hello :D"
            />
          </div>
          {err ? (
            <div role="alert" style={{ fontSize: 12.5, color: "var(--color-accent-300)" }}>
              Add your email and a line or two.
            </div>
          ) : null}
          <button className="btn btn-primary btn-block" type="submit">
            Send message
            <i className="ph ph-arrow-up-right" />
          </button>
          <div style={{ fontSize: 11.5, color: "var(--color-neutral-500)" }}>
            No newsletters, no CRM sequences.
          </div>
        </form>
      )}
    </div>
  );
}
