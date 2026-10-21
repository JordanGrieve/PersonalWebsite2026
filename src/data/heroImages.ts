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
  coinpulse: {
    src: "/images/work/coinpulse/03-coin-detail-bitcoin.png",
    alt: "The CoinPulse detail page for Bitcoin: the price at $86,362 with the day's change beside it, a candlestick chart with a period switcher from one day to one year, and a panel of market cap, rank and volume.",
  },
  "dfyne-homepage": {
    src: "/images/work/dfyne-homepage/01-hero-dynamic.png",
    fit: "contain",
    alt: "The DFYNE homepage: a full-bleed photograph of two athletes, the word DYNAMIC set over it, and two buttons reading Shop Dynamic and Best Sellers, with the site header above.",
  },
  "dfyne-cloudflare-migration": {
    src: "/images/work/dfyne-cloudflare-migration/hero.png",
    cardPosition: "72% center",
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
  postbox: {
    src: "/images/work/postbox/08-ticket-thread.png",
    fit: "contain",
    alt: "The Postbox inbox: a folder sidebar with counts, a list of tickets with coloured labels, and an open thread showing a customer enquiry, the automatic acknowledgement and two replies.",
  },
  "open-door-bakery": {
    src: "/images/work/open-door-bakery/03-home-desktop.png",
    alt: "The Open Door Bakery home page: a watercolour hero reading Welcome to Open Door Bakery, buttons to shop and to order something custom, and a row of category cards.",
  },
  /* Folder is still named ai-job-prep — the images are published at
     those paths and renaming them would break every one. The slug itself
     used to be "land", which was a leftover; /work/land now redirects. */
  callback: {
    src: "/images/work/ai-job-prep/hero.png",
    alt: "The Callback landing page: a headline reading Practise the interview before it counts, a line saying it runs a live voice mock interview against the exact job you are chasing, and a Start practising free button.",
  },
};
