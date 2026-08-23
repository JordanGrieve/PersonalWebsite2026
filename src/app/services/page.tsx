import type { Metadata } from "next";
import Link from "next/link";
import { serviceDetail } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six things I do often enough to be quick at. Fixed scope where possible, day rate where it isn't.",
};

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) 0" }}>
        <div
          style={{
            font: "500 11px/1 var(--font-heading)",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 14,
          }}
        >
          Services
        </div>
        <h1
          style={{
            fontSize: "clamp(38px,8cqw,96px)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
            margin: 0,
          }}
        >
          WHAT YOU CAN HIRE ME FOR
        </h1>
        <p
          style={{
            margin: "20px 0 0",
            maxWidth: "50ch",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--color-neutral-400)",
          }}
        >
          Six things I do often enough to be quick at. Fixed scope where possible, day rate where it
          isn&apos;t.
        </p>
      </section>

      <section
        style={{
          padding: "clamp(30px,4cqw,60px) clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {serviceDetail.map((s) => (
          <div
            key={s.title}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(20px,3cqw,32px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 22,
            }}
          >
            <div>
              <i className={s.icon} style={{ fontSize: 28, color: "var(--color-accent)" }} />
              <h3 style={{ margin: "14px 0 10px", fontSize: 22, letterSpacing: "-.02em" }}>
                {s.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "var(--color-neutral-400)",
                }}
              >
                {s.body}
              </p>
              <div
                style={{
                  marginTop: 16,
                  font: "500 12px/1 var(--font-heading)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {s.from}
              </div>
            </div>
            <div>
              <div
                style={{
                  font: "500 11px/1 var(--font-heading)",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  marginBottom: 12,
                }}
              >
                What you get
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {s.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "var(--color-neutral-300)",
                    }}
                  >
                    <i className="ph ph-check" style={{ color: "var(--color-accent)", fontSize: 16 }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <Link className="btn btn-primary" href="/pricing" style={{ alignSelf: "flex-start" }}>
          See packages &amp; prices
          <i className="ph ph-arrow-right" />
        </Link>
      </section>
    </>
  );
}
