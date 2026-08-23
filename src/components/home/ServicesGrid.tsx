"use client";

import { useState } from "react";
import { services } from "@/data/home";

/**
 * Six service cards. Below the 640px breakpoint the grid collapses into an
 * accordion, so only one description shows at a time.
 *
 * Which one is open lives here; everything else — the collapse, the open and
 * close animation, and the fact that none of it applies above 640px — is CSS
 * keyed off `data-open`. That keeps the two halves from disagreeing during
 * hydration, which a JS breakpoint check could not.
 */
export default function ServicesGrid() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      id="svcGrid"
      style={{
        gridColumn: "span 2",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
        gap: 14,
      }}
    >
      {services.map((sv, i) => (
        <div
          key={sv.no}
          className="hov-lift"
          onClick={() => setOpen(open === i ? null : i)}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-lg)",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 196,
          }}
        >
          <i className={sv.icon} style={{ fontSize: 26, color: "var(--color-accent)" }} />
          <h4 style={{ margin: 0, fontSize: 15, letterSpacing: ".04em", textTransform: "uppercase" }}>
            {sv.title}
          </h4>
          <b style={{ display: "none", fontWeight: 400, color: "var(--color-neutral-500)" }}>
            <i className={open === i ? "ph ph-minus" : "ph ph-plus"} style={{ fontSize: 16 }} />
          </b>
          <div className="svc-body" data-open={open === i}>
            {/* This div is what clips to the collapsing row, so it carries no
                padding of its own — padding on a grid item does not shrink
                with the row, and would leave a closed row 10px tall. */}
            <div style={{ overflow: "hidden", minHeight: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "var(--color-neutral-400)",
                }}
              >
                {sv.body}
              </p>
            </div>
          </div>
          <span
            style={{
              marginTop: "auto",
              font: "500 11px/1 var(--font-heading)",
              letterSpacing: ".1em",
              color: "var(--color-neutral-600)",
            }}
          >
            {sv.no}
          </span>
        </div>
      ))}
    </div>
  );
}
