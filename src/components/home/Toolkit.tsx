"use client";

import { useEffect, useState } from "react";
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
 *
 * Each note is a tooltip in the ARIA sense: always in the document, hidden
 * until wanted, and tied to its button with `aria-describedby`, so a screen
 * reader gets "TypeScript, button" and then the note, whether or not it is
 * showing. It used to be rendered inside the button only while visible, which
 * made the note part of the button's name — a name that changed the moment
 * the button was focused — and gave a screen reader no way to reach it
 * otherwise.
 *
 * It also meets WCAG 1.4.13 for content that appears on hover: Escape
 * dismisses it without moving the pointer, the pointer can travel onto the
 * note without it vanishing, and it stays until dismissed.
 */
export default function Toolkit() {
  const [open, setOpen] = useState<number | null>(null);
  const [peek, setPeek] = useState<number | null>(null);
  const anyShown = open !== null || peek !== null;

  /* On the document rather than the button: a note opened by hovering has no
     focused element to hear the key. */
  useEffect(() => {
    if (!anyShown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      setPeek(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [anyShown]);

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        padding: "1.6em",
      }}
    >
      <h2
        style={{
          margin: "0 0 1.125rem",
          fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(1.5rem,2.6cqw,2rem)",
          letterSpacing: 0,
          color: "var(--color-accent)",
        }}
      >
        MY TOOLKIT
      </h2>
      {/* minmax(0,1fr) not 1fr: a bare `1fr` floors each track at its
          min-content width (the "TypeScript" label), which made the grid
          burst out of this card at narrow widths. */}
      <ul
        id="toolGrid"
        className="plain-list"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "0.8em" }}
      >
        {toolkit.map((t, i) => {
          const shown = open === i || peek === i;
          return (
            <li
              key={t.name}
              style={{ position: "relative" }}
              /* On the item, not the button, so the note — a child of the
                 item — counts as still being inside while the pointer is on
                 it. */
              onMouseEnter={() => setPeek(i)}
              /* Only clear if this tile is the one peeking — a stale leave
                 event must not close whichever tile is showing now. */
              onMouseLeave={() => setPeek((p) => (p === i ? null : p))}
            >
              <button
                type="button"
                className="hov-border"
                onClick={() => setOpen(open === i ? null : i)}
                onFocus={() => setPeek(i)}
                onBlur={() => setPeek((p) => (p === i ? null : p))}
                aria-describedby={`tool-note-${i}`}
                style={{
                  /* A button does not inherit its font — the UA stylesheet sets
                     Arial on it — so without this the twelve tool labels were the
                     only text on the site not set in Inter. Nothing looks broken,
                     which is why it survived this long. */
                  font: "inherit",
                  cursor: "pointer",
                  background: "none",
                  width: "100%",
                  height: "100%",
                  border: "1px solid var(--color-divider)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.8em 0.4em",
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
                  <i aria-hidden="true" className={t.icon} style={{ fontSize: "1.25rem", color: "var(--color-accent)" }} />
                )}
                <span
                  style={{
                    display: "block",
                    marginTop: "0.6364em",
                    fontSize: "0.6875rem",
                    color: "var(--color-neutral-400)",
                  }}
                >
                  {t.name}
                </span>
              </button>
              {/* Two boxes. The outer one does the positioning and reaches all
                  the way down to the tile, so there is no gap for the pointer
                  to fall through on its way up to the note; the inner one is
                  the note you see. */}
              <span
                id={`tool-note-${i}`}
                role="tooltip"
                className="tool-note"
                hidden={!shown}
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 170,
                  zIndex: 20,
                  paddingBottom: "0.6em",
                }}
              >
                <span
                  style={{
                    display: "block",
                    background: "var(--color-neutral-900)",
                    border: "1px solid var(--color-accent-700)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-md)",
                    padding: "0.7826em 0.9565em",
                    font: "400 0.71875rem/1.45 var(--font-body)",
                    color: "var(--color-neutral-200)",
                    textAlign: "left",
                    animation: "riseIn .18s ease both",
                  }}
                >
                  {t.what}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
