export const stats = [
  { n: "1 yr", l: "At Dfyne, Scotland" },
  { n: "12+", l: "Sites shipped" },
  { n: "1.3s", l: "Typical LCP after" },
  { n: "£0", l: "Cost of a first call" },
];

export const services = [
  {
    icon: "ph ph-code",
    no: "01",
    title: "Web development",
    body: "Front end I can stand behind, plus the Node back end and APIs when the build needs them.",
  },
  {
    icon: "ph ph-storefront",
    no: "02",
    title: "Shopify & ecommerce",
    body: "Custom themes, sections, and checkout paths that do not fight the shopper.",
  },
  {
    icon: "ph ph-lightning",
    no: "03",
    title: "Performance",
    body: "Page weight, Core Web Vitals and caching — measured before and after.",
  },
  {
    icon: "ph ph-cloud",
    no: "04",
    title: "Cloudflare & cloud",
    body: "Workers, cache rules, DNS and deploys set up so the site stays fast under load.",
  },
  {
    icon: "ph ph-chart-line",
    no: "05",
    title: "Analytics & tracking",
    body: "GA4, Cloudflare Workers and Clarity wired up so you can see what shoppers actually do.",
  },
  {
    icon: "ph ph-lifebuoy",
    no: "06",
    title: "Maintenance",
    body: "A monthly slot for fixes, updates and the small jobs that otherwise never get done.",
  },
];

export type Tool = {
  name: string;
  /** Phosphor class, used when `path` is absent. */
  icon: string;
  what: string;
  /**
   * SVG path for a brand mark, on a 24×24 viewBox. Phosphor has no brand
   * icons, so this is the real Shopify glyph rather than a generic bag.
   * Taken from Simple Icons (CC0); the mark is Shopify's trademark and is
   * used here only to name the tool.
   */
  path?: string;
};

export const toolkit: Tool[] = [
  {
    name: "HTML5",
    icon: "ph ph-file-html",
    what: "Semantic markup — the structure every page is built on.",
  },
  {
    name: "CSS3",
    icon: "ph ph-file-css",
    what: "Layout and styling. Grid, container queries, no framework needed.",
  },
  {
    name: "JavaScript",
    icon: "ph ph-file-js",
    what: "The language behind every interaction on the page.",
  },
  {
    name: "TypeScript",
    icon: "ph ph-file-ts",
    what: "JavaScript with types — fewer bugs reach production.",
  },
  {
    name: "React",
    icon: "ph ph-atom",
    what: "Component UI for app-like interfaces and dashboards.",
  },
  {
    name: "Node.js",
    icon: "ph ph-hexagon",
    what: "Back end and APIs, including Shopify app servers.",
  },
  {
    name: "Liquid",
    icon: "ph ph-drop",
    what: "Shopify's template language — how themes are built.",
  },
  {
    name: "Shopify",
    icon: "ph ph-shopping-bag",
    what: "The ecommerce platform I work in daily at Dfyne.",
    path: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z",
  },
  {
    name: "Cloudflare",
    icon: "ph ph-cloud",
    what: "CDN, Workers and cache rules that keep sites fast.",
  },
  {
    name: "Redis",
    icon: "ph ph-database",
    what: "In-memory cache for data that would be slow to fetch twice.",
  },
  {
    name: "Git",
    icon: "ph ph-git-branch",
    what: "Version control — every change reviewable and reversible.",
  },
  {
    name: "Figma",
    icon: "ph ph-pen-nib",
    what: "Where designs arrive before I build them.",
  },
];

export const process = [
  { no: "01", title: "Call", body: "Twenty minutes on what you sell and what is in the way." },
  { no: "02", title: "Scope", body: "A written plan with a price and a date, before any code." },
  { no: "03", title: "Build", body: "Weekly previews on a staging URL you can click through." },
  {
    no: "04",
    title: "Ship & measure",
    body: "Launch, then numbers a week later to prove it worked.",
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
    what: "Frontend developer, Dfyne",
    body: "Storefront work at one of the fastest-growing businesses in Scotland — sections, performance, release testing.",
  },
  {
    when: "2025",
    what: "Freelance builds",
    body: "Shopify themes, custom apps and speed rescues for small brands, alongside the day job.",
  },
  {
    when: "2024",
    what: "Self-taught, then shipping",
    body: "Started with HTML and CSS, ended the year deploying Node services behind Cloudflare.",
  },
  {
    when: "Always",
    what: "Boring things done properly",
    body: "Cache headers, image formats, and reading the waterfall before guessing.",
  },
];
