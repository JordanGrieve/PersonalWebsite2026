import { heroImages } from "@/data/heroImages";

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
    result: "Headless storefront built end to end — Hydrogen on Shopify Oxygen",
    ph: "Storefront — product page",
    tag: "Shopify",
  },
  {
    slug: "dfyne-cloudflare-migration",
    name: "DFYNE geo-routing",
    kind: "Infrastructure",
    year: "2026",
    result: "Shoppers on the wrong store: 35% → 6% one way, 45% → under 9% the other",
    ph: "Traffic share by store — both directions, across two releases",
    tag: "Infrastructure",
  },
  {
    slug: "dfyne-fit-finder",
    name: "DFYNE size advisor",
    kind: "Integration",
    year: "2026",
    result: "AI size advisor wired into two Shopify Plus storefronts, end to end",
    ph: "Product page — the size advisor call to action",
    tag: "Shopify",
  },
  {
    slug: "dfyne-mobile-performance",
    name: "DFYNE site performance",
    kind: "Performance",
    year: "2026",
    result: "LCP for real visitors: 1.81s → 1.31s, and under a second on the US store",
    ph: "Main thread — before and after",
    tag: "Performance",
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
  "dfyne-fit-finder",
  "essential-upsell",
  /* Fourth slot: seen on tablet and mobile, hidden once the grid goes
     three-up. Postbox came out of the four to make room for the size advisor;
     it is still on /work. */
  "amoria",
];

export const featuredBlurbs: Record<string, string> = {
  "dfyne-cloudflare-migration": "Cloudflare · Shoppers on the wrong store, 35% → single digits",
  "dfyne-fit-finder": "Integration · AI size advisor across two Shopify Plus stores",
  "essential-upsell": "Shopify app · Vector search over sales and returns",
  amoria: "Headless Shopify · Hydrogen on Oxygen, built end to end",
  "open-door-bakery": "Web build · Storefront, admin and API in one app",
  postbox: "SaaS · Contact form and support email in one inbox",
};

export const featuredPlaceholders: Record<string, string> = {
  "essential-upsell": "Project shot — recommendations on the product page",
  amoria: "Project shot — headless storefront",
  "dfyne-cloudflare-migration": "Project shot — edge routing",
  "dfyne-fit-finder": "Project shot — size advisor on the product page",
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
  /** Work that was built, measured and then thrown away. Optional, and worth
      filling in where it exists: what got rejected and why is usually a better
      read on how someone works than the list of things that shipped. */
  rejected?: { what: string; why: string }[];
  /** Things that broke as a consequence of the change, and what fixed them.
      Not a list of mistakes — it is what a given approach actually costs,
      which is the part most write-ups leave out. */
  incidents?: { what: string; why: string }[];
  /** Heading and standfirst for that list. Both optional — the page has a
      generic pair, and a study only names its own when the cost is specific
      enough to be worth naming. */
  incidentsTitle?: string;
  incidentsNote?: string;
  /** Omit when there is no testimonial. */
  quote?: { text: string; who: string };
  /** Placeholder copy for the three image slots. Still required: it is what
      renders while a slot has no real image, and it doubles as the alt text
      once one arrives. */
  slots: { hero: string; shot1: string; shot2: string };
  /** Real images, as they arrive. Keyed to the same three slots, so a study
      can have one, two or all three without anything else changing. */
  shots?: { hero?: Shot; shot1?: Shot; shot2?: Shot };
  /** Supporting images below the incidents. For a study with more evidence
      than the three slots can hold. */
  gallery?: Shot[];
};

/** `src` is a path under /public. `alt` describes it; `caption` is printed. */
export type Shot = { src: string; alt: string; caption?: string };

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
    /* The baker is not named. Whether she wants to appear on a public page
       has not been asked, and that is not a thing to assume on her behalf.
       Hamilton is fine; the address is not, and nothing here narrows it. */
    intro:
      "An online-only bakery in Hamilton, near Glasgow, run by one baker. Storefront, admin dashboard and API in a single application, built around the thing that actually limits a bakery: not stock, but oven time on a particular morning. It has never traded — the engineering is finished and the business is not, which is the honest shape of this one.",
    meta: [
      { l: "Client", v: "Open Door Bakery — Hamilton, Scotland" },
      { l: "Scope", v: "Storefront, admin dashboard, API, database, deployment" },
      { l: "Timeline", v: "July to September 2026, evenings and weekends" },
      {
        l: "Stack",
        v: "Next.js 15, React 19, TypeScript, Neon Postgres, raw SQL, Stripe, Resend, Cloudinary, Vercel",
      },
      { l: "Status", v: "Built and deployed, not launched" },
      { l: "Live", v: "opendoorbakery.com — password-locked until the business opens" },
    ],
    problem:
      "A bakery does not run out of stock the way a shop does. It runs out of Saturday morning. Twelve products, each with its own lead time, all competing for the same oven and the same pair of hands, and an order is only possible if the work fits in the days before the date the customer wants it.\n\nThat is three different scarcities pulling on one another. A product has a lead time, and a basket inherits the longest one in it — order a croissant and a celebration cake together and the whole order moves to the cake's timeline. A collection slot has a capacity, which may be unlimited, may be a number, and may be zero to close it. And a product can be unavailable on a given day regardless of either. None of the three composes neatly with the others, which is the interesting part of the domain and the part no off-the-shelf checkout models.\n\nThere is no before here, and the page should not pretend otherwise. The business has never taken an order by any method — not by spreadsheet, not by direct message, not at all. Nothing was replaced and nothing got faster. What exists is a first system, built to the rules the baker described about how the work actually happens.",
    approach:
      "Build or buy is worth answering honestly: a mix of wanting to and needing to. Every rule above can be forced onto a hosted platform with enough apps bolted to it, so the build was not strictly necessary. What it bought was rules that behave exactly as described rather than approximately, and a stack with no monthly fee for a business with no revenue.\n\nIt is one Next.js application with three surfaces: eleven storefront pages, twelve admin pages, and around thirty-five API routes. Postgres underneath with hand-written SQL migrations and no ORM.\n\nThe rules are enforced where they cannot be argued with. Booked places are derived by counting live orders rather than kept in a counter, so they cannot drift and a cancellation genuinely frees the place. Capacity is re-checked on the server at checkout rather than trusted from the page that offered the slot, because a client-side check is bypassable and two people can submit at the same moment. Delivery matches on the outward part of the postcode rather than a radius, which is fiddlier than it sounds — ML10 is not in ML1, and a naive prefix match says it is. Money is pence throughout, with the rounding unit-tested.\n\nThe admin is the half that decides whether any of this gets used, because the person using it runs the bakery alone between bakes and has no patience for software. So it is shaped around not making her think: leaving a capacity blank means unlimited rather than demanding a number, margin health reads as words rather than percentages, and a product whose recipe has any uncosted ingredient reports that its cost is unknown instead of showing a confident partial figure that happens to be wrong.\n\nThe decision that paid for itself repeatedly was zero-config local development. Clone it, install, run — no database, no API keys, nothing to provision. A WASM Postgres builds and seeds itself, and every external service degrades to logging what it would have done, with checkout confirming directly when there are no payment keys. It is what makes the whole thing testable, and 136 tests run against it.",
    /* No results tiles. Nothing has been measured, because nothing has run:
       no orders, no traffic, no conversion. Page counts and test counts are
       not results, and dressing them up as a row of numbers would be the
       exact move this study spends a section criticising. */
    rejected: [
      {
        what: "CSS keyframes for the mobile drawer, then requestAnimationFrame",
        why: "Both are throttled when the tab is in the background or being previewed, so the drawer opened to nothing and stayed there. A plain timeout was the thing that worked, which is not the answer anyone wants.",
      },
      {
        what: "Dropping SMS notifications for launch",
        why: "My own recommendation — email only, one fewer service to configure. Reversed: a baker is not at a screen, and an order placed for tomorrow morning is only useful if it reaches her.",
      },
      {
        what: "A regex over the build output as proof a script was bundled",
        why: "It reported the anti-spam script missing and I believed it. The pattern could not handle the parentheses in App Router route-group paths, so it was scanning for something it could never match. Verify the tool before you accept its conclusion.",
      },
    ],
    incidentsTitle: "What went wrong",
    incidentsNote:
      "Nothing here was found by a customer, because there have not been any. Each of these was found by going looking, and each is the kind that reports success while doing nothing.",
    incidents: [
      {
        what: "The contact form was dead for six weeks",
        why: "Every submission answered \"couldn't send your message\", and nothing anywhere said why. The cause was trivial — an integration key in production had stopped being valid — but the failure path logged nothing, so the one piece of evidence that would have identified it in a single submission was thrown away every time. Found by deliberately sending an invalid request to see what came back, then confirming against the database rather than believing the interface. Not one enquiry had ever arrived.",
      },
      {
        what: "The site made claims that were not true",
        why: "Three testimonials, a star rating and an order count sat on the home page of a shop that had never sold anything, and a section headed \"bestselling\" listed products nobody had ever bought. Placeholder marketing copy written to fill a layout had quietly become factual claims the moment the site went up. Removed: the page now shows only real approved reviews, with an empty state that says there are none yet.",
      },
      {
        what: "Local databases silently stopped applying migrations",
        why: "The bootstrap only ran when the main table was missing, so any sandbox that already existed kept whatever schema it was first created with. Every migration after the first had never been applied locally, and nothing failed to announce it. Fixed by tracking applied migrations in a table, the way the real database does.",
      },
      {
        what: "Every customer's text message would have failed, silently",
        why: "Checkout only checked that a phone number was not empty, so \"07700 900123\" was stored exactly as typed — and the provider requires the international form. The send path swallowed the rejection without logging it. Worse, the owner's own alerts were written in international form and would have gone through, so from the inside it would have looked like it worked. Fixed with a normaliser and twelve tests, before any credentials existed to fail with.",
      },
    ],
    slots: {
      hero: "The storefront on a phone — the ordering flow the customer sees",
      shot1: "Checkout's slot picker — one slot fully booked, another with places left",
      shot2: "The order queue in the dashboard, with a day's orders on it",
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
      "AMORIA is my own brand — soft-luxury silk sleepwear — and the storefront is a headless Shopify front end rather than a theme. That was not a business case worked out after the fact. In this category the look is most of the product, I had designed the thing myself, and a theme is a set of somebody else's decisions you then spend your time arguing with. Headless meant every element on the page was mine to decide, and every one a theme gives away free was mine to build.",
    meta: [
      { l: "Client", v: "My own business — brand, design and build" },
      { l: "Scope", v: "Storefront, cart, reviews, account routes, markets, CI" },
      { l: "Timeline", v: "Summer 2026 to now — launching February 2027" },
      {
        l: "Stack",
        v: "Hydrogen 2026.4.3, React Router 7, Vite 8, TypeScript, Shopify Oxygen, Judge.me, PostBox",
      },
      { l: "Status", v: "Storefront done, launch configuration pending" },
      { l: "Live", v: "byamoria.com — password page until launch" },
    ],
    problem:
      "Silk sleepwear sells on how it looks on the page. Spacing, type, the exact weight of a hover state — that is the product argument, not decoration, and a design of my own is worth nothing if the storefront renders an approximation of it. So the brief I set myself was that the built page matches the style guide, and the style guide is the source of truth rather than a mood board the code drifts away from.\n\nThe cost of that decision is the whole of the rest of this page. A Shopify theme hands you a reviews widget, a working contact form, a returns flow, and an editor a non-developer can change copy in. Headless hands you none of them. Everything below is either something I built because the platform stopped providing it, or something that broke because I had to build it.",
    approach:
      "Hydrogen on React Router 7, Vite and TypeScript, server-rendered at the edge on Shopify's Oxygen and streaming deferred data through Suspense. There is no static generation or incremental regeneration in this stack and no way to add it: Oxygen is a V8 worker runtime with no filesystem and no Node APIs, so every page is rendered per request, close to the visitor.\n\nProduct data comes from the Storefront API with generated types, customer data from the Customer Account API — which rules out classic customer accounts, they are incompatible. The cart is Hydrogen's cart handler behind a drawer built on a native dialog element, and checkout is Shopify's own, reached through the cart's checkout URL. Markets are an optional locale segment in the route, with hreflang and a canonical per route and the buyer's country passed into the API, rather than a separate store per market.\n\nReviews are the clearest example of what the decision bought and cost. Judge.me ships a widget that drops into a theme; what it does not ship is a presentation I would choose. So the reviews are fetched server-side from its REST API behind a five-minute cache, and the front of it is mine: a score and histogram, a featured pull-quote, six per page, a photo lightbox on a native dialog, and a submission form that posts through a server route. Both site forms do the same thing — they post to route actions rather than fetching from the browser, which is not what the form service recommends, but it means spam can be dropped server-side and the forms still work with JavaScript off.\n\nThe build is AI-assisted, which is worth saying plainly because it shaped what went wrong. It is quick at the parts that are typing and confident at the parts that need looking: the review photos that rendered as alt text, the contact form that reported success while sending nothing, and the fifteen reviews posted into a 201 response and no database row were all caught by a person opening the page, not by the code that wrote it. What it is good at is the work either side of that — the typed API layer, the route scaffolding, the CI.\n\nOn which: every pull request runs typecheck, lint and a set of CSS guards, and every deploy is audited afterwards with Lighthouse and axe against the real preview. Afterwards rather than before, because a Hydrogen build cannot serve a page without Storefront credentials — there is nothing to audit until it is deployed.",
    /* The SEO score is the one number that needs its caveat kept next to it
       wherever it appears, so it is in the label rather than a footnote. */
    results: [
      {
        n: "0.97–0.99",
        l: "Lighthouse performance across the four page types — CI median of three runs, desktop, 11 September",
      },
      { n: "0.9–1.0s", l: "LCP on those same runs, with CLS at 0 or 0.009 and no blocking time" },
      {
        n: "0 of 30",
        l: "axe-core audits finding a violation — 15 routes at two viewports, WCAG 2.2 AA",
      },
      { n: "1.00", l: "Accessibility score on every page measured" },
    ],
    rejected: [
      {
        what: "A 15px offset in the cart drawer's inset",
        why: "Measured as an identical 15px at 1100, 1440 and 1920, which looked like a stable relationship worth encoding. It was the scrollbar: the measurement read window width, which includes it, while the page lays out 15px narrower. The same error three times is not a pattern.",
      },
      {
        what: "Champagne as the hover colour on the star-rating input",
        why: "Hovering a five-star answer paled it before refilling, so the answer appeared to vanish under the cursor at the moment of choosing it. Gold instead.",
      },
      {
        what: "Social links in the footer and contact block",
        why: "Every one pointed at a platform's home page rather than at AMORIA, because the accounts do not exist yet. A link that goes to instagram.com is not a social link.",
      },
      {
        what: "Driving the admin through Shopify's Admin API",
        why: "No static access token exists for this store, so there is no unattended path to it. Abandoned rather than worked around.",
      },
      {
        what: "Testing keyboard and scroll behaviour in an automated browser pane",
        why: "It could not be trusted — a plain dialog element ignored its own Escape key in that environment. Switched to driving real Chrome, which is where the contact-form bug finally showed itself.",
      },
    ],
    incidents: [
      {
        what: "Judge.me ignored the filter that picks the product",
        why: "Passing a nonsense handle returned the same reviews as a real one. Left alone, every product page would have shown every review on the store. Fixed by resolving the handle to an internal id first and checking the handle that comes back.",
      },
      {
        what: "Fifteen review submissions went nowhere",
        why: "An invalid value in an optional field made the API answer 201 and create nothing. A success response is not evidence of a saved row.",
      },
      {
        what: "The review count was the size of the page, not the total",
        why: "Twenty per page meant the structured data would have told Google there were twenty reviews however many there actually were.",
      },
      {
        what: "Review photos rendered as alt text",
        why: "The content security policy has to be maintained by hand, and a third-party image host is not in it until you add it. This one bit three separate times before the lesson took.",
      },
      {
        what: "Both forms reported success and sent nothing",
        why: "An unconditional preventDefault left at the top of the handler. The contact form validated, cleared itself and said the message had been received, for months. Nothing in the UI could have told you otherwise.",
      },
      {
        what: "The newsletter form crashed to the error boundary",
        why: "Posting to the site root targets the locale layout route, which has no action. It needs the index query parameter — and fixing it that way left subscribers looking at a URL with ?index in it, so it became a fetcher instead.",
      },
      {
        what: "The cart promised free shipping the checkout then charged for",
        why: "A £75 threshold hardcoded in two components while the shipping configuration said there was no free threshold in any market. Customers would have been congratulated on the way to being charged.",
      },
      {
        what: "A button that disappeared when you pointed at it",
        why: "The light button fills with warm black on hover, and on a warm-black panel that is 1.00:1 against its background. Its focus ring had no on-dark variant either, so a keyboard lost it in the same place.",
      },
      {
        what: "The accessibility gate quietly stopped running",
        why: "CI's Chrome drifted away from the bundled driver. Nothing failed — it just stopped testing, which is the worse of the two outcomes.",
      },
    ],
    slots: {
      hero: "Storefront — home page",
      shot1: "Product page — the full design, at 1440",
      shot2: "The reviews overview — score, histogram and a featured quote",
    },
  },

  "dfyne-cloudflare-migration": {
    tags: ["Infrastructure", "Cloudflare", "2026"],
    heading: "SENDING SHOPPERS TO THE STORE THAT CAN SELL TO THEM",
    intro:
      "DFYNE runs two Shopify stores behind one brand — one for the US, one for everywhere else. The catalogue is the same on both, so nothing looks wrong. What differs is whether the store can ship to you, and Shopify only says so at checkout — after you have browsed, chosen sizes and filled a basket. At its worst, a third of the traffic on the rest-of-world store was American, and nearly half the traffic on the US store was not. Replacing the paid app that was supposed to prevent that meant work at the edge and work in the theme, and neither half is any use without the other.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "Cloudflare Worker, apex DNS, in-house region switcher on both themes" },
      { l: "Timeline", v: "Routing rework late July 2026, enforcement mid-August" },
      { l: "Stack", v: "Cloudflare Workers, Cloudflare DNS, Shopify, Liquid, Dash0" },
      { l: "Role", v: "Mine end to end — found it, scoped it, shipped it, unprompted" },
      { l: "Monitoring", v: "Both directions, alerting at a 35% threshold" },
    ],
    /* Frank about what the first pass missed — that is the point of the page.
       The third-party region-switching app is not named: the criticism is of a
       gap in how we used it, and naming a vendor for that is gratuitous. */
    problem:
      "Both stores carry the same products, so a shopper on the wrong one sees nothing amiss. Prices in another currency do not stop anyone — plenty of sites quote in dollars. The problem is delivery: that store will not ship to their address, and Shopify does not mention it until checkout.\n\nSo the cost is not a moment of confusion. It is five or ten minutes of someone browsing, picking sizes and filling a basket, and being told no at the last step. Nor can they simply move: the two stores do not share a session, so the basket does not travel. Starting again on the right store means doing all of it a second time, and most people do not. They leave, and the ones who say anything say it in public rather than to us — which was worst during launches, when traffic was at its peak and a post complaining that the site will not ship to you is read by everyone waiting to buy. At its worst that was a third of the traffic on one store and nearly half on the other, which makes routing a revenue problem rather than a tidiness one.\n\nIt had been handled by a Shopify app, [Selecty](https://apps.shopify.com/selectors). Shopify apps are JavaScript, and an app cannot act until the page it is on has loaded — so the shopper watched the wrong store render in full, then got sent somewhere else and watched a second page load. Two page loads to arrive at the shop they should have been given first. Being an app also meant the logic was not ours to change and the switcher was not ours to style, so it never looked like the rest of the site. It carried a monthly fee for the privilege.\n\nA Cloudflare worker had since taken over the decision of which store to send someone to, and people were still landing on the wrong one. Auditing it turned up three causes, worst first.\n\nThe apex domain was a DNS-only record pointing at Shopify, not proxied through Cloudflare. A Worker route only fires on traffic that actually reaches Cloudflare, so anyone typing the bare domain was never geo-routed at all — the routing worked perfectly on every hostname except the one people type.\n\nSecond, the worker set a region cookie on every proxied pageview. Land once on the wrong store, and that mistake was written down and honoured from then on. The system was pinning people to the error it had just made.\n\nThird, region switching still belonged to the app, whose links set no cookie the worker understood. So a shopper could deliberately choose a region, and the next navigation would silently overrule them. Three different mechanisms, none of which agreed on who decides.",
    approach:
      "The fix is one rule: an explicit choice beats geography, always, and geography only decides for visitors who have not chosen. Everything else follows from making that rule true in both places at once.\n\nAt the edge, the apex flipped from DNS-only to proxied so the route finally fires. Deciding there rather than in an app is what removes the second page load — the redirect happens on the first request, before anything renders, so there is no wrong store to sit through. A single endpoint became the only thing that may set the choice cookie, which means a deliberate switch is now a fact the worker can read rather than a guess. Non-document requests, checkout and account paths, and bots bypass the worker entirely.\n\nIn the theme, the app's switcher was replaced with an in-house one rendered from a single snippet in two places per page, namespaced so both instances work independently, with every link pointing at that one endpoint. Six stores and their currencies, in the site's own type and spacing, instead of every country in the world alphabetically. A confirmation card appears only on a genuine mismatch between where you are and the store you are on, and snoozes for an hour if you dismiss it. The whole thing sits behind one theme setting, so reverting to the old app needs no deploy.\n\nThe enforcement flag shipped switched off, on purpose. Turning it on before the switcher was live on both stores would have meant bouncing mismatched visitors while the only way to choose a region still set no cookie the worker recognised — a shopper would have been thrown back every time they tried to leave. It went on once both themes were serving the new switcher. That coupling is permanent and worth writing on the wall: with enforcement on, turning the theme setting off breaks region switching completely.\n\nWhat replacing the app bought, beyond the routing: the monthly fee stopped and nothing took its place. Cloudflare was already paid for, so the worker runs at no marginal cost. The logic became ours to change, the switcher became ours to style, and the whole thing became measurable — the numbers on this page exist because the traffic now passes through something we own.",
    incidentsTitle: "What proxying Shopify cost",
    incidentsNote:
      "Putting a worker in front of a platform activates it on paths nobody was thinking about. These four surfaced in production and were fixed, most of them by route configuration rather than an application change.",
    incidents: [
      {
        what: "Gift card links looped forever",
        why: "Shopify serves gift cards only from the store's primary domain and 302s them back from any regional host. Fixed with a more specific Cloudflare route that excludes the worker.",
      },
      {
        what: "Shopify Markets links fought the worker",
        why: "Links carrying a country parameter looped against the worker's own redirect. Fixed by stripping the parameter once it had been spent.",
      },
      {
        what: "Customer-account sign-in broke",
        why: "OAuth does not survive a proxy in the middle of it. Fixed by excluding the account subdomains at route level.",
      },
      {
        what: "Google indexed the redirects",
        why: "Google was fetching the apex with user agents no regex could keep up with, producing 113,000 “alternative page with proper canonical” and 7,600 “page with redirect” items in Search Console. Bypassing on network operator rather than user agent fixed what string matching could not.",
      },
    ],
    results: [
      /* The two that came out: a count of the production conflicts, which the
         section below already lists and explains, and the 113,000 Search
         Console items, which measured the problem rather than the outcome and
         read as nonsense out of context. Both facts are still on the page,
         where there is room to say what they mean. */
      { n: "35% → 6%", l: "US shoppers on the store that will not ship to them" },
      { n: "45% → <9%", l: "Non-US shoppers on the US store, after enforcement went on" },
      { n: "2 → 1", l: "Page loads to reach the right store — the app could not redirect until the wrong one had finished rendering" },
      { n: "£0/mo", l: "To run the replacement — Cloudflare was already paid for. The app it removed was not" },
    ],
    slots: {
      hero: "Who decides — explicit choice, geography, and the order they are read in",
      shot1: "US share of traffic on the rest-of-world store, falling to single digits",
      shot2: "The region switcher, rebuilt in-house — six stores instead of every country",
    },
    /* The hero is the one illustration on the page rather than evidence: it
       is what a reader sees before they have read anything, so it carries
       the shape of the work and nothing else. The two shots are the evidence
       for the headline number and for the theme half of the fix. */
    shots: {
      hero: heroImages["dfyne-cloudflare-migration"],
      shot1: {
        src: "/images/work/dfyne-cloudflare-migration/traffic-drop.png",
        alt: "A line chart of US traffic share on the rest-of-world store, running between roughly 15 and 35 percent and repeatedly hitting the alert threshold, then dropping to a flat low line.",
      },
      shot2: {
        src: "/images/work/dfyne-cloudflare-migration/switcher-new.png",
        alt: "The in-house region switcher open, listing United Kingdom, United States, Europe, Canada, Australia and International, each with its currency.",
      },
    },
    /* Sits under the incidents, which is where the routes table belongs: every
       fix in that list is visible in it as a disabled route. */
    gallery: [
      {
        src: "/images/work/dfyne-cloudflare-migration/worker-routes.png",
        alt: "Cloudflare worker routes. The apex and wildcard routes run the worker; gift cards, both customer-account subdomains and the /cdn-cgi paths are set to disable it.",
        caption:
          "Every incident above, as a route. The apex finally bound to the worker — and gift cards, both account subdomains and /cdn-cgi explicitly excluded from it.",
      },
      {
        src: "/images/work/dfyne-cloudflare-migration/switcher-old.png",
        alt: "The previous region switcher, an alphabetical list of every country from Andorra onwards, with Argentina selected.",
        caption:
          "What it replaced: every country in the world, alphabetically, defaulting to Argentina. Switching region here set no cookie the worker understood.",
      },
      {
        src: "/images/work/dfyne-cloudflare-migration/switcher-mobile.png",
        alt: "The rebuilt region switcher on a phone, showing the same six stores.",
        caption: "The same switcher on a phone. One snippet, rendered twice per page.",
      },
      {
        src: "/images/work/dfyne-cloudflare-migration/new-selecty-working.png",
        alt: "The US store on a phone with a card over it reading 'Continue on the UK store?' — 'Shop in your own market for local pricing, currency and delivery. Orders placed on the US store can't be delivered to a UK address.' — above a 'Shop UK store' button and a 'Stay on US' link. A bar pinned to the top of the page asks the same thing.",
        caption:
          "The mismatch card, on the store that cannot ship to this shopper. It says so on the product page rather than at checkout, and taking it is what sets the cookie the worker reads. Moving is not a reset either: the product and size they had come with them, and they land on the same page on the store that can actually deliver — so the journey they were on carries on instead of starting again. Dismissing it is a choice too, and sticks for an hour.",
      },
      {
        src: "/images/work/dfyne-cloudflare-migration/worker-metrics.png",
        alt: "Cloudflare metrics for the routing worker: 2.61 billion invocations, 766.6 requests per second, a 0% error rate and 0.63ms median CPU time.",
        caption:
          "What it carries: 766 requests a second at a 0% error rate, on 0.63ms of CPU each. Per-host traffic volumes cropped out.",
      },
    ],
  },

  /* This shipped, and the figures were re-measured against the live site
     rather than promoted from the preview ones. Two sources: Dash0 for what
     real sessions saw, Cloudflare Observatory for the daily synthetic run.
     Anything still quoted from the preview says so where it appears — the
     problem and approach sections describe work in progress and keep their
     original numbers. */
  "dfyne-mobile-performance": {
    tags: ["Performance", "Shopify", "2026"],
    /* Was "taking seventy percent off the main thread" — a preview figure,
       and the wrong promise now there is field data. Both stores came down
       by at least half a second for real sessions, which is the same work
       described in terms of who felt it. */
    heading: "HALF A SECOND OFF, FOR EVERY VISITOR",
    intro:
      "The largest thing on DFYNE's page now paints in 1.31 seconds for real visitors to the rest-of-world store, and in under a second on the US one. Before this shipped those figures were 1.81 and 1.61 seconds. The work behind them was main-thread work — a phone loading the home page spent nearly four seconds unable to respond to a tap, not downloading anything, just running scripts — and the fix turned out to have nothing to do with the hero image everyone suspects first.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "Home page — third-party scripts, image delivery, bundles" },
      { l: "Timeline", v: "One engagement, September 2026" },
      {
        l: "Stack",
        v: "Shopify, Impulse theme, Lighthouse, Chrome tracing, Cloudflare Observatory, Dash0",
      },
      { l: "Status", v: "Shipped — live on both storefronts" },
    ],
    problem:
      "The home page scored 51 on mobile and took over eighteen seconds to become interactive. The obvious suspect on a storefront is the hero image, and that is where I started. It was the wrong place.\n\nBefore any of that, though, I had to fix the instrument. Runs kept producing fourteen to seventeen second paint times that nothing on the page explained. A saved trace showed the emulated viewport sitting at zero height for a second and a half with the compositor presenting no frames — an artefact of driving a browser window I could see. I threw away every figure collected that way and moved the harness to headless. Roughly one run in three had been failing falsely, which would have sent me hunting a live problem that did not exist.\n\nThe second correction was to take a third-party tool seriously. It reported blocking time a hundred times worse than my own harness, which is easy to dismiss as noise. Turning the CPU throttle up to 8x reproduced the same shape locally — and a reproducible problem is an attributable one, script by script, instead of an argument about whose number is right.",
    approach:
      "Tracing settled where the time actually went. The hero image finished downloading 150ms before first paint rather than after it, and first paint landed 30ms after the document finished streaming. So the paint was gated by document delivery and script execution, not by the image. That redirected the whole engagement away from image work and onto the main thread.\n\nThe pattern for the fixes was the same each time: tie third-party code to the intent that needs it rather than to page load. The review widget waits for first interaction — I proved the star ratings on product cards are server-rendered and revealed by CSS, so the vendor's 120KB script was never needed to display them, only to track clicks. Email capture loads near the form, the loyalty widget on a rewards click, the announcement rotator on first interaction. That last one had been counting as continuous visual change and inflating Speed Index on its own.\n\nThe rest was delivery. The platform CDN re-encodes every image at a fixed WebP quality with no control, and uploading a smaller source changes nothing because it re-encodes anyway — pre-encoded renditions served as theme assets skip the pipeline entirely. Theme bundles now wait for the hero to paint. Four per-section scripts that were being inlined once per instance moved to cached files. And a loyalty app turned out to have never started at all: its loader does its real work inside a window load listener, so a deferred release after that event attached to something that would never fire again.\n\nIt shipped in the middle of September, and the field data moved the week after. On the rest-of-world store, the 11th and 12th against the 19th: LCP 1.81s to 1.31s. On the US store, the week to the 12th against the week to the 19th: 1.61s to 999ms. Interaction and layout shift were already inside the thresholds and stayed there.\n\nThe synthetic tests moved with them, and on both surfaces. Cloudflare's daily run against the live UK store went from 42 to 62 on mobile — blocking time 1,817ms to 782ms, time to interactive 15.4s to 7.8s — and from 91 to 97 on desktop over the same three days. Desktop was never the reason for the engagement, which is exactly why it is worth saying: the work was cutting script execution, and script execution is not a phone problem. Phones are just where you notice it first.",
    rejected: [
      {
        what: "Early Hints for the hero image",
        why: "The browser ignored an early-hint entry carrying a responsive source set while honouring stylesheet hints in the same response — then downgraded the hero to low priority and had desktop download the mobile file.",
      },
      {
        what: "Moving the webfont out of early hints",
        why: "A clean 43KB saving on paper. Measured as a regression: score 90–91 down to 85–86, LCP 2.84–3.06s out to 3.50–3.68s, because the font moved into the hero's download window.",
      },
      {
        what: "Externalising the region banner script",
        why: "Reintroduced layout shift, 0.000 to 0.064, for visitors whose region does not match the store — a population a default test run never covers.",
      },
      {
        what: "Disabling an apparently unused form app",
        why: "Broke the form it powers. The block depends on the embed's loader.",
      },
      {
        what: "Rendering fewer product cards",
        why: "My own top recommendation, and a one-line setting to test before building anything. Cutting 35% of the cards — 62 down to 40, elements 3,850 down to 3,146 — moved nothing: LCP 2.75s to 2.80s, FCP 2.44s to 2.43s. I withdrew it.",
      },
    ],
    /* These are live now, not preview figures — the branch shipped. The two
       LCP tiles are field data from real sessions, the two scores are the
       same synthetic test on the same URL before and after. Each label names
       its measurement window, because a number without one is a claim rather
       than a result. */
    results: [
      {
        n: "1.81s → 1.31s",
        l: "LCP for real visitors, rest-of-world store — 11–12 September against the 19th",
      },
      {
        n: "1.61s → 1.00s",
        l: "LCP for real visitors, US store — the week to 12 September against the week to the 19th",
      },
      {
        n: "42 → 62",
        l: "Lighthouse on mobile, live site — 15 against 18 September, same URL and region",
      },
      {
        n: "91 → 97",
        l: "The same test on desktop, the same three days — this was never only a mobile problem",
      },
    ],
    slots: {
      hero: "Main thread before and after — the same page, the same trace view",
      shot1: "The trace that redirected the work — hero image done before first paint",
      shot2: "Blocking time under an 8x CPU slowdown, per script",
    },
    shots: {
      hero: heroImages["dfyne-mobile-performance"],
      shot1: {
        src: "/images/work/dfyne-mobile-performance/showing-both-stores-last-3-days-p75.png",
        alt: "A chart of 75th-percentile largest contentful paint over three days for both storefronts. The US store runs around one second; the rest-of-world store runs between 1.2 and 1.9 seconds and trends down across the window.",
      },
      shot2: {
        src: "/images/work/dfyne-mobile-performance/cloudfalre-uk-dfyne-history-phone.png",
        alt: "Cloudflare Observatory's mobile history for uk.dfyne.com over four days: scores rising 42, 43, 43, 46, 46, 62, 62, with blocking time falling from 1,817ms to 782ms and time to interactive from 15.4 seconds to 7.8.",
      },
    },
    /* Before and after, in pairs, one store at a time — then the same story
       from the synthetic side. The pairs are what make the numbers checkable:
       same dashboard, same filters, two windows. */
    gallery: [
      {
        src: "/images/work/dfyne-mobile-performance/ROW-OldPerformance.png",
        alt: "Field metrics for the rest-of-world store over 11 and 12 September: largest contentful paint 1.81 seconds, interaction to next paint 127.19ms, layout shift 0.0098.",
        caption:
          "Rest-of-world store, before: LCP 1.81s across 11 and 12 September. Everything already rated Good — this was not a broken site, it was a slow one.",
      },
      {
        src: "/images/work/dfyne-mobile-performance/ROW-New-Perfromance.png",
        alt: "The same dashboard for 19 September: largest contentful paint 1.31 seconds, interaction to next paint 121.29ms, layout shift 0.0089.",
        caption:
          "The same store, same dashboard, on 19 September: 1.31s. Half a second off the paint that decides whether a page feels fast, for every visitor, not a lab.",
      },
      {
        src: "/images/work/dfyne-mobile-performance/US-Store-Last-2-Weeks.png",
        alt: "Field metrics for the US store over the week to 12 September: largest contentful paint 1.61 seconds.",
        caption: "US store, the week to 12 September: 1.61s.",
      },
      {
        src: "/images/work/dfyne-mobile-performance/US-Store-New-Perforamnce.png",
        alt: "The same dashboard for 14 to 19 September: largest contentful paint 999.81 milliseconds.",
        caption:
          "The week to 19 September: 999ms. Under a second on the store that takes the most traffic.",
      },
      {
        src: "/images/work/dfyne-mobile-performance/cloudfalre-uk-dfyne-history.png",
        alt: "Cloudflare Observatory's desktop history for uk.dfyne.com: scores of 91, 90, 92, 86, 92, 95 and 97 across 15 to 18 September, with largest contentful paint falling from 1,257ms to 838ms.",
        caption:
          "Desktop, the same daily test, 15 to 18 September: 91 to 97, LCP 1,257ms to 838ms. Cutting script execution helps every device — a phone is only where it shows up first.",
      },
      {
        src: "/images/work/dfyne-mobile-performance/cloudflare-synthtic.png",
        alt: "A Cloudflare Observatory desktop speed test of uk.dfyne.com scoring 97, with time to first byte 12ms, first contentful paint 636ms, largest contentful paint 838ms and total blocking time 6ms.",
        caption:
          "The best of those runs in full — 18 September, London, desktop. Blocking time of 6ms is the number the whole engagement was aimed at: that is what a main thread with nothing queued on it looks like.",
      },
    ],
  },

  /* Deliberately absent from this write-up, and worth keeping absent: the
     storage bucket and service hostnames, the shape of the customer-hash
     secret, the vendor's name, and the contract term. The integration is not
     live yet either, so there is no returns figure to quote — the numbers
     below are all delivery facts, not business outcomes. */
  "dfyne-fit-finder": {
    tags: ["Shopify Plus", "Integration", "2026"],
    heading: "GETTING THE SIZE RIGHT BEFORE THE PARCEL SHIPS",
    intro:
      "Activewear gets returned because it does not fit. DFYNE took on an AI size advisor that recommends a size on the product page and learns from what people actually keep, and I owned the technical integration across both storefronts — the data the model trains on, the identity that joins a recommendation to a purchase, and the two objects the vendor reads. Sole frontend delivery, with one backend developer working to written briefs.",
    meta: [
      { l: "Client", v: "DFYNE" },
      { l: "Scope", v: "Data feeds, identity service, PDP and order objects, consent, vendor QA" },
      { l: "Timeline", v: "Spec May 2026, build from July, vendor sign-off late August" },
      {
        l: "Stack",
        v: "Shopify Plus, Liquid, Custom Web Pixels, BigQuery, Cloud Workflows, Cloud Run, Cloudflare",
      },
      { l: "Role", v: "Integration lead — architecture, build, data contract, vendor management" },
      { l: "Status", v: "Pre-integration complete and signed off — go-live in progress" },
    ],
    problem:
      "A size recommender is only as good as what it learns from, and what it learns from is your catalogue and your returns. So the real work is not the button on the product page — it is a data contract that has to be exactly right, twice over, because DFYNE runs two stores for two markets. Every product needs a size system, a taxonomy category and a size type the model understands. Every purchase needs to join back to the recommendation that produced it, without a customer identifier that carries personal data, and without tracking anyone who has not consented. And all of it has to survive Shopify's checkout, where you do not get to run your own code on the thank-you page.\n\nSome of that is harder than it sounds. Google's product taxonomy, which the model categorises against, has no node for a hoodie — so somebody has to choose the nearest honest category and get the vendor to agree it in writing. Two stores selling the same garments could plausibly be graded to two different measurement standards, and the answer changes every product row in both feeds; that one came down to asking the apparel team rather than assuming.\n\nThere was a clock on it too. The vendor's onboarding only starts counting once the data passes their validation, so every day spent in review was a day not spent integrating.",
    approach:
      "Four daily feeds — products and returns, per store — export from BigQuery on a schedule into private cloud storage the vendor reads with its own credentials. I specified the pipeline and verified every release myself against the bucket, joining on variant id and diffing column by column, which is how two reported validation failures turned out to be a stale sample on their side rather than gaps in ours. When their full pass asked for three schema changes, I wrote the brief, reviewed the pull requests, and checked the redeployed files against all seven acceptance criteria the same day.\n\nFor identity, a small service hashes the Shopify customer id behind a server-side salt and serves it to the storefront through an app proxy, so the same value appears on the product page and on the completed order — stable across devices, meaningless to anyone who intercepts it, and null for guests. The product-page object carries product identity, live size availability, consent state and hooks the vendor's script calls to select a size or add to cart. The order object is a Custom Web Pixel, because checkout extensibility rules out theme code, and it rebuilds the purchase payload with the raw ids that match the feeds. Consent runs through Shopify's privacy API and fails closed.\n\nAbout ten instrumented test purchases turned up three Shopify behaviours that are not in the documentation and would each have broken the integration quietly: pixels cannot read private cart attributes even though the order record has them, a checkout snapshots cart attributes when it opens so later writes never arrive, and the pixel sandbox is invisible to the top window by design. That last one let me answer a reported defect with evidence — the object was there, it had been tested from the wrong context — rather than spending a sprint looking for a bug that did not exist.",
    /* TODO: once Fit Finder has been live long enough to read, the figures that
       matter are returns rate and size-related revenue, not any of these. */
    results: [
      { n: "4 × daily", l: "Automated feeds, around 10,000 catalogue rows verified a day" },
      { n: "7 / 7", l: "Vendor acceptance criteria passed, every finding closed the same day" },
      { n: "3", l: "Undocumented Shopify checkout behaviours found and engineered around" },
      { n: "~7 weeks", l: "Spec to vendor sign-off, across two storefronts" },
    ],
    slots: {
      hero: "Product page — the size advisor in the storefront's own design language",
      shot1: "The data contract — how a product reaches the model",
      shot2: "Recommendation to purchase — how a sale joins back to the size it was shown",
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
