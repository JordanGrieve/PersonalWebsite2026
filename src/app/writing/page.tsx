import type { Metadata } from "next";
import Link from "next/link";
import { displayDate, posts } from "@/data/posts";
import JsonLd from "@/components/JsonLd";
import { writingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/writing" },
  title: "Blog",
  description: "Short posts on Shopify, caching and the boring parts of making sites fast.",
};

export default function WritingPage() {
  return (
    <>
      <JsonLd data={writingSchema()} />
    <section
      style={{ padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)" }}
    >
      <div
        style={{
          font: "500 0.6875rem/1 var(--font-heading)",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: 14,
        }}
      >
        Blog
      </div>
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
          margin: "20px 0 0",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--color-neutral-400)",
        }}
      >
        Short posts on Shopify, caching and the boring parts of making sites fast.
      </p>
      <div style={{ marginTop: 32 }}>
        {posts.map((p) => (
          <Link
            key={p.slug}
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
              gap: 14,
              padding: "22px 0",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "var(--color-neutral-500)" }}>
              <time dateTime={p.published}>{displayDate(p.published)}</time> · {p.read}
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <div
                style={{
                  font: "500 clamp(1.125rem,2.2cqw,1.5rem)/1.25 var(--font-heading)",
                  letterSpacing: "-.02em",
                  color: "var(--color-text)",
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "var(--color-neutral-400)",
                }}
              >
                {p.dek}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}
