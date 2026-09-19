"use client";

import { useEffect } from "react";

/**
 * Starts the site's two looping animations — the spinning badge and the hero
 * glow — on the visitor's first interaction rather than on load.
 *
 * Why: Speed Index is the integral of how visually incomplete the viewport is
 * over time, so anything that keeps changing pixels stops the page ever
 * reaching a final state. Measured at 412x823 before this: 24 of 24
 * screenshots over six seconds were distinct, with no two consecutive frames
 * ever alike. Both animations had to stop for that to settle — killing either
 * one alone still left 23 or 24 distinct frames. Neither is a Core Web Vital
 * and no real visitor was harmed, but a red Speed Index on the site of someone
 * who sells speed audits is its own kind of problem.
 *
 * The same shape as the fix in the DFYNE site performance case study: tie the
 * work to the intent that needs it. Nobody is watching a badge rotate before
 * they have touched the page, and Lighthouse never interacts at all.
 *
 * Visibility is owned by CSS (`.motion-on` in globals.css). If this never runs
 * — JS disabled, an error earlier in the tree — the badge and the glow simply
 * stay still, which is a complete design rather than a broken one.
 */
export default function DeferMotion() {
  useEffect(() => {
    const root = document.documentElement;

    /* Reduced motion means never, not later. The reveal transitions in
       globals.css already sit behind this query; these two loops did not,
       which was a gap — they ran regardless of the setting. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on from an earlier page in this session — nothing to arm.
    if (root.classList.contains("motion-on")) return;

    const start = () => {
      root.classList.add("motion-on");
      remove();
    };

    /* `scroll` is on window and the rest on document, which is where a tap or
       a key lands first. All passive: none of them call preventDefault, and
       saying so keeps them off the scrolling critical path. */
    const events = ["pointerdown", "keydown", "touchstart", "wheel"] as const;
    const remove = () => {
      window.removeEventListener("scroll", start);
      for (const e of events) document.removeEventListener(e, start);
    };

    window.addEventListener("scroll", start, { passive: true, once: true });
    for (const e of events) {
      document.addEventListener(e, start, { passive: true, once: true });
    }

    return remove;
  }, []);

  return null;
}
