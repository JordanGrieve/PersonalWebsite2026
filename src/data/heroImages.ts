import type { Shot } from "@/data/projects";

/**
 * Each project's hero image, keyed by slug.
 *
 * In its own module rather than inline in `projects.ts`, because the work
 * grid is a client component: importing anything from `projects.ts` that
 * reaches `caseStudies` ships every case study's prose to the browser.
 * Doing exactly that cost `/work` 12kB of JavaScript, for two image paths.
 *
 * `projects.ts` reads from here, so this is still the only place a hero's
 * path and description are written down.
 */
export const heroImages: Record<string, Shot> = {
  "dfyne-cloudflare-migration": {
    src: "/images/work/dfyne-cloudflare-migration/hero.png",
    alt: "An illustration of one stream of light entering from the left, passing through a single glowing gateway marked with a globe, and splitting into two clean paths that each end at a storefront.",
  },
};
