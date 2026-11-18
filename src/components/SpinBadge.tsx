/** The rotating "JORDAN · SOFTWARE DEVELOPER · SHOPIFY · SPEED" seal. */
export default function SpinBadge({
  arcId,
  textFill,
  initialsSize,
}: {
  /** Must be unique per instance — it is an SVG path reference. */
  arcId: string;
  textFill: string;
  /** Any CSS font-size, in rem — a bare number here would be px. */
  initialsSize: string;
}) {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        /* The spin itself lives in globals.css behind `.motion-on`, which
           DeferMotion adds on first interaction. */
        className="spin-badge"
        style={{ width: "100%", height: "100%", transformOrigin: "50% 50%" }}
      >
        <defs>
          <path
            id={arcId}
            d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"
            fill="none"
          />
        </defs>
        <text style={{ fontSize: "0.5rem", letterSpacing: "2.4px", fill: textFill, fontFamily: "Inter, sans-serif" }}>
          <textPath href={`#${arcId}`}>
            JORDAN · SOFTWARE DEVELOPER · SHOPIFY · SPEED ·{" "}
          </textPath>
        </text>
      </svg>
      {/* Hidden along with the seal: the initials are part of the same
          ornament, and "JD" read out on its own means nothing. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
          fontSize: initialsSize,
          letterSpacing: ".02em",
          color: "var(--color-accent)",
        }}
      >
        JD
      </div>
    </>
  );
}
