import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { liveSocials, site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { contactSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Hire Jordan Grieve for Shopify, web or performance work. Tell me what you're building and roughly when you need it — I reply within a day.",
};

/* minHeight clears the 24px target minimum — these rows were 23px. */
const linkRow = {
  display: "flex",
  alignItems: "center",
  gap: 11,
  fontSize: 15,
  minHeight: 24,
  padding: "4px 0",
} as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema()} />
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
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--color-neutral-300)",
          }}
        >
          I am looking for a frontend role — Scotland or remote — with problems I have not
          solved before and people who will stretch me. If you are hiring, tell me about the
          role and I will reply within a day.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
          <a href={`mailto:${site.email}`} style={linkRow}>
            <i className="ph ph-envelope-simple" style={{ fontSize: 19 }} />
            {site.email}
          </a>
          {liveSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={linkRow}
            >
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
    </>
  );
}
