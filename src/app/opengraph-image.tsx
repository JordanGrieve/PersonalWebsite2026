import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { site } from "@/data/site";

export const alt = `${site.fullName} — ${site.role} in Scotland`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogCard({
    kicker: "Frontend developer",
    title: "Fast Shopify and web front ends",
    sub: "Shopify storefronts, custom apps, and Cloudflare setups that make slow sites fast.",
  });
}
