import type { Metadata } from "next";
import ProjectGrid from "@/components/work/ProjectGrid";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { workSchema } from "@/lib/schema";

const title = "Projects";
const description =
  "Shopify storefronts, custom apps and performance work by Jordan Grieve. Every project lists what changed, not just what it looks like.";

/* openGraph and twitter are set in full: Next.js replaces a nested metadata
   key rather than merging it with the layout's, so leaving either out means
   a share of this page describes the home page. */
export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${site.url}/work`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workSchema()} />
    <section
      style={{
        padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) clamp(38px,6cqw,84px)",
      }}
    >
      <div
        style={{
          font: "500 0.6875rem/1 var(--font-heading)",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: 14,
        }}
      >
        Selected work
      </div>
      <h1
        style={{
          fontSize: "clamp(2.375rem,8cqw,6rem)",
          lineHeight: 0.9,
          letterSpacing: "-.04em",
          margin: 0,
        }}
      >
        PROJECTS
      </h1>
      <p
        style={{
          margin: "18px 0 0",
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "var(--color-neutral-400)",
        }}
      >
        Shopify storefronts, custom apps and performance work. Every project lists what changed,
        not just what it looks like.
      </p>
      <ProjectGrid />
    </section>
    </>
  );
}
