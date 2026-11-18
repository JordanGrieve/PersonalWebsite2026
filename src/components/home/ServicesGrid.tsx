"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/data/home";

/**
 * Six service cards. Below the 640px breakpoint the list collapses into an
 * accordion, so only one description shows at a time.
 *
 * Which one is open lives here; everything else — the collapse, the open and
 * close animation, and the fact that none of it applies above 640px — is CSS
 * keyed off `data-open`. That keeps the two halves from disagreeing during
 * hydration, which a JS breakpoint check could not.
 *
 * The markup is the standard accordion: a list of items, each a heading that
 * contains the button, followed by the panel it controls. It used to be one
 * `<button>` wrapped round the whole card, heading and paragraph included.
 * A button flattens whatever is inside it, so the six titles were not headings
 * to a screen reader at all and each card read out as one long run-on label.
 */
export default function ServicesGrid() {
  const [open, setOpen] = useState<number | null>(0);
  /* Whether the accordion is actually live. Above the breakpoint every body is
     visible and there is nothing to expand, so the title is plain text there:
     a button that does nothing is a wasted focus stop, and `aria-expanded` on
     it would describe a state that does not exist.

     Read from a custom property the stylesheet sets inside the same container
     query that collapses the list, rather than from `matchMedia`. The query
     resolves against `.wrap`, not the viewport, so a media query for the same
     640px disagrees with it across a 56px band — where the list was collapsed
     and this still said it was not. Asking the stylesheet means there is one
     answer.

     Never used for layout, so there is no hydration flash: server and first
     client render both start false and this settles after mount. */
  const [isAccordion, setIsAccordion] = useState(false);
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const sync = () =>
      setIsAccordion(getComputedStyle(grid).getPropertyValue("--svc-accordion").trim() === "1");
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      id="svcGrid"
      ref={gridRef}
      className="plain-list"
      style={{
        gridColumn: "span 2",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))",
        gap: "0.9333em",
      }}
    >
      {services.map((sv, i) => {
        const isOpen = open === i;
        return (
          <li
            key={sv.no}
            className="hov-lift"
            style={{
              /* Positioned so the title button's `::after` can stretch over the
                 whole row — see `.svc-toggle` in globals.css. */
              position: "relative",
              background: "var(--color-surface)",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-lg)",
              padding: "1.3333em",
              display: "flex",
              flexDirection: "column",
              gap: "0.8em",
              minHeight: 196,
            }}
          >
            <i aria-hidden="true" className={sv.icon} style={{ fontSize: "1.625rem", color: "var(--color-accent)" }} />
            <h3 style={{ margin: 0, fontSize: "0.9375rem", letterSpacing: ".04em", textTransform: "uppercase" }}>
              {isAccordion ? (
                <button
                  type="button"
                  className="svc-toggle"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`svc-body-${i}`}
                >
                  {sv.title}
                </button>
              ) : (
                sv.title
              )}
            </h3>
            <span
              className="svc-sign"
              aria-hidden="true"
              style={{ display: "none", color: "var(--color-neutral-500)" }}
            >
              <i className={isOpen ? "ph ph-minus" : "ph ph-plus"} style={{ fontSize: "1rem" }} />
            </span>
            {/* `inert` while collapsed: the row is clipped to nothing, but
                clipping is only visual, and without this a screen reader reads
                all six descriptions straight through the closed rows. */}
            <div
              className="svc-body"
              id={`svc-body-${i}`}
              data-open={isOpen}
              inert={isAccordion && !isOpen}
            >
              {/* This div is what clips to the collapsing row, so it carries no
                  padding of its own — padding on a grid item does not shrink
                  with the row, and would leave a closed row 10px tall. */}
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.84375rem",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-400)",
                  }}
                >
                  {sv.body}
                </p>
              </div>
            </div>
            {/* The "01" to "06" are ornament. The list already gives a screen
                reader the position and the count. */}
            <span
              className="svc-no"
              aria-hidden="true"
              style={{
                marginTop: "auto",
                font: "500 0.6875rem/1 var(--font-heading)",
                letterSpacing: ".1em",
                color: "var(--color-neutral-500)",
              }}
            >
              {sv.no}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
