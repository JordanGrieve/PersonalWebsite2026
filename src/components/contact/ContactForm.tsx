"use client";

import { useState } from "react";
import { budgetOptions, topicOptions } from "@/data/contact";
import { site } from "@/data/site";

const chip = (on: boolean) =>
  on
    ? {
        background: "color-mix(in srgb, var(--color-accent) 16%, transparent)",
        color: "var(--color-accent-200)",
        borderColor: "var(--color-accent)",
      }
    : {
        background: "transparent",
        color: "var(--color-neutral-400)",
        borderColor: "var(--color-divider)",
      };

/* Matches the design system's `.field > label`, which only styles real
   <label> elements — a chip group is labelled by a span instead, since a
   <label> must point at a single form control. */
const groupLabel = {
  display: "block",
  fontSize: 12,
  marginBottom: 5,
  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
} as const;

function ChipGroup({
  label,
  id,
  options,
  value,
  onSelect,
}: {
  label: string;
  id: string;
  options: string[];
  value: string;
  onSelect: (option: string) => void;
}) {
  return (
    <div className="field" role="group" aria-labelledby={id}>
      <span id={id} style={groupLabel}>
        {label}
      </span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(value === option ? "" : option)}
            aria-pressed={value === option}
            style={{
              cursor: "pointer",
              font: "500 12px/1 var(--font-heading)",
              padding: "9px 13px",
              borderRadius: 999,
              borderStyle: "solid",
              borderWidth: 1,
              ...chip(value === option),
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

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
  const [topic, setTopic] = useState("");
  const [budget, setBudget] = useState("");
  const [err, setErr] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || msg.trim().length < 4) {
      setErr(true);
      return;
    }
    setErr(false);

    const subject = topic ? `Portfolio enquiry — ${topic}` : "Portfolio enquiry";
    const body = [
      name && `Name: ${name}`,
      `Email: ${email}`,
      topic && `Topic: ${topic}`,
      budget && `Budget: ${budget}`,
      "",
      msg,
    ]
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
    setTopic("");
    setBudget("");
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
          <ChipGroup
            label="Topic"
            id="cf-topic-label"
            options={topicOptions}
            value={topic}
            onSelect={setTopic}
          />
          <ChipGroup
            label="Budget range"
            id="cf-budget-label"
            options={budgetOptions}
            value={budget}
            onSelect={setBudget}
          />
          <div className="field">
            <label htmlFor="cf-msg">What do you need?</label>
            <textarea
              className="input"
              id="cf-msg"
              name="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="A Shopify build, a speed audit, something else…"
            />
          </div>
          {err ? (
            <div role="alert" style={{ fontSize: 12.5, color: "var(--color-accent-300)" }}>
              Add your email and a line about the project.
            </div>
          ) : null}
          <button className="btn btn-primary btn-block" type="submit">
            Send message
            <i className="ph ph-arrow-up-right" />
          </button>
          <div style={{ fontSize: 11.5, color: "var(--color-neutral-600)" }}>
            No newsletters, no CRM sequences.
          </div>
        </form>
      )}
    </div>
  );
}
