import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { liveSocials, site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import NewTabHint from "@/components/NewTabHint";
import { contactSchema } from "@/lib/schema";

const title = "Contact";
const description =
  "Hire Jordan Grieve for Shopify, web or performance work. Tell me what you're building and roughly when you need it — I reply within a day.";

/* openGraph and twitter are set in full: Next.js replaces a nested metadata
   key rather than merging it with the layout's, so leaving either out means
   a share of this page describes the home page. */
export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${site.url}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

/* minHeight clears the 24px target minimum — these rows were 23px. */
const linkRow = {
  display: "flex",
  alignItems: "center",
  gap: "0.7333em",
  fontSize: "0.9375rem",
  minHeight: 24,
  padding: "0.2667em 0",
} as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema()} />
    <section
      style={{
        padding: "clamp(2em,5cqw,4.5333em) clamp(1.2em,4cqw,3.2em) clamp(2.6667em,6cqw,5.6em)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "clamp(1.6em,4cqw,3.4667em)",
        alignItems: "start",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "clamp(2.375rem,8cqw,6rem)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
            margin: 0,
          }}
        >
          LET&apos;S TALK
        </h1>
        <p
          style={{
            margin: "1.25em 0 0",
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "var(--color-neutral-300)",
          }}
        >
          I am looking for a software role — Scotland or remote — with problems I have not
          solved before and people who will stretch me. If you are hiring, tell me about the
          role and I will reply within a day.
        </p>
        <ul
          className="plain-list"
          style={{ marginTop: "1.8667em", display: "flex", flexDirection: "column", gap: "0.9333em" }}
        >
          <li>
          <a href={`mailto:${site.email}`} style={linkRow}>
            <i aria-hidden="true" className="ph ph-envelope-simple" style={{ fontSize: "1.1875rem" }} />
            {site.email}
          </a>
          </li>
          {liveSocials.map((s) => (
            <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={linkRow}
            >
              <i aria-hidden="true" className={s.icon} style={{ fontSize: "1.1875rem" }} />
              {/* The handle is a bare URL, which says where but not what:
                  the icon that tells a sighted reader "GitHub" is hidden
                  from a screen reader, so the name goes in for them. */}
              <span className="sr-only">{s.label}: </span>
              {s.handle}
              <NewTabHint />
            </a>
            </li>
          ))}
          <li style={{ ...linkRow, color: "var(--color-neutral-400)" }}>
            <i aria-hidden="true" className="ph ph-map-pin" style={{ fontSize: "1.1875rem", color: "var(--color-accent)" }} />
            <span className="sr-only">Based in: </span>
            {site.location}
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
    </>
  );
}
