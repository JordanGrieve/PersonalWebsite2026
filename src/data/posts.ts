export type Post = {
  slug: string;
  date: string;
  read: string;
  title: string;
  dek: string;
  /** Kicker above the post title. */
  category: string;
  /** Placeholder copy for the post's hero image slot. */
  ph: string;
};

export const posts: Post[] = [
  {
    slug: "two-shopify-apps-you-can-delete",
    date: "Jul 2026",
    read: "6 min",
    title: "The two Shopify apps you can delete today",
    dek: "Most bundle and cart-drawer apps ship 300kb to do what 90 lines of Liquid can.",
    category: "Shopify",
    ph: "App audit screenshot",
  },
  {
    slug: "cache-rules-for-every-cloudflare-zone",
    date: "Jun 2026",
    read: "4 min",
    title: "Cache rules I set on every Cloudflare zone",
    dek: "A starting configuration for ecommerce, and the one rule that breaks carts.",
    category: "Cloudflare",
    ph: "Cache rule configuration",
  },
  {
    slug: "lcp-4-8s-to-1-3s",
    date: "May 2026",
    read: "8 min",
    title: "How I got an LCP of 4.8s down to 1.3s",
    dek: "The full waterfall, what I cut, and what turned out not to matter.",
    category: "Performance",
    ph: "Lighthouse before / after screenshot",
  },
  {
    slug: "one-year-on-a-fast-growing-storefront",
    date: "Apr 2026",
    read: "5 min",
    title: "One year in, working on a fast-growing storefront",
    dek: "What shipping to real traffic every week teaches you that tutorials do not.",
    category: "Notes",
    ph: "Desk / workflow shot",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** The two posts shown under "Read next", excluding the current one. */
export function relatedPosts(slug: string): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, 2);
}
