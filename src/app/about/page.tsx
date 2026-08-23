import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { timeline } from "@/data/home";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend developer in Scotland, working on a storefront thousands of people shop through every week.",
};

export default function AboutPage() {
  return (
    <>
      <section
        id="aboutSec"
        style={{
          padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(22px,4cqw,52px)",
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              font: "500 11px/1 var(--font-heading)",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: 14,
            }}
          >
            About
          </div>
          <h1
            style={{
              fontSize: "clamp(38px,8cqw,96px)",
              lineHeight: 0.9,
              letterSpacing: "-.04em",
              margin: 0,
            }}
          >
            I MAKE WEBSITES FEEL QUICK.
          </h1>
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: "48ch",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--color-neutral-300)",
            }}
          >
            I&apos;m Jordan, a frontend developer based in Scotland. I spend my days at Dfyne — one
            of the fastest-growing businesses in the country — working on the storefront thousands
            of people shop through every week.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              maxWidth: "48ch",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--color-neutral-400)",
            }}
          >
            That job taught me what actually moves numbers in ecommerce: page weight, cache
            strategy, and getting out of the customer&apos;s way. Outside it I take on freelance
            builds — Shopify themes, custom apps, and rescue work on sites that have got slow.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26 }}>
            <a className="btn btn-primary" href="#" download>
              <i className="ph ph-download-simple" />
              &nbsp;Download CV
            </a>
            <Link className="btn btn-secondary" href="/contact">
              Say hello
            </Link>
          </div>
        </div>
        <div id="aboutPhoto" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "10% 8%",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(145,132,217,.35),transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <Image
            src="/images/jordan-hero-image.png"
            alt="Jordan"
            width={1086}
            height={1448}
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
              borderRadius: "var(--radius-lg)",
              aspectRatio: "4/5",
              objectFit: "cover",
              filter: "grayscale(.2)",
            }}
          />
        </div>
      </section>

      <section style={{ padding: "clamp(34px,5cqw,72px) clamp(18px,4cqw,48px)" }}>
        <h2 style={{ fontSize: "clamp(24px,3.6cqw,40px)", letterSpacing: "-.03em", margin: "0 0 24px" }}>
          THE SHORT VERSION
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {timeline.map((t) => (
            <div
              key={t.what}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                gap: 12,
                padding: "18px 0",
                borderTop: "1px solid var(--color-divider)",
              }}
            >
              <div
                style={{
                  font: "500 13px/1 var(--font-heading)",
                  letterSpacing: ".1em",
                  color: "var(--color-accent)",
                }}
              >
                {t.when}
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <div style={{ font: "500 16px/1.3 var(--font-heading)" }}>{t.what}</div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--color-neutral-400)",
                  }}
                >
                  {t.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
