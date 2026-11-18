import type { Metadata } from "next";
import Link from "next/link";

/* A 404 that gets indexed is a page competing with the real ones. */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      style={{ padding: "clamp(2.6667em,8cqw,7.3333em) clamp(1.2em,4cqw,3.2em) clamp(3.3333em,8cqw,8em)" }}
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
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(2.5rem,9cqw,6.875rem)",
          lineHeight: 0.9,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {/* The space keeps the accessible name two words. A bare <br>
            reads as "NOTHINGHERE". */}
        NOTHING{" "}
        <br />
        HERE
      </h1>
      <p
        style={{
          margin: "1.25em 0 0",
          maxWidth: "40ch",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--color-neutral-400)",
        }}
      >
        That page moved or never existed. The work is still where you left it.
      </p>
      <div style={{ display: "flex", gap: "0.6667em", flexWrap: "wrap", marginTop: "1.7333em" }}>
        <Link className="btn btn-primary" href="/">
          Back home
          <i aria-hidden="true" className="ph ph-arrow-right" />
        </Link>
        <Link className="btn btn-secondary" href="/work">
          See the work
        </Link>
      </div>
    </section>
  );
}
