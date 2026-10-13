import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

/* Every page is statically prerendered, so "last modified" can only mean
   the build, which is honest for every page here. */
const built = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: site.url,
    lastModified: built,
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const indexes = ["/work", "/about", "/contact"].map(
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

  return [home, ...indexes, ...caseStudies];
}
