import type { Metadata } from "next";
import Link from "next/link";
import { tiers } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Indicative prices so you know if we're in the same range. Final quote comes after a short call.",
};

export default function PricingPage() {
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
        Pricing
      </div>
      <h1
        style={{
          fontSize: "clamp(38px,8cqw,96px)",
          lineHeight: 0.9,
          letterSpacing: "-.04em",
          margin: 0,
        }}
      >
        PLAIN NUMBERS
      </h1>
      <p
        style={{
          margin: "20px 0 0",
          maxWidth: "48ch",
          fontSize: 16,
          lineHeight: 1.65,
          color: "var(--color-neutral-400)",
        }}
      >
        Indicative prices so you know if we&apos;re in the same range. Final quote comes after a
        short call.
      </p>
      <div
        style={{
          marginTop: 34,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              borderRadius: "var(--radius-lg)",
              padding: 26,
              background: "var(--color-surface)",
              border: `1px solid ${t.border}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 19, letterSpacing: ".02em" }}>{t.name}</h3>
              <span className={t.tagClass} style={{ fontSize: 10.5 }}>
                {t.tag}
              </span>
            </div>
            <div
              style={{
                marginTop: 18,
                font: "500 clamp(30px,3.6cqw,42px)/1 var(--font-heading)",
                letterSpacing: "-.03em",
                color: "var(--color-text)",
              }}
            >
              {t.price}
            </div>
            <div style={{ marginTop: 7, fontSize: 12.5, color: "var(--color-neutral-500)" }}>
              {t.note}
            </div>
            <ul
              style={{
                margin: "22px 0 0",
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {t.items.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "var(--color-neutral-300)",
                  }}
                >
                  <i className="ph ph-check" style={{ color: "var(--color-accent)", fontSize: 15 }} />
                  {it}
                </li>
              ))}
            </ul>
            <Link className="btn btn-block btn-primary" href="/contact" style={{ marginTop: 24 }}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, fontSize: 13.5, color: "var(--color-neutral-500)" }}>
        Retainers from £600/month for ongoing storefront and performance work.
      </div>
    </section>
  );
}
