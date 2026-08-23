import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{ padding: "clamp(40px,8cqw,110px) clamp(18px,4cqw,48px) clamp(50px,8cqw,120px)" }}
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
        404
      </div>
      <h1
        style={{
          fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(40px,9cqw,110px)",
          lineHeight: 0.9,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        NOTHING
        <br />
        HERE
      </h1>
      <p
        style={{
          margin: "20px 0 0",
          maxWidth: "40ch",
          fontSize: 16,
          lineHeight: 1.65,
          color: "var(--color-neutral-400)",
        }}
      >
        That page moved or never existed. The work is still where you left it.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26 }}>
        <Link className="btn btn-primary" href="/">
          Back home
          <i className="ph ph-arrow-right" />
        </Link>
        <Link className="btn btn-secondary" href="/work">
          See the work
        </Link>
      </div>
    </section>
  );
}
