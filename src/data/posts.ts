import type { Shot } from "@/data/projects";

export type Post = {
  slug: string;
  /** ISO 8601 date. The only date stored — the display string is derived from
      it, so the page and the `datePublished` in the schema cannot disagree.
      TODO: these are month-accurate placeholders pinned to the 1st. Correct
      them as each post is actually written. */
  published: string;
  read: string;
  title: string;
  dek: string;
  /** Kicker above the post title. */
  category: string;
  /** Placeholder copy for the post's hero image slot. */
  ph: string;
  /** The real hero image, once there is one — same shape a case study's
      images use, and shown the same way: click to read it full size. */
  hero?: Shot;
};

export const posts: Post[] = [
  {
    slug: "lcp-4-8s-to-1-3s",
    published: "2026-05-01",
    read: "8 min",
    title: "How I got an LCP of 4.8s down to 1.3s",
    dek: "The full waterfall, what I cut, and what turned out not to matter.",
    category: "Performance",
    ph: "Lighthouse before / after screenshot",
  },
];

const monthYear = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-07-01" -> "Jul 2026", the form the design shows. */
export function displayDate(published: string): string {
  return monthYear.format(new Date(published + "T00:00:00Z"));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** The two posts shown under "Read next", excluding the current one. */
export function relatedPosts(slug: string): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, 2);
}
