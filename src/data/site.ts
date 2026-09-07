export const site = {
  name: "Jordan",
  role: "Frontend developer",
  location: "Scotland, UK — remote worldwide",
  email: "jordangrieve.dev@gmail.com",
  tagline: "I build fast Shopify and web front ends, back end included.",
  description:
    "Frontend developer in Scotland. Shopify storefronts, custom apps, and making slow sites fast.",
  url: "https://www.jordangrieve.com",
} as const;

/** Header / drawer navigation, in order. */
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/writing", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type Social = {
  label: string;
  /** Shown as the visible text on the contact page. */
  handle: string;
  /** null = not wired up yet. Anything without a real URL is not rendered,
      rather than shipping a link that goes nowhere. */
  href: string | null;
  icon: string;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "github.com/JordanGrieve",
    href: "https://github.com/JordanGrieve",
    icon: "ph ph-github-logo",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/jordan-grieve-48818a170",
    href: "https://www.linkedin.com/in/jordan-grieve-48818a170/",
    icon: "ph ph-linkedin-logo",
  },
];

/** Only the ones that actually point somewhere. */
export const liveSocials = socials.filter(
  (s): s is Social & { href: string } => Boolean(s.href),
);
