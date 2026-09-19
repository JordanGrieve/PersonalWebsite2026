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
    ];
  },
};

export default nextConfig;
