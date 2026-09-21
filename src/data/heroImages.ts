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
    fit: "contain",
    alt: "An illustration of one stream of light entering from the left, passing through a single glowing gateway marked with a globe, and splitting into two clean paths that each end at a storefront.",
  },
  /* Folder named for the old slug. The project is "DFYNE site performance"
     now; the URL, and so the folder, stayed. */
  "dfyne-mobile-performance": {
    src: "/images/work/dfyne-mobile-performance/hero.png",
    fit: "contain",
    alt: "An illustration of a glowing track running left to right. At the left it is buried under a jam of dark blocks; the blocks thin out across the frame until the track runs clear and unbroken into a lit panel at the right.",
  },
  "open-door-bakery": {
    src: "/images/work/open-door-bakery/03-home-desktop.png",
    alt: "The Open Door Bakery home page: a watercolour hero reading Welcome to Open Door Bakery, buttons to shop and to order something custom, and a row of category cards.",
  },
  /* Folder named ai-job-prep, project slug "land", product called
     Callback. Three names for one thing; the folder and the URL stay as
     they are because both are already published. */
  land: {
    src: "/images/work/ai-job-prep/hero.png",
    alt: "The Callback landing page: a headline reading Practise the interview before it counts, a line saying it runs a live voice mock interview against the exact job you are chasing, and a Start practising free button.",
  },
};
