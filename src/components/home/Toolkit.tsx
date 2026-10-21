"use client";

import { useState } from "react";
import { toolkit } from "@/data/home";

/**
 * Twelve tools, each with a one-line note above it.
 *
 * Two ways in, because they answer different inputs. Hover and keyboard
 * focus `peek` — transient, gone the moment the pointer leaves. A click
 * `open`s, which sticks, so a tap on a touchscreen (where there is no
 * hover to speak of) still works and still toggles off.
 *
 * Kept as two pieces of state rather than one: with a single value, moving
 * the mouse away from a tile you had clicked would close it, and leaving a
 * tile you had only hovered would clear a different tile you had pinned.
 */
export default function Toolkit() {
  const [open, setOpen] = useState<number | null>(null);
  const [peek, setPeek] = useState<number | null>(null);

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
          fontSize: "clamp(1.5rem,2.6cqw,2rem)",
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
        {toolkit.map((t, i) => {
          const shown = open === i || peek === i;
          return (
          <button
            key={t.name}
            className="hov-border"
            onClick={() => setOpen(open === i ? null : i)}
            onMouseEnter={() => setPeek(i)}
            /* Only clear if this tile is the one peeking — a stale leave
               event must not close whichever tile is showing now. */
            onMouseLeave={() => setPeek((p) => (p === i ? null : p))}
            onFocus={() => setPeek(i)}
            onBlur={() => setPeek((p) => (p === i ? null : p))}
            aria-expanded={shown}
            style={{
              /* A button does not inherit its font — the UA stylesheet sets
                 Arial on it — so without this the twelve tool labels were the
                 only text on the site not set in Inter. Nothing looks broken,
                 which is why it survived this long. */
              font: "inherit",
              position: "relative",
              cursor: "pointer",
              background: "none",
              width: "100%",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-md)",
              padding: "12px 6px",
              textAlign: "center",
              borderColor: shown ? "var(--color-accent)" : "var(--color-divider)",
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
              <i className={t.icon} style={{ fontSize: "1.25rem", color: "var(--color-accent)" }} />
            )}
            <div style={{ marginTop: 7, fontSize: "0.6875rem", color: "var(--color-neutral-400)" }}>
              {t.name}
            </div>
            {shown ? (
              <span
                /* The note sits over the tile above it, so it must not eat
                   that tile's own hover. */
                style={{
                  pointerEvents: "none",
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
                  font: "400 0.71875rem/1.45 var(--font-body)",
                  color: "var(--color-neutral-200)",
                  textAlign: "left",
                  animation: "riseIn .18s ease both",
                }}
              >
                {t.what}
              </span>
            ) : null}
          </button>
          );
        })}
      </div>
    </div>
  );
}
