export const site = {
  name: "Jordan",
  role: "Frontend developer",
  location: "Scotland, UK — remote worldwide",
  email: "hello@jordan.dev",
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

export const socials = [
  { label: "GitHub", handle: "github.com/jordan", href: "#", icon: "ph ph-github-logo" },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/jordan",
    href: "#",
    icon: "ph ph-linkedin-logo",
  },
  { label: "X", handle: "x.com/jordan", href: "#", icon: "ph ph-x-logo" },
] as const;
