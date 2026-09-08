import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.fullName} — ${site.role}`,
    short_name: site.fullName,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#161826",
    theme_color: "#161826",
    lang: "en-GB",
  };
}
