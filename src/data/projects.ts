export type ProjectTag =
  | "Shopify"
  | "Apps"
  | "Performance"
  | "Infrastructure"
  | "Web";

/* Every project here is real work. A project with no matching entry in
   `caseStudies` 404s rather than rendering a stub — add both together. */

export type Project = {
  slug: string;
  name: string;
  /** Card label, e.g. "Shopify theme". */
  kind: string;
  year: string;
  /** One-line outcome shown on the card. */
  result: string;
  /** Placeholder copy for the (still empty) image slot. */
  ph: string;
  /** Filter bucket on /work. */
  tag: ProjectTag;
};

export const projects: Project[] = [
  {
    slug: "essential-upsell",
    name: "Essential Upsell",
    kind: "Shopify app",
    year: "2026",
    result: "Vector recommendations across five storefront placements",
    ph: "Admin — placement configuration",
    tag: "Apps",
  },
  {
    slug: "amoria",
    name: "AMORIA",
    kind: "Headless Shopify",
    year: "2026",
    result: "Headless storefront built end to end — Next.js on Shopify",
    ph: "Storefront — product page",
    tag: "Shopify",
  },
  {
    slug: "dfyne-storefront-refactor",
    name: "DFYNE storefront refactor",
    kind: "Performance",
    year: "2026",
    result: "LCP 2.3s → 1.6s, six apps removed",
    ph: "Before / after — home page",
    tag: "Performance",
  },
  {
    slug: "dfyne-cloudflare-migration",
    name: "DFYNE Cloudflare migration",
    kind: "Infrastructure",
    year: "2026",
    result: "US shoppers on the wrong store: 35% → 6%",
    ph: "Edge routing — US and rest-of-world stores",
    tag: "Infrastructure",
  },
  {
    slug: "open-door-bakery",
    name: "Open Door Bakery",
    kind: "Web build",
    year: "2026",
    result: "Storefront, admin and API — built, pre-launch",
    ph: "Storefront — mobile home page",
    tag: "Web",
  },
  {
    slug: "postbox",
    name: "Postbox",
    kind: "SaaS app",
    year: "2026",
    result: "Live multi-tenant SaaS, first pilot client onboarded",
    ph: "Ticket thread — inbox and conversation",
    tag: "Apps",
  },
];

/* Add a filter here only when a real project uses it — an empty category
   reads as missing work. */
export const projectFilters = [
  "All",
  "Shopify",
  "Apps",
  "Performance",
  "Infrastructure",
  "Web",
] as const;

/**
 * Featured on the home page, in order. Four, not three: the grid is three-up
 * on desktop and two-up on tablet, where three would leave an orphan on its
 * own row. The fourth is hidden once the grid goes three-up (globals.css).
 */
export const featuredSlugs = [
  "dfyne-cloudflare-migration",
  "essential-upsell",
  "amoria",
  "postbox",
];

export const featuredBlurbs: Record<string, string> = {
  "dfyne-cloudflare-migration": "Cloudflare · US shoppers on the wrong store, 35% → 6%",
  "dfyne-storefront-refactor": "Performance · LCP 2.3s → 1.6s, six apps removed",
  "essential-upsell": "Shopify app · Vector search over sales and returns",
  amoria: "Headless Shopify · Next.js, built end to end",
  "open-door-bakery": "Web build · Storefront, admin and API in one app",
  postbox: "SaaS · Contact form and support email in one inbox",
};

export const featuredPlaceholders: Record<string, string> = {
  "essential-upsell": "Project shot — recommendations on the product page",
  amoria: "Project shot — headless storefront",
  "dfyne-cloudflare-migration": "Project shot — edge routing",
  "dfyne-storefront-refactor": "Project shot — before / after",
  "open-door-bakery": "Project shot — storefront on mobile",
  postbox: "Project shot — ticket thread",
};

export type CaseStudy = {
  tags: string[];
  /** Rendered as the page <h1>. Wraps naturally across the measure — do not
      hard-break it, the title is sized to use the full width. */
  heading: string;
  intro: string;
  meta: { l: string; v: string }[];
  problem: string;
  approach: string;
  /** Omit until there are real numbers — the section hides rather than showing blanks. */
  results?: { n: string; l: string }[];
  /** Omit when there is no testimonial. */
  quote?: { text: string; who: string };
  /** Placeholder copy for the three image slots. */
  slots: { hero: string; shot1: string; shot2: string };
};

const caseStudies: Record<string, CaseStudy> = {
  postbox: {
    tags: ["App", "SaaS", "2026"],
    heading: "POSTBOX",
    intro:
      "A multi-tenant support-ticket system that turns a small business's website contact form and support email into one threaded inbox. The alternative for a small shop is a shared Gmail account where enquiries get lost, and the commercial helpdesks are priced and shaped for far larger teams.",
    meta: [
      { l: "Client", v: "Personal project — my own product" },
      { l: "Scope", v: "Multi-tenant SaaS, email threading, admin" },
      { l: "Timeline", v: "—" },
      { l: "Stack", v: "Next.js 16, TypeScript, Neon Postgres, Drizzle, Clerk, Resend, Vercel" },
      { l: "Live", v: "postbox.help" },
    ],
    problem:
      "A small business takes enquiries through two unrelated channels — a website contact form and a support inbox — with no shared history and no record of what was answered. The obvious fix, replying from the business's own domain, was not available: you cannot verify a domain you do not control, so mail sent as the client would fail authentication and land in spam. Replies had to originate from a domain I could verify while still threading correctly in the customer's mail client.",
    /* The reply-address token scheme and the tenancy boundary are deliberately
       not described here — the repo is public, and a portfolio page is not the
       place to hand someone a map of the security model. */
    approach:
      "One Next.js application, with tenancy scoped per workspace. The email loop is the substance of it. Replies send from a verified domain as \"Business Name\" <replies@…>, with a per-ticket reply address, so a customer answering in their own mail client lands back on the right thread without the business needing to hand over their domain. Threading anchors on the customer's own Message-ID rather than one I mint, because the sending infrastructure overwrites custom ids — that detail took the longest to find and is the difference between a conversation and a pile of disconnected emails. Inbound mail arrives by signature-verified webhook, with bodies fetched separately since the webhook carries only metadata.",
    /* Only three tiles because only three things were measured. Deliberately
       absent: latency (the London region pinning "roughly halved" it, but no
       before/after was recorded), ticket volume, uptime, deliverability. */
    results: [
      {
        n: "33% → 59%",
        l: "Share of a phone screen given to the conversation, 277px up to 495px",
      },
      { n: "260 → 180", l: "Pixels of interface above the first message on mobile" },
      { n: "0 → 27", l: "Unit tests over reply-parsing and threading logic" },
    ],
    /* TODO: every screenshot must use seeded data — real ones would contain
       customer names, addresses and message contents. */
    slots: {
      hero: "Desktop — inbox list beside an open ticket thread",
      shot1: "Mobile thread — before and after the responsive work",
      shot2: "A reply arriving in Gmail and threading back",
    },
  },

  "open-door-bakery": {
    tags: ["Web", "Pre-launch", "2026"],
    heading: "OPEN DOOR BAKERY",
    intro:
      "An online-only bakery platform — customer storefront, admin dashboard and API in a single Next.js app. It replaces the spreadsheet-and-messages way a small food business usually takes orders, putting ordering, collection scheduling, stock and recipe data in one place.",
    /* TODO: Client is unresolved — the repo, domain, Vercel and Asana are all
       yours and the handover doc addresses you as the person registering the
       food business, but the About section features a baker named Emma. Set
       this to "Personal venture" or the real client name before launch. */
    meta: [
      { l: "Client", v: "—" },
      { l: "Scope", v: "Storefront, admin dashboard, API" },
      { l: "Timeline", v: "About 4 weeks" },
      { l: "Stack", v: "Next.js 15, React 19, TypeScript, Neon Postgres, Stripe, Vercel" },
      { l: "Live", v: "opendoorbakery.com" },
    ],
    problem:
      "A one-person bakery needs the same machinery as a large one — payments, an order queue, collection slots, allergen data, a product catalogue — with none of the budget or staff to run it. Off-the-shelf platforms handle the shopfront and stop there: they do not model recipes, ingredient stock, or a kitchen that can only physically produce so much inside a half-hour collection window. Everything also had to stay maintainable by one non-technical person after handover.",
    approach:
      "Storefront, admin dashboard and API are one Next.js app on managed services, so there is no infrastructure to operate. Two decisions shaped the rest. The app boots with no configuration at all — an embedded PGlite database starts when no connection string is set — which made local development trivially isolated from live data. And counts are derived rather than stored: collection-slot bookings are computed from live orders instead of a counter column, so they cannot drift, and a cancellation genuinely releases its place. Capacity is re-checked on the server at checkout rather than trusted from the page.",
    /* Deliberately only two tiles. Nothing has sold — there is no traffic,
       conversion or revenue data, and a "0 orders" tile reads as failure
       rather than as honesty. Status is carried by the Pre-launch tag instead. */
    results: [
      { n: "0 → 125", l: "Automated tests, from no test runner at all" },
      { n: "4 wks", l: "First commit to deployed" },
    ],
    slots: {
      hero: "Storefront on mobile — product carousel and pre-launch notice",
      shot1: "Admin dashboard — order queue and recipe structure",
      shot2: "Checkout — collection slots, one full and disabled",
    },
  },

  "essential-upsell": {
    tags: ["Shopify", "App", "2026"],
    heading: "ESSENTIAL UPSELL",
    intro:
      "DFYNE lists every colourway as its own product, which breaks the assumption every off-the-shelf recommendations app is built on. So I built them their own — a vector search over sales and returns data, running in five places across the storefront.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "Internal Shopify app, five storefront placements" },
      { l: "Timeline", v: "3 months, alongside other work" },
      { l: "Stack", v: "Remix, Polaris, Cloud Run, Postgres + pgvector, BigQuery" },
    ],
    problem:
      "Shopify's native recommended-products API was returning weak results, because the store's sales data was never reaching it correctly — the backend had been set up wrong long before. Public recommendation apps were not an option either: they expect the standard metafields to be populated, colour above all, and DFYNE creates a separate product for every colourway. Anything off the shelf either returned nothing useful or treated eight colours of the same shorts as eight unrelated products.",
    approach:
      "I built an internal app instead. Nightly jobs pull every sale and return out of the BigQuery warehouse and embed them into a Postgres vector index, so recommendations come from what actually sells and what actually comes back — no hand-picked rules and no merchandiser input. The storefront gets five placements: two on the product page, plus search, cart and basket. Each one can be pointed at a different question — what pairs well with this, what sells best alongside it, what resembles it — so a shorts page and a cart drawer ask for different things. Where a shopper has accepted cookies the list also folds in what they have recently viewed, added or removed; where they haven't, Shopify metafields serve a cached fallback, which doubles as the fast path. It runs on Cloud Run behind its own subdomain on DFYNE's Cloudflare DNS, so storefront requests never hit a bot challenge.",
    /* TODO: swap in the AOV / attributed-revenue numbers once it has launched
       and the data exists. These four are all true today. */
    results: [
      {
        n: "5",
        l: "Storefront placements — two on the product page, plus search, cart and basket",
      },
      { n: "3", l: "Questions each placement can ask, from pairs-well-with to resembles-this" },
      { n: "0", l: "Hand-picked rules — every recommendation comes from sales and returns data" },
      { n: "3 mo", l: "Planning through to deployment, around other projects" },
    ],
    slots: {
      hero: "Admin — placement configuration",
      shot1: "Product page recommendations",
      shot2: "Cart recommendations",
    },
  },

  amoria: {
    tags: ["Shopify", "Headless build", "2026"],
    heading: "AMORIA",
    intro:
      "A silk sleepwear brand starting from nothing. I built the whole thing — the Shopify backend behind it, the markets and delivery rules, and a headless Next.js storefront in front.",
    meta: [
      { l: "Client", v: "AMORIA — freelance" },
      { l: "Scope", v: "Headless storefront, Shopify setup, markets and delivery" },
      { l: "Timeline", v: "—" },
      { l: "Stack", v: "Next.js, Shopify Storefront API" },
    ],
    problem:
      "A new brand with nothing in place: no product data in Shopify, no markets, no delivery rules and no storefront. Everything from the catalogue structure upwards had to be built, and it had to be fast and accessible rather than whatever a stock theme happened to hand over.",
    approach:
      "I built it end to end. On the Shopify side that meant modelling the products properly, setting up markets, and configuring delivery. On the front, a headless Next.js storefront against the Storefront API, so the brand got the pages it actually wanted rather than a theme's version of them. Performance and accessibility were built in as I went rather than audited on at the end — WCAG 2.0 throughout, including colour contrast, which shaped the palette as much as the design did.",
    /* TODO: no results tiles yet — nothing has been measured. Worth adding once
       you have Lighthouse/CWV figures, and the counts for markets, currencies,
       delivery zones and page types. Also fill in Timeline above. */
    slots: {
      hero: "Storefront — home page",
      shot1: "Product page",
      shot2: "Collection page",
    },
  },

  "dfyne-storefront-refactor": {
    tags: ["Performance", "Shopify", "2026"],
    heading: "STOREFRONT REFACTOR",
    intro:
      "DFYNE's storefront had accumulated the usual: apps nobody could account for, metafields nothing read, and scripts blocking the first paint. I took the home page from 2.3s to 1.6s and cut roughly £400 a month of subscriptions out along the way.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "Storefront refactor, app audit, script loading" },
      { l: "Timeline", v: "—" },
      { l: "Stack", v: "Shopify, Liquid, JavaScript" },
    ],
    problem:
      "The home page took 2.3 seconds to paint its largest element. No single thing was to blame — it was accumulation. Six third-party apps were each shipping their own JavaScript on every page, metafields nothing rendered were still sitting in the theme, and scripts with no part in the first paint were blocking it anyway.",
    approach:
      "I went through the theme and removed what nothing used: dead code, unused metafields, and six apps including Selecty — several of them doing work the theme could do itself. What had to stay was deferred wherever deferring it was safe, so the first paint stopped waiting on scripts it did not need. The apps that came out were worth about £400 a month on their own.",
    results: [
      { n: "1.6s", l: "Largest Contentful Paint on the home page, down from 2.3s" },
      { n: "−30%", l: "Time to the home page's largest paint" },
      { n: "6", l: "Third-party apps removed, Selecty among them" },
      { n: "~£400", l: "A month of app subscriptions, no longer being paid" },
    ],
    /* TODO: fill in Timeline above. Worth adding the JS weight before/after and
       whether PDP and collection pages moved too — those matter more
       commercially than the home page. */
    slots: {
      hero: "Before / after — home page waterfall",
      shot1: "Lighthouse — before",
      shot2: "Lighthouse — after",
    },
  },

  "dfyne-cloudflare-migration": {
    tags: ["Infrastructure", "Cloudflare", "2026"],
    heading: "CLOUDFLARE MIGRATION",
    intro:
      "DFYNE runs two Shopify stores on two domains — US and rest of world — that have to feel like one shop. Getting a shopper to the right one is not a nicety: on the wrong store they cannot check out at all. I moved DNS to Cloudflare and did the routing at the edge.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "DNS and nameserver migration, edge routing Worker" },
      { l: "Timeline", v: "—" },
      { l: "Stack", v: "Cloudflare DNS, Cloudflare Workers, Shopify" },
    ],
    problem:
      "Two stores, two domains, one brand. A shopper in the US who lands on the rest-of-world store cannot complete a purchase — their market is not served there — so routing decides whether the sale happens at all. The redirect was being handled by a Shopify app, and Shopify apps are JavaScript: the whole page has to load before the redirect can fire, so the shopper sees the wrong store, waits, and only then gets moved. Around 35% of US shoppers were on the wrong one.",
    approach:
      "I migrated DFYNE's DNS and nameservers to Cloudflare, which put a layer we controlled in front of both stores. The routing then became a Worker: the decision happens at the edge on the first request, before anything renders, so the shopper lands on the right store first time with no second load. Misrouted US traffic fell from around 35% to 6%, and conversion rose with it — a share of those shoppers had not been able to check out at all.",
    /* TODO: add the conversion-rate figure once you have it — you mentioned CVR
       rose but not by how much. Fill in Timeline above. */
    results: [
      { n: "35% → 6%", l: "US shoppers landing on the store they cannot buy from" },
      { n: "0", l: "Double page loads — the decision is made at the edge, before render" },
      { n: "2", l: "Storefronts routed as one brand, US and rest of world" },
    ],
    slots: {
      hero: "Edge routing — how a request reaches the right store",
      shot1: "Before — app-based redirect",
      shot2: "After — Worker at the edge",
    },
  },

};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

/** The project after this one, wrapping at the end. */
export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
