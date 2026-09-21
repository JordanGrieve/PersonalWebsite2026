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
    slug: "land",
    name: "Land",
    kind: "AI app",
    year: "2026",
    result: "Live spoken mock interviews, scored against the job advert you paste in",
    ph: "The interview in progress — the voice call and the live transcript",
    tag: "Apps",
  },
  // HIDDEN — Essential Upsell is off the site for now. Un-comment these
// lines, and the other blocks marked HIDDEN, to bring it back.
//   {
//     slug: "essential-upsell",
//     name: "Essential Upsell",
//     kind: "Shopify app",
//     year: "2026",
//     result: "Vector recommendations across five storefront placements",
//     ph: "Admin — placement configuration",
//     tag: "Apps",
//   },
  // HIDDEN — AMORIA is off the site for now. Un-comment these lines, and the
// other blocks marked HIDDEN, to bring it back. Nothing has been deleted.
//   {
//     slug: "amoria",
//     name: "AMORIA",
//     kind: "Headless Shopify",
//     year: "2026",
//     result: "Headless storefront built end to end — Hydrogen on Shopify Oxygen",
//     ph: "Storefront — product page",
//     tag: "Shopify",
//   },
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
  // HIDDEN with Essential Upsell — this was a featured card.
//   "essential-upsell",
  "land",
  /* Fourth slot: seen on tablet and mobile, hidden once the grid goes
     three-up. Postbox came out of the four to make room for the size advisor;
     it is still on /work. */
  // HIDDEN with AMORIA — this is the fourth featured card.
//   "amoria",
];

export const featuredBlurbs: Record<string, string> = {
  "dfyne-cloudflare-migration": "Cloudflare · Shoppers on the wrong store, 35% → single digits",
  "dfyne-fit-finder": "Integration · AI size advisor across two Shopify Plus stores",
  // HIDDEN with Essential Upsell.
//   "essential-upsell": "Shopify app · Vector search over sales and returns",
  land: "AI app · Voice mock interviews scored against a real job advert",
  // HIDDEN with AMORIA.
//   amoria: "Headless Shopify · Hydrogen on Oxygen, built end to end",
  "open-door-bakery": "Web build · Storefront, admin and API in one app",
  postbox: "SaaS · Contact form and support email in one inbox",
};

export const featuredPlaceholders: Record<string, string> = {
  // HIDDEN with Essential Upsell.
//   "essential-upsell": "Project shot — recommendations on the product page",
  land: "Project shot — the voice interview in progress",
  // HIDDEN with AMORIA.
//   amoria: "Project shot — headless storefront",
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
  /** Heading for that section. Defaults to "The problem" — override where a
      project did not start from one. */
  problemTitle?: string;
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
export type Shot = {
  src: string;
  alt: string;
  caption?: string;
  /** "cover" fills the box and crops from the bottom. For a screenshot of a
      whole page, which is too tall to fit a wide slot without leaving most
      of the row empty. Clicking it still shows the whole thing. */
  fit?: "contain" | "cover";
};

const caseStudies: Record<string, CaseStudy> = {
  land: {
    tags: ["AI", "App", "2026"],
    heading: "LAND",
    intro:
      "Paste in the job advert for a role you actually want. Land gives you a live spoken mock interview with an AI that asks follow-ups based on that specific role, then scores how you did across seven categories. Two other things hang off the same advert: technical questions at a difficulty you pick, and a review of your CV against that role. Everything comes back as a rating out of ten with written feedback, so you can watch the scores move across attempts instead of guessing whether you are getting better.",
    meta: [
      { l: "Client", v: "Personal project — my own" },
      { l: "Scope", v: "Voice interview, question practice, CV review, accounts, billing" },
      { l: "Timeline", v: "2026" },
      {
        l: "Stack",
        v: "Next.js 16, React 19, TypeScript, Postgres, Drizzle, Gemini via the Vercel AI SDK, Hume EVI, Clerk, Arcjet, Vercel",
      },
      { l: "Status", v: "Deployed — not publicly launched" },
    ],
    problemTitle: "The idea",
    problem:
      "Interview practice is either generic or expensive. A list of common questions does not know what you applied for. A friend will ask you three things and run out. A coach costs more than most people are willing to spend on one application.\n\nMeanwhile the thing you are actually frightened of is specific: this advert, these requirements, and the bit where you say something out loud, badly, and someone asks you about it.\n\nSo Land is built around one advert at a time. You paste it in once and it becomes the context for everything — the questions the interviewer asks, the difficulty of the practice questions, and what your CV is judged against. The part that makes it worth using is the voice interview: typed questions and answers are a commodity, and speaking an answer to something that then asks a follow-up is the part you cannot get anywhere else without booking a human.",
    approach:
      "The advert is not a prompt the model skims. It goes into the voice session as four named variables — your name, the title, the description and the experience level — so the interviewer's questions come from that role rather than a generic script. The model that scores you afterwards gets the advert and the transcript in separately marked blocks, and is told to judge the answers against that role rather than against an ideal candidate.\n\nThe transcript is more than words. The voice service returns emotion intensities per utterance, and the rubric uses them: confidence is scored from those cues alongside what you actually said, and pacing from the gaps between question and answer. A list of questions cannot tell you that you hesitated.\n\nEverything a model returns is a structured object rather than prose — a rating from one to ten, and markdown feedback, checked against a schema before it is allowed anywhere near the database. That is what makes progress possible: a number that can be compared with last week's number. Prose cannot be charted.\n\nThe CV reviewer is under one rule I would not ship without: it does not know your numbers, and it is forbidden from inventing them. Where a line would be stronger with a figure, it emits a placeholder — [N], [X]%, [duration] — and it never states a metric, a team size or a result your CV does not already contain. That is the difference between a rewrite you can send and one that lies on your behalf.\n\nAnd everything a user types is treated as untrusted. A job advert is a document somebody else wrote, and it arrives in the same context window as the rules for marking you. All three system prompts say that the delimited content is data and never instructions, and name the attempts they expect: changing the rubric, demanding a particular score, asking for the prompt back.",
    results: [
      { n: "63", l: "Unit tests passing across six files — 20 September" },
      { n: "0 / 0", l: "Lint warnings and type errors, checked on every pull request" },
      { n: "21", l: "Pull requests, each one gated by that check before it could merge" },
    ],
    slots: {
      hero: "The voice interview in progress",
      shot1: "Seven-category feedback with the rating",
      shot2: "A CV rewrite, with a bracketed placeholder where a number would go",
    },
  },


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
      "An online-only bakery near Glasgow, run by one person. I built the shop customers order from, the dashboard she runs it from, and everything underneath both. The interesting part is what actually limits a bakery, which is not how much you have in stock — it is how much you can get out of one oven on a particular morning. The build is finished and deployed. What is left before it opens is not code.",
    meta: [
      { l: "Client", v: "Open Door Bakery — Hamilton, Scotland" },
      { l: "Scope", v: "Customer shop, admin dashboard, everything behind both" },
      { l: "Timeline", v: "July to September 2026, evenings and weekends" },
      {
        l: "Stack",
        v: "Next.js 15, React 19, TypeScript, Neon Postgres, raw SQL, Stripe, Resend, Cloudinary, Vercel",
      },
      { l: "Status", v: "Built, deployed and handed over" },
      { l: "Live", v: "opendoorbakery.com — password-locked until opening day" },
    ],
    /* Not a problem section. Nothing was broken and nobody was complaining —
       there was a person who wanted to open a bakery, which is a different
       kind of starting point and reads as one. */
    problemTitle: "The vision",
    problem:
      "A bakery she could run from her kitchen, that takes orders while she is asleep and tells her what to bake in the morning. Customers pick a day and a collection slot, or get it delivered locally. Celebration cakes ordered properly in advance rather than argued out over messages. Wholesale orders kept separate from everyone else's. And all of it run by her, on her own, between bakes.\n\nThe thing that makes that harder than it sounds is that a bakery does not run out of stock the way a shop does. It runs out of Saturday morning. Twelve products, each needing its own amount of notice, all wanting the same oven and the same pair of hands — and an order only works if the baking fits into the days before the date the customer wants it.\n\nSo three things decide whether an order can happen, and they do not agree with each other. Every product needs its own notice, and a basket takes the longest one in it — a croissant ordered alongside a celebration cake waits for the cake. Every collection slot has a number of places, or no limit at all, or none on a day that is closed. And anything can simply be off on a particular day for its own reasons. Getting those three to agree is most of the job, and it is the part a ready-made checkout hands straight back to you.\n\nThere was nothing to copy from, either. This is the first system the bakery has had, so every rule in it came out of how she described the work.",
    approach:
      "Build it or buy it is worth answering straight: a bit of wanting to and a bit of needing to. Every rule above could be forced onto a ready-made platform with enough add-ons bolted to it, so this was not the only way. What building it bought was rules that behave exactly as described instead of roughly, and a running cost of nothing while the business has no money coming in.\n\nIt is one application wearing three faces: eleven pages for customers, twelve for the baker, and the machinery in between. The database is plain SQL with no layer of translation on top, which is a deliberate choice — it is a small system and I would rather read what it is actually doing.\n\nMost of what a shop is, though, is the unglamorous half. A basket you can fill on a phone at eleven at night and still have in the morning. Prices that add up to the same total on the page, in the basket and on the card statement. An order that goes somewhere when you pay for it, gets a reference you can quote, and moves through states the baker can see — placed, paid, baking, ready, collected. A confirmation email. A way to find your order again and cancel it without making an account first, because nobody making one order wants a password. None of that is interesting and all of it has to be right, and it is exactly the half a platform hands you free.\n\nSo: money is counted in pence end to end, with the rounding tested, because a total that disagrees with the card statement by a penny is a support email every time. The card details never reach this application — checkout hands over to Stripe and comes back, which is the one part of a shop worth letting somebody else be responsible for. Availability is tracked per product per day rather than as a single stock number, since a bakery does not have twelve of something sitting on a shelf, it has whatever it has time to make that morning. And the places left in a collection slot are counted from the live orders every time rather than kept as a running total, so they cannot drift and cancelling an order genuinely gives the place back to the next person.\n\nThe rules that decide whether an order is possible are enforced where they cannot be got around. Capacity is checked again on the server when the order is placed, not taken on trust from the page that offered the slot — anyone can edit what a page sends, and two people can press the button at the same moment. Delivery is worked out from the first half of the postcode rather than a distance on a map, which is fiddlier than it sounds: ML10 is not inside ML1, and the obvious way of checking says it is.\n\nThe dashboard is the half that decides whether any of this gets used, because the person using it runs the bakery on her own between bakes and has no patience for software. So it is built around not making her think. Leaving the number of places blank means unlimited rather than nagging her for a number. How healthy a price is shows up as a word rather than a percentage. And if any ingredient in a recipe has no cost against it yet, the product says its cost is unknown instead of showing a confident figure that happens to be wrong.\n\nThe decision that kept paying off was making it run on a laptop with nothing set up. No database to install, no accounts, no keys — download it, start it, and it builds and fills its own database. Every outside service quietly writes down what it would have done instead of falling over, and the checkout completes without a payment provider attached. That is what makes it testable, and 136 tests run against it.",
    /* No results tiles. Nothing has been measured, because it has not opened:
       no orders, no visitors. Page counts and a test count are not results,
       and a row of them would be the exact move this study criticises. */
    slots: {
      hero: "The shop — what the customer orders through",
      shot1: "A product page — lead time, allergens and the pre-launch state",
      shot2: "A celebration cake — sizes, and the box personalised with a message",
    },
    shots: {
      hero: {
        src: "/images/work/open-door-bakery/03-home-desktop.png",
        fit: "cover",
        alt: "The Open Door Bakery home page: a watercolour hero reading Welcome to Open Door Bakery, buttons to shop and to order something custom, and a row of category cards for brownies, cakes, celebration boxes and cookies.",
      },
      shot1: {
        src: "/images/work/open-door-bakery/07-pdp-desktop.png",
        alt: "A product page for a lemon drizzle loaf at £4. A badge on the photograph reads Ready in 2 days, allergens are tagged beneath the price, and the buy button reads Coming soon.",
      },
      shot2: {
        src: "/images/work/open-door-bakery/09-pdp-celebration.png",
        alt: "A celebration cake box at £45, with a second size serving 16 to 20 at £60, four allergen tags, and a free-text box for the message and flavour to be written on the cake.",
      },
    },
    gallery: [
      {
        src: "/images/work/open-door-bakery/13-cart.png",
        alt: "An empty basket, headed Your box, reading \"Your box is empty — let's fix that, the croissants are still warm\", with a button to start shopping.",
        caption:
          "Even the empty state is the bakery talking. It is also the state everything else depends on: the basket is what carries the longest lead time in it, so it decides the earliest day the whole order can be ready.",
      },
    ],
  },

  // HIDDEN — Essential Upsell is off the site for now. Un-comment these
// lines, and the other blocks marked HIDDEN, to bring it back.
//   "essential-upsell": {
//     tags: ["Shopify", "App", "2026"],
//     heading: "ESSENTIAL UPSELL",
//     intro:
//       "DFYNE lists every colourway as its own product, which breaks the assumption every off-the-shelf recommendations app is built on. So I built them their own — a vector search over sales and returns data, running in five places across the storefront.",
//     meta: [
//       { l: "Client", v: "DFYNE" },
//       { l: "Scope", v: "Internal Shopify app, five storefront placements" },
//       { l: "Timeline", v: "3 months, alongside other work" },
//       { l: "Stack", v: "Remix, Polaris, Cloud Run, Postgres + pgvector, BigQuery" },
//     ],
//     problem:
//       "Shopify's native recommended-products API was returning weak results, because the store's sales data was never reaching it correctly — the backend had been set up wrong long before. Public recommendation apps were not an option either: they expect the standard metafields to be populated, colour above all, and DFYNE creates a separate product for every colourway. Anything off the shelf either returned nothing useful or treated eight colours of the same shorts as eight unrelated products.",
//     approach:
//       "I built an internal app instead. Nightly jobs pull every sale and return out of the BigQuery warehouse and embed them into a Postgres vector index, so recommendations come from what actually sells and what actually comes back — no hand-picked rules and no merchandiser input. The storefront gets five placements: two on the product page, plus search, cart and basket. Each one can be pointed at a different question — what pairs well with this, what sells best alongside it, what resembles it — so a shorts page and a cart drawer ask for different things. Where a shopper has accepted cookies the list also folds in what they have recently viewed, added or removed; where they haven't, Shopify metafields serve a cached fallback, which doubles as the fast path. It runs on Cloud Run behind its own subdomain on DFYNE's Cloudflare DNS, so storefront requests never hit a bot challenge.",
//     /* TODO: swap in the AOV / attributed-revenue numbers once it has launched
//        and the data exists. These four are all true today. */
//     results: [
//       {
//         n: "5",
//         l: "Storefront placements — two on the product page, plus search, cart and basket",
//       },
//       { n: "3", l: "Questions each placement can ask, from pairs-well-with to resembles-this" },
//       { n: "0", l: "Hand-picked rules — every recommendation comes from sales and returns data" },
//       { n: "3 mo", l: "Planning through to deployment, around other projects" },
//     ],
//     slots: {
//       hero: "Admin — placement configuration",
//       shot1: "Product page recommendations",
//       shot2: "Cart recommendations",
//     },
//   },

  // HIDDEN — AMORIA is off the site for now. Un-comment these lines, and the
// other blocks marked HIDDEN, to bring it back. Nothing has been deleted.
//   amoria: {
//     tags: ["Shopify", "Headless build", "2026"],
//     heading: "AMORIA",
//     intro:
//       "AMORIA is my own brand — silk sleepwear — and I built the shop as well as starting the business. Most Shopify stores use a ready-made theme, which is somebody else's design that you adjust at the edges. I built the front of this one from scratch instead, so every part of the page is a decision I made. The trade is simple and it runs through this whole page: you get exactly what you wanted, and you have to build everything a theme would have handed you free.",
//     problemTitle: "The vision",
//     problem:
//       "Nothing was broken here. There was no old site limping along and no client with a list of complaints. I wanted to make something, and the shop is part of the thing I wanted to make.\n\nWhen you sell silk sleepwear, the way it looks on screen is most of what you are selling. Somebody decides whether this brand is for them in a couple of seconds, on a phone, before they have read a word — so the spacing, the type and the way a page settles as it loads are the product argument, not decoration. I had designed how it should look. A theme would have got me close to that, and close was not the point of doing it.\n\nSo the goal was simple to say: the site should look exactly like the design, and the design should stay the thing everything is checked against rather than a nice picture the code slowly drifts away from.",
//     meta: [
//       { l: "Client", v: "My own business — brand, design and build" },
//       { l: "Scope", v: "Shop, cart, reviews, customer accounts, currencies, testing" },
//       { l: "Timeline", v: "Summer 2026 to now — launching February 2027" },
//       {
//         l: "Stack",
//         v: "Hydrogen 2026.4.3, React Router 7, Vite 8, TypeScript, Shopify Oxygen, Judge.me, PostBox",
//       },
//       { l: "Status", v: "Shop finished, launch setup still to do" },
//       { l: "Live", v: "byamoria.com — password page until launch" },
//     ],
//     approach:
//       "Shopify still runs the business end of it — the products, the payments, the checkout. What I replaced is everything the customer looks at, which Shopify calls a headless setup: my own code at the front, their platform behind it. It runs on Shopify's own hosting, which builds each page fresh when someone asks for it, from whichever of their servers is nearest.\n\nThe reviews are the clearest example of what that buys and what it costs. The review company I use hands you a ready-made block you drop into a normal theme, and it works fine — it just does not look like my site. So I ask them for the reviews directly, keep a copy for five minutes so the page is not waiting on them, and then display them my way: a score and a breakdown, one review pulled out and featured, six to a page, photos that open full size, and a form of my own for leaving one.\n\nWhat the control is for is the feel of the thing. The background is ivory rather than white and the text is a soft black rather than black, so nothing on the page is at full contrast and nothing glares on a phone in bed. There is not a rounded corner anywhere. Headings are set large but in ordinary sentence case, so they carry without shouting, and the small labels above them — NEW COLLECTION, OUR PROMISE — are in capitals with the letters spaced far apart, which is the one bit of typographic styling doing most of the work. Every product photograph is the same tall shape, so a row of them lines up exactly and the eye runs along the clothes rather than the edges of the boxes.\n\nAccessibility is the part that shaped the design rather than being checked off at the end, and I would rather say that plainly than let it sound like a badge. Colour contrast decided the palette: the ivory and the soft black are a pairing that passes comfortably, and a few colours I liked did not survive contact with a contrast check. It catches the things eyes miss, too — one button filled with near-black on hover, sitting on a near-black panel, which is a contrast of one to one, meaning it vanished at the exact moment you pointed at it. The same button's focus outline, the one you see when tabbing with a keyboard, had the same problem. Fifteen pages are now checked at phone and desktop size on every deploy, and the point of running it that often is that it stays a design constraint I work inside rather than a report somebody reads afterwards.",
//     /* Field data is not possible yet — the store is not open, so there are no
//        real visitors to measure. These are lab runs, and the labels say so. */
//     results: [
//       {
//         n: "0.9–1.0s",
//         l: "How long the main image or heading takes to appear — all four main page types, automated test, median of three runs, 11 September",
//       },
//       { n: "0ms", l: "Time the page spends unable to respond while it loads, in those same runs" },
//       {
//         n: "0–0.009",
//         l: "How much the page shifts around as it loads, where anything under 0.1 counts as good",
//       },
//       {
//         n: "9.4–9.7",
//         l: "WAVE accessibility score out of 10 — 9.7 on a product page, 9.4 on the home page, with no errors and no contrast errors",
//       },
//     ],
//     slots: {
//       hero: "Storefront — home page",
//       shot1: "A product page — the whole design, at full width",
//       shot2: "The reviews section — score, breakdown and a featured review",
//     },
//   },

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
