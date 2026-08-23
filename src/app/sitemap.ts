import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/services", "/pricing", "/writing", "/contact"];

  return [
    ...staticRoutes.map((path) => ({ url: `${site.url}${path}` })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
    ...posts.map((p) => ({ url: `${site.url}/writing/${p.slug}` })),
  ];
}
