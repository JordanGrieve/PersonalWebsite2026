"use client";

import { useState } from "react";
import { toolkit } from "@/data/home";

/** Twelve tools; tapping one reveals a one-line note above it. */
export default function Toolkit() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        padding: 24,
      }}
    >
      <h3
        style={{
          margin: "0 0 18px",
          fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(24px,2.6cqw,32px)",
          letterSpacing: 0,
          color: "var(--color-accent)",
        }}
      >
        MY TOOLKIT
      </h3>
      {/* minmax(0,1fr) not 1fr: a bare `1fr` floors each track at its
          min-content width (the "TypeScript" label), which made the grid
          burst out of this card at narrow widths. */}
      <div
        id="toolGrid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 12 }}
      >
        {toolkit.map((t, i) => (
          <button
            key={t.name}
            className="hov-border"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              position: "relative",
              cursor: "pointer",
              background: "none",
              width: "100%",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-md)",
              padding: "12px 6px",
              textAlign: "center",
              borderColor: open === i ? "var(--color-accent)" : "var(--color-divider)",
            }}
          >
            {t.path ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                style={{
                  width: 20,
                  height: 20,
                  display: "block",
                  margin: "0 auto",
                  fill: "var(--color-accent)",
                }}
              >
                <path d={t.path} />
              </svg>
            ) : (
              <i className={t.icon} style={{ fontSize: 20, color: "var(--color-accent)" }} />
            )}
            <div style={{ marginTop: 7, fontSize: 11, color: "var(--color-neutral-400)" }}>
              {t.name}
            </div>
            {open === i ? (
              <span
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 9px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 170,
                  zIndex: 20,
                  background: "var(--color-neutral-900)",
                  border: "1px solid var(--color-accent-700)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-md)",
                  padding: "9px 11px",
                  font: "400 11.5px/1.45 var(--font-body)",
                  color: "var(--color-neutral-200)",
                  textAlign: "left",
                  animation: "riseIn .18s ease both",
                }}
              >
                {t.what}
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
