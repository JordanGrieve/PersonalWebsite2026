export const stats = [
  { n: "1 yr", l: "At DFYNE, Scotland" },
  { n: "8+", l: "Sites shipped" },
  { n: "1.3s", l: "Typical LCP after" },
  { n: "BSc", l: "Web design & development, 2:1" },
];

export const services = [
  {
    icon: "ph ph-code",
    no: "01",
    title: "Web development",
    body: "Front end I can stand behind, plus the Node back end and APIs when the build needs them.",
  },
  {
    icon: "ph ph-cloud",
    no: "02",
    title: "Cloud",
    body: "AWS and GCP — hosting, managed databases and storage, and the access rules that decide who can reach them.",
  },
  {
    icon: "ph ph-lightning",
    no: "03",
    title: "Performance",
    body: "Page weight, Core Web Vitals and caching — measured before and after.",
  },
  {
    icon: "ph ph-globe",
    no: "04",
    title: "Cloudflare & the edge",
    body: "Workers, cache rules, DNS and deploys set up so the site stays fast under load.",
  },
  {
    icon: "ph ph-chart-line",
    no: "05",
    title: "Observability",
    body: "OpenTelemetry through Dash0, Kibana, Sentry and Clarity — so a problem shows up as data, not as a report from a customer.",
  },
  {
    icon: "ph ph-magnifying-glass",
    no: "06",
    title: "Debugging & monitoring",
    body: "Tracing a live fault to its real cause through traces, logs and session replay, then proving the fix held.",
  },
];

export type Tool = {
  name: string;
  /** Phosphor class, used when `path` is absent. */
  icon: string;
  what: string;
  /**
   * SVG path for a brand mark, on a 24×24 viewBox, for tools Phosphor has
   * no icon for. Nothing uses it at the moment — the Shopify tile did, with
   * the real glyph from Simple Icons (CC0) — so it is here for the next one.
   */
  path?: string;
};

export const toolkit: Tool[] = [
  {
    name: "TypeScript",
    icon: "ph ph-file-ts",
    what: "The default for anything I build. Types at the edges, so a wrong shape fails at the compiler rather than at a customer.",
  },
  {
    name: "JavaScript",
    icon: "ph ph-file-js",
    what: "What it all compiles down to, and what I write directly in a Worker or a one-off script.",
  },
  {
    name: "React",
    icon: "ph ph-atom",
    what: "Component UI for app-like interfaces and dashboards.",
  },
  {
    name: "Next.js",
    icon: "ph ph-triangle",
    what: "App Router, server components, and being deliberate about what renders where.",
  },
  {
    name: "Node.js",
    icon: "ph ph-hexagon",
    what: "Back end and APIs — the half of a build with no interface to hide behind.",
  },
  {
    name: "Postgres",
    icon: "ph ph-database",
    what: "The database under the apps I build. Raw SQL where the query matters, Drizzle where it does not.",
  },
  {
    name: "REST & webhooks",
    icon: "ph ph-plugs",
    what: "Calling other people's APIs, and running the endpoints they call back on — signature-checked, and safe to retry.",
  },
  {
    name: "Cloud",
    icon: "ph ph-hard-drives",
    what: "AWS and GCP — hosting, managed databases and storage, and the access rules around them.",
  },
  {
    name: "Observability",
    icon: "ph ph-chart-line",
    what: "OpenTelemetry into Dash0, Sentry over the top — so the first I hear of a fault is not a customer.",
  },
  {
    name: "Cloudflare",
    icon: "ph ph-cloud",
    what: "Workers, cache rules and DNS — routing and caching decided at the edge.",
  },
  {
    name: "Auth & payments",
    icon: "ph ph-lock-key",
    what: "Clerk for accounts and billing, Stripe at the checkout — and the webhooks that tell the app when either one changed.",
  },
  {
    name: "Git & Actions",
    icon: "ph ph-git-branch",
    what: "Branch, review, merge — with the checks that stop a broken build reaching main.",
  },
];

/* The design's three testimonials were invented, and attributed to named
   people at companies that do not exist. Removed rather than left in.
   The home page hides the section while this is empty — add real quotes
   here (with permission) and it comes back. */
export const testimonials: { quote: string; who: string }[] = [];

export const timeline = [
  {
    when: "2025 →",
    what: "Frontend engineer, DFYNE",
    body: "Storefront work at one of the fastest-growing businesses in Scotland — sections, performance, release testing.",
  },
  {
    when: "2021 – 2025",
    what: "BSc Web Design and Development, Edinburgh Napier",
    body: "Four years, a 2:1, finishing the year I started at DFYNE.",
  },
];
