import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

/* Every page is statically prerendered, so "last modified" can only mean the
   build. That is honest for the hand-written pages; posts carry a real
   publication date and use it instead. */
const built = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: site.url,
    lastModified: built,
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const indexes = ["/work", "/services", "/pricing", "/about", "/writing", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: built,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  const caseStudies = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: built,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const writing = posts.map((p) => ({
    url: `${site.url}/writing/${p.slug}`,
    lastModified: built,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [home, ...indexes, ...caseStudies, ...writing];
}
