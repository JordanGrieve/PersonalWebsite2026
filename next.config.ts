import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        /* /pricing was a real page, in the sitemap, and is indexed. It now
           404s, so send it to /services — which is where the prices went, as
           the "From £x" line on each card, rather than an unrelated page.

           Permanent (308), because the page is not coming back. That is the
           instruction that gets the old URL dropped and any link equity moved
           across; a temporary redirect would leave search engines checking
           back indefinitely. */
        source: "/pricing",
        destination: "/services",
        permanent: true,
      },
      {
        /* The storefront refactor was published, in the sitemap and indexed.
           It has been taken down, so the URL goes to the project list rather
           than a 404 — there is no single page it maps onto, and /work is
           where someone following an old link was trying to get to anyway.

           Permanent, same reasoning as above: the page is not coming back. */
        source: "/work/dfyne-storefront-refactor",
        destination: "/work",
        permanent: true,
      },
      {
        /* AMORIA is hidden for now, not gone — the case study is commented
           out in src/data/projects.ts and comes back by un-commenting it.

           Temporary (307), unlike the two above: a permanent redirect asks
           search engines to drop the URL and move its history elsewhere,
           which is exactly wrong for a page that is coming back. Remove
           this entry at the same time as un-commenting the study. */
        source: "/work/amoria",
        destination: "/work",
        permanent: false,
      },
      {
        /* Hidden the same way and for the same reason — commented out in
           src/data/projects.ts, temporary until it comes back. */
        source: "/work/essential-upsell",
        destination: "/work",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
