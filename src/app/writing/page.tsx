import type { Metadata } from "next";
import Link from "next/link";
import { displayDate, posts } from "@/data/posts";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { writingSchema } from "@/lib/schema";

const title = "Blog";
const description = "Short posts on Shopify, caching and the boring parts of making sites fast.";

/* openGraph and twitter are set here in full: Next.js replaces a nested
   metadata key rather than merging it with the layout's, so leaving either
   out means a share of /writing describes the home page. */
export const metadata: Metadata = {
  alternates: { canonical: "/writing" },
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${site.url}/writing`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WritingPage() {
  return (
    <>
      <JsonLd data={writingSchema()} />
    <section
      style={{ padding: "clamp(2em,5cqw,4.5333em) clamp(1.2em,4cqw,3.2em) clamp(2.6667em,6cqw,5.6em)" }}
    >
      <p
        style={{
          font: "500 0.6875rem/1 var(--font-heading)",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          margin: "0 0 1.2727em",
        }}
      >
        Blog
      </p>
      <h1
        style={{
          fontSize: "clamp(2.375rem,8cqw,6rem)",
          lineHeight: 0.9,
          letterSpacing: "-.04em",
          margin: 0,
        }}
      >
        NOTES ON SHIPPING
      </h1>
      <p
        style={{
          margin: "1.25em 0 0",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--color-neutral-400)",
        }}
      >
        Short posts on Shopify, caching and the boring parts of making sites fast.
      </p>
      <ul className="plain-list" style={{ marginTop: "2.1333em" }}>
        {posts.map((p) => (
          <li key={p.slug}>
          <Link
            href={`/writing/${p.slug}`}
            /* As with the project grid: one post gets read, not four.
               58.6kB of prefetch on this page down to 21.5kB. */
            prefetch={false}
            className="hov-fade"
            style={{
              width: "100%",
              textAlign: "left",
              borderTop: "1px solid var(--color-divider)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "0.9333em",
              padding: "1.4667em 0",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "var(--color-neutral-500)" }}>
              <time dateTime={p.published}>{displayDate(p.published)}</time> · {p.read}
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <h2
                style={{
                  margin: 0,
                  font: "500 clamp(1.125rem,2.2cqw,1.5rem)/1.25 var(--font-heading)",
                  letterSpacing: "-.02em",
                  color: "var(--color-text)",
                }}
              >
                {p.title}
              </h2>
              <div
                style={{
                  marginTop: "0.5714em",
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "var(--color-neutral-400)",
                }}
              >
                {p.dek}
              </div>
            </div>
          </Link>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}
