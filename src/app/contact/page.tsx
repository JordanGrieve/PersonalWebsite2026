import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me what you're building and roughly when you need it. I reply within a day.",
};

const linkRow = {
  display: "flex",
  alignItems: "center",
  gap: 11,
  fontSize: 15,
} as const;

export default function ContactPage() {
  return (
    <section
      style={{
        padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "clamp(24px,4cqw,52px)",
        alignItems: "start",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            font: "500 11px/1 var(--font-heading)",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--color-accent)",
              boxShadow: "0 0 0 4px rgba(145,132,217,.18)",
            }}
          />
          Available for projects
        </div>
        <h1
          style={{
            fontSize: "clamp(38px,8cqw,96px)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
            margin: 0,
          }}
        >
          LET&apos;S TALK
        </h1>
        <p
          style={{
            margin: "20px 0 0",
            maxWidth: "40ch",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--color-neutral-300)",
          }}
        >
          Tell me what you&apos;re building and roughly when you need it. I reply within a day.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
          <a href={`mailto:${site.email}`} style={linkRow}>
            <i className="ph ph-envelope-simple" style={{ fontSize: 19 }} />
            {site.email}
          </a>
          {socials
            .filter((s) => s.label !== "X")
            .map((s) => (
              <a key={s.label} href={s.href} style={linkRow}>
                <i className={s.icon} style={{ fontSize: 19 }} />
                {s.handle}
              </a>
            ))}
          <div style={{ ...linkRow, color: "var(--color-neutral-400)" }}>
            <i className="ph ph-map-pin" style={{ fontSize: 19, color: "var(--color-accent)" }} />
            {site.location}
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
