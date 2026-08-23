import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Short posts on Shopify, caching and the boring parts of making sites fast.",
};

export default function WritingPage() {
  return (
    <section
      style={{ padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)" }}
    >
      <div
        style={{
          font: "500 11px/1 var(--font-heading)",
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
          fontSize: "clamp(38px,8cqw,96px)",
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
          maxWidth: "46ch",
          fontSize: 16,
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
            <div style={{ fontSize: 12, color: "var(--color-neutral-500)" }}>
              {p.date} · {p.read}
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <div
                style={{
                  font: "500 clamp(18px,2.2cqw,24px)/1.25 var(--font-heading)",
                  letterSpacing: "-.02em",
                  color: "var(--color-text)",
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 14,
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
  );
}
