"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades each top-level block of the page in as it scrolls into view.
 *
 * Visibility is owned by CSS (see `.js-reveal` in globals.css), which only
 * hides anything under the mobile media query and only when motion is not
 * reduced. This component's single job is to add `is-in`. If it never runs —
 * JS disabled, an error earlier in the tree — nothing is ever hidden, so the
 * page cannot end up blank.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main > *")).filter(
      (el) => !["TEMPLATE", "SCRIPT", "STYLE"].includes(el.tagName),
    );
    const reveal = (el: Element) => el.classList.add("is-in");
    /** Abandon the effect entirely — nothing stays hidden. */
    const showEverything = () => {
      document.documentElement.classList.remove("js-reveal");
      targets.forEach(reveal);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal everything up front when the effect does not apply, so nothing
    // can be left hidden by a browser that will never run the observer.
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    let observed = false;
    const observer = new IntersectionObserver(
      (entries) => {
        observed = true;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));

    // Failsafe. A hide-then-reveal effect blanks the page if the reveal never
    // arrives, so if the observer has not reported anything at all shortly
    // after mount, drop the effect rather than risk showing nothing. Only
    // while the tab is visible — a backgrounded tab legitimately defers its
    // first callback until the reader arrives.
    const failsafe = window.setTimeout(() => {
      if (!observed && document.visibilityState === "visible") showEverything();
    }, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
