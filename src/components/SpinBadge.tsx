/** The rotating "JORDAN · FRONTEND DEVELOPER · SHOPIFY · SPEED" seal. */
export default function SpinBadge({
  arcId,
  textFill,
  initialsSize,
}: {
  /** Must be unique per instance — it is an SVG path reference. */
  arcId: string;
  textFill: string;
  initialsSize: number;
}) {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        style={{ width: "100%", height: "100%", animation: "spin 22s linear infinite", transformOrigin: "50% 50%" }}
      >
        <defs>
          <path
            id={arcId}
            d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"
            fill="none"
          />
        </defs>
        <text style={{ fontSize: 8, letterSpacing: "2.4px", fill: textFill, fontFamily: "Inter, sans-serif" }}>
          <textPath href={`#${arcId}`}>
            JORDAN · FRONTEND DEVELOPER · SHOPIFY · SPEED ·{" "}
          </textPath>
        </text>
      </svg>
      <div
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
