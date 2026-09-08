import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Everything here is public, so the only job of this file is to point crawlers
 * at the sitemap — without it they find it only by luck — and to name the
 * canonical host so the apex and `www` are not treated as two sites.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
