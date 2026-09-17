export const serviceDetail = [
  {
    icon: "ph ph-code",
    title: "Web development",
    from: "From £600",
    /* Two days at the project rate, and the small end on purpose: a brochure
       site, not the multi-template build. Anything with its own templates and a
       Core Web Vitals promise attached is the Storefront build tier in
       pricing.ts, which starts at £1,600 — this floor sits under that rather
       than competing with it. "Web apps front to back" used to be in this
       description and does not fit in two days; the scope was narrowed to match
       the price rather than the other way round. (The note said eight days for
       a long time, which was the build tier's costing on this tier's price.) */
    body: "Marketing and brochure sites built front to back. Clean components, a CMS your team can actually edit, and no framework churn for its own sake.",
    items: [
      "Built from your design — design available as an add-on",
      "Node and API work where the site needs it",
      "CMS your team can actually edit",
      "Deploy pipeline and staging URL",
    ],
  },
  {
    icon: "ph ph-storefront",
    title: "Shopify & ecommerce",
    from: "From £1,600",
    /* Extending the theme they have, not building one from scratch — the DFYNE
       work is an Impulse theme, and that is the honest shape of this.

       £1,600 is the same floor the Storefront build tier leads with in
       pricing.ts, and deliberately so: this page said £1,600 while that page
       said £2,400+ for the same work, so anyone reading both got two anchors
       and quoted back the lower one. Change these together. */
    body: "Theme customisation and app work for brands that have outgrown how their theme ships.",
    items: [
      "Sections and templates built into your existing theme",
      "Shopify app builds (Node + Workers)",
      "Checkout and cart improvements",
      "App audit — remove what you pay for twice",
    ],
  },
  {
    icon: "ph ph-lightning",
    title: "Performance",
    from: "From £300",
    body: "A measured audit and an ordered list of what to do about it. You get numbers, not adjectives.",
    /* Mirrors the Speed audit tier in pricing.ts. If one changes, change both —
       these are the same thing sold from two pages. The last line matters: the
       audit stops at the report, so the page has to say where the fixing
       goes, or the offer has a hole in it. */
    items: [
      "App audit — what you are paying for twice",
      "Core Web Vitals measured across every template",
      "Prioritised fix list with effort estimates",
      "Fixes quoted from the list, or rolled into a retainer",
    ],
  },
  /* Technical only, on purpose. Structured data, crawler policy and canonicals
     are things that either exist or do not — no promises about rankings, which
     are not ours to control. The demo is this site: everything listed here is
     live on jordangrieve.com and readable by anyone who views source. */
  {
    icon: "ph ph-magnifying-glass",
    title: "SEO & GEO",
    from: "From £600",
    body: "Being findable by search engines and quotable by AI answer engines. Mostly structured data and crawler policy — the machine-readable half, rather than the guesswork half.",
    items: [
      "Structured data generated from your content, so it cannot drift",
      "Crawler policy — robots.txt, Content Signals, llms.txt",
      "Canonicals, sitemaps and a share image per page",
      "A written record of what changed and why",
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
    from: "From £220/mo",
    body: "A standing slot each month for fixes, updates and the small jobs that pile up.",
    /* Mirrors the Ongoing tier in pricing.ts — same two units, £220 for one day
       a month and £400 for two. If one changes, change both; they are the same
       thing sold from two pages, and they disagreed once already. */
    items: [
      "One day of work a month at £220, or two days at £400",
      "Unused time rolls over once",
      "Theme and dependency updates",
      "Urgent fixes answered the next working day",
      "Monthly note on what changed",
    ],
  },
];
