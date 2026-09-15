export const serviceDetail = [
  {
    icon: "ph ph-code",
    title: "Web development",
    from: "From £600",
    /* Eight days at the project rate. "Web apps front to back" used to be in
       this description and does not fit in eight days — the scope was narrowed
       to match the price rather than the other way round. */
    body: "Marketing and brochure sites built front to back. Clean components, a CMS your team can actually edit, and no framework churn for its own sake.",
    items: [
      "Built from your design — design available as an add-on",
      "Node and API work where the site needs it",
      "CMS your team can actually edit",
      "Deploy pipeline and staging URL",
    ],
  },
  /* Every line here is evidenced on /work: Postbox is the multi-tenant SaaS
     with the auth, the schema and the email loop; Open Door Bakery is the
     storefront, admin and API in one app; Essential Upsell is the Shopify app.
     `ph-database` because it is already in the icon subset — a new glyph means
     regenerating the font with `npm run build:icons`. */
  {
    icon: "ph ph-database",
    title: "Web apps & SaaS",
    from: "From £2,400",
    body: "Products with real accounts, real data and an admin behind them. The parts that are tedious rather than difficult are where these usually go wrong, so that is where the time goes.",
    items: [
      "Next.js and TypeScript, front to back",
      "Postgres and a schema that survives contact with users",
      "Accounts, sessions and multi-tenant boundaries",
      "Transactional email that threads instead of landing in spam",
    ],
  },
  {
    icon: "ph ph-storefront",
    title: "Shopify & ecommerce",
    from: "From £2,400",
    body: "Custom themes and app work for brands that have outgrown a template.",
    items: [
      "Custom theme or section development",
      "Shopify app builds (Node + Workers)",
      "Checkout and cart improvements",
      "App audit — remove what you pay for twice",
    ],
  },
  {
    icon: "ph ph-lightning",
    title: "Performance",
    from: "From £400",
    body: "A measured audit, then the fixes. You get before and after numbers, not adjectives.",
    /* Mirrors the Speed audit tier in pricing.ts. If one changes, change both —
       these are the same thing sold from two pages. */
    items: [
      "App audit — what you are paying for twice",
      "Core Web Vitals measured across every template",
      "The wins implemented, not just written down",
      "Re-measured after two weeks, with a call to talk it through",
    ],
  },
  {
    icon: "ph ph-cloud",
    title: "Cloudflare & cloud setup",
    from: "From £600",
    /* Narrowed on purpose. This used to promise image delivery and WAF work,
       which is past what the experience actually covers — DNS migration,
       Workers and cache rules is the honest boundary, and the price stays at
       the cheap end to match. Do not widen these bullets without the work to
       back them. */
    body: "DNS migrations, Workers and cache rules — the edge logic that decides which page a visitor gets, and how quickly.",
    items: [
      "DNS and nameserver migration",
      "Workers for redirects, geo-routing and edge logic",
      "Cache rules per route or collection",
      "Handover doc for your team",
    ],
  },
  {
    icon: "ph ph-chart-line",
    title: "Analytics & tracking",
    from: "From £300",
    body: "Tracking set up once, properly — so the numbers you report are the numbers that happened.",
    /* GA4 and Clarity only. Server-side tagging through a Worker and consent
       banner configuration were both listed here and are past what the
       experience covers — the remaining two bullets are diligence on the same
       two tools rather than extra tools. Do not re-add the others without the
       work behind them. */
    items: [
      "GA4 with ecommerce events",
      "Microsoft Clarity session recording",
      "Events checked against real orders, not assumed correct",
      "A written note of what is tracked and where it goes",
    ],
  },
  {
    icon: "ph ph-lifebuoy",
    title: "Maintenance & support",
    from: "From £400/mo",
    body: "A standing slot each month for fixes, updates and the small jobs that pile up.",
    items: [
      "Two days of work a month, unused time rolls over once",
      "Theme and dependency updates",
      "Urgent fixes answered the next working day",
      "Monthly note on what changed",
    ],
  },
];
