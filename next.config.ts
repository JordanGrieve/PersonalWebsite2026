import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    /* Next's default is 60 seconds, which is meant for images that can
       change behind a stable URL. Every image on this site is a file in
       /public: it cannot change without a deploy, and a deploy changes the
       URL's underlying content hash anyway.

       At 60 seconds the optimised variants were being sent with
       `max-age=60, must-revalidate`, so a reader who scrolled back up a
       case study re-requested every screenshot, and Cloudflare would not
       hold them at the edge either. On the pages with nine images that is
       nine round trips to the origin for pictures that will never differ.

       A year, matching what the JS and CSS already get. */
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      {
        /* /pricing was a real page, in the sitemap, and is indexed. It now
           404s. It first went to /services, and that page has gone too, so
           both now land on the work — which is what someone following an old
           pricing link is really looking for.

           Permanent (308), because neither page is coming back. That is the
           instruction that gets the old URL dropped and any link equity moved
           across; a temporary redirect would leave search engines checking
           back indefinitely. */
        source: "/pricing",
        destination: "/work",
        permanent: true,
      },
      {
        /* /services was published, in the sitemap and indexed, and listed
           prices for freelance work that is no longer on offer. */
        source: "/services",
        destination: "/work",
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
