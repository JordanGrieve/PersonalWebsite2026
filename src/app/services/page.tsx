import type { Metadata } from "next";
import Link from "next/link";
import { serviceDetail } from "@/data/services";
import JsonLd from "@/components/JsonLd";
import { servicesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "Shopify, web builds, performance, SEO and GEO, Cloudflare and analytics work. Fixed scope where possible, day rate where it isn't.",
};

export default function ServicesPage() {
  /* Spelled out rather than a numeral, and counted rather than typed. The deck
     said "Six things" for two services past the point it was true — hardcoded
     copy about a list is copy that goes stale the moment the list changes. */
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const count = words[serviceDetail.length] ?? String(serviceDetail.length);

  return (
    <>
      <JsonLd data={servicesSchema()} />
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
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--color-neutral-400)",
          }}
        >
          {count} things I do often enough to be quick at — Shopify, web builds, performance,
          SEO, Cloudflare and analytics. Fixed scope where possible, day rate where it isn&apos;t.
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
        {/* `alignSelf` keeps it to its own width on desktop; the rule in
            globals.css stretches it across the column on a phone. */}
        <Link
          id="servicesCta"
          className="btn btn-primary"
          href="/pricing"
          style={{ alignSelf: "flex-start" }}
        >
          See packages &amp; prices
          <i className="ph ph-arrow-right" />
        </Link>
      </section>
    </>
  );
}
