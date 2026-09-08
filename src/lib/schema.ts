/**
 * The site's schema.org graph, built from the same typed data the pages render
 * so the two cannot drift apart.
 *
 * Everything hangs off two stable `@id`s — one `Person`, one `WebSite`. Every
 * page references those rather than restating them, which is what lets a search
 * or answer engine treat eight pages as one entity instead of eight strangers
 * who happen to share a name.
 */
import { posts, type Post } from "@/data/posts";
import { getCaseStudy, projects, type Project } from "@/data/projects";
import { serviceDetail } from "@/data/services";
import { tiers } from "@/data/pricing";
import { liveSocials, site } from "@/data/site";

export const PERSON_ID = `${site.url}/#person`;
export const WEBSITE_ID = `${site.url}/#website`;

/** "From £1,800" / "£2,400+" / "£600/mo" -> 1800 / 2400 / 600. */
function priceOf(text: string): number | undefined {
  const digits = text.replace(/[^\d,]/g, "").replace(/,/g, "");
  return digits ? Number(digits) : undefined;
}

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: site.fullName,
  givenName: "Jordan",
  familyName: "Grieve",
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  knowsAbout: [...site.expertise],
  address: {
    "@type": "PostalAddress",
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  sameAs: liveSocials.map((s) => s.href),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: site.url,
  name: `${site.fullName} — ${site.role}`,
  description: site.description,
  inLanguage: "en-GB",
  publisher: { "@id": PERSON_ID },
};

/** Wraps nodes in the envelope every page emits. */
function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": [person, website, ...nodes] };
}

/** A trail of `{ name, path }` after the home page, which is added here. */
export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${trail[trail.length - 1].path}#breadcrumb`,
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

function page(type: string, path: string, name: string, description: string) {
  return {
    "@type": type,
    "@id": `${site.url}${path}#page`,
    url: `${site.url}${path}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en-GB",
  };
}

export function homeSchema() {
  return graph({
    ...page("ProfilePage", "", `${site.fullName} — ${site.role}`, site.description),
    mainEntity: { "@id": PERSON_ID },
  });
}

export function aboutSchema() {
  return graph(
    page(
      "AboutPage",
      "/about",
      `About ${site.fullName}`,
      `${site.fullName} is a ${site.role.toLowerCase()} in ${site.address.region}, working on Shopify storefronts and web performance.`,
    ),
    breadcrumb([{ name: "About", path: "/about" }]),
  );
}

export function contactSchema() {
  return graph(
    page(
      "ContactPage",
      "/contact",
      `Contact ${site.fullName}`,
      "Enquire about Shopify, web and performance work.",
    ),
    breadcrumb([{ name: "Contact", path: "/contact" }]),
  );
}

export function servicesSchema() {
  const services = serviceDetail.map((s) => {
    const from = priceOf(s.from);
    return {
      "@type": "Service",
      "@id": `${site.url}/services#${s.title.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      name: s.title,
      description: s.body,
      serviceType: s.title,
      provider: { "@id": PERSON_ID },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Worldwide — remote" },
      ],
      ...(from
        ? {
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: from,
                priceCurrency: "GBP",
                /* The page says "From £X", and this is how schema.org says the
                   same thing — without it the number reads as a fixed price. */
                minPrice: from,
                valueAddedTaxIncluded: false,
              },
            },
          }
        : {}),
    };
  });

  return graph(
    page(
      "CollectionPage",
      "/services",
      `Services — ${site.fullName}`,
      "Shopify, web, performance, Cloudflare and analytics work.",
    ),
    breadcrumb([{ name: "Services", path: "/services" }]),
    ...services,
  );
}

export function pricingSchema() {
  return graph(
    page(
      "CollectionPage",
      "/pricing",
      `Pricing — ${site.fullName}`,
      "Indicative prices for audits, builds and retainers.",
    ),
    breadcrumb([{ name: "Pricing", path: "/pricing" }]),
    {
      "@type": "OfferCatalog",
      "@id": `${site.url}/pricing#catalog`,
      name: "Engagements",
      itemListElement: tiers.map((t, i) => {
        const price = priceOf(t.price);
        const monthly = t.price.includes("/mo");
        return {
          "@type": "Offer",
          position: i + 1,
          name: t.name,
          description: t.note,
          seller: { "@id": PERSON_ID },
          priceCurrency: "GBP",
          ...(price
            ? {
                priceSpecification: {
                  "@type": monthly ? "UnitPriceSpecification" : "PriceSpecification",
                  price,
                  priceCurrency: "GBP",
                  ...(monthly ? { unitCode: "MON", billingDuration: 1 } : {}),
                  valueAddedTaxIncluded: false,
                },
              }
            : {}),
          itemOffered: {
            "@type": "Service",
            name: t.name,
            description: t.items.join(". "),
            provider: { "@id": PERSON_ID },
          },
        };
      }),
    },
  );
}

export function workSchema() {
  return graph(
    page(
      "CollectionPage",
      "/work",
      `Projects — ${site.fullName}`,
      "Shopify storefronts, custom apps and performance work.",
    ),
    breadcrumb([{ name: "Work", path: "/work" }]),
    {
      "@type": "ItemList",
      "@id": `${site.url}/work#list`,
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/work/${p.slug}`,
        name: p.name,
      })),
    },
  );
}

export function caseStudySchema(project: Project) {
  const study = getCaseStudy(project.slug);
  const stack = study?.meta.find((m) => m.l === "Stack")?.v;

  return graph(
    {
      ...page("ItemPage", `/work/${project.slug}`, project.name, project.result),
      /* The page is about the project, not about me — everything else on the
         site can point at the Person, this one points at the work. */
      about: { "@id": `${site.url}/work/${project.slug}#project` },
      mainEntity: { "@id": `${site.url}/work/${project.slug}#project` },
    },
    breadcrumb([
      { name: "Work", path: "/work" },
      { name: project.name, path: `/work/${project.slug}` },
    ]),
    {
      "@type": "CreativeWork",
      "@id": `${site.url}/work/${project.slug}#project`,
      name: project.name,
      headline: study?.heading ?? project.name,
      description: study?.intro ?? project.result,
      abstract: project.result,
      genre: project.kind,
      /* Year only — that is the resolution the data has. */
      dateCreated: project.year,
      author: { "@id": PERSON_ID },
      creator: { "@id": PERSON_ID },
      url: `${site.url}/work/${project.slug}`,
      /* The stack line goes in the keywords rather than a field of its own —
         it is the part of a case study anyone is actually searching for. */
      keywords: [study?.tags.join(", ") ?? project.tag, stack].filter(Boolean).join(", "),
      about: [project.tag, project.kind].map((name) => ({ "@type": "Thing", name })),
    },
  );
}

export function writingSchema() {
  return graph(
    {
      ...page(
        "Blog",
        "/writing",
        `Blog — ${site.fullName}`,
        "Posts on Shopify, Cloudflare caching and web performance.",
      ),
      blogPost: posts.map((p) => ({ "@id": `${site.url}/writing/${p.slug}#post` })),
    },
    breadcrumb([{ name: "Blog", path: "/writing" }]),
    /* Each post gets a node here rather than a bare `@id` pointing at another
       page. A reference on its own is only resolvable by a consumer that has
       already crawled the post; this way the index page stands on its own. */
    ...posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${site.url}/writing/${p.slug}#post`,
      url: `${site.url}/writing/${p.slug}`,
      headline: p.title,
      description: p.dek,
      articleSection: p.category,
      datePublished: p.published,
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-GB",
    })),
  );
}

export function postSchema(post: Post) {
  return graph(
    breadcrumb([
      { name: "Blog", path: "/writing" },
      { name: post.title, path: `/writing/${post.slug}` },
    ]),
    {
      "@type": "BlogPosting",
      "@id": `${site.url}/writing/${post.slug}#post`,
      url: `${site.url}/writing/${post.slug}`,
      mainEntityOfPage: `${site.url}/writing/${post.slug}`,
      headline: post.title,
      description: post.dek,
      articleSection: post.category,
      datePublished: post.published,
      dateModified: post.published,
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      isPartOf: {
        "@type": "Blog",
        "@id": `${site.url}/writing#page`,
        name: `Blog — ${site.fullName}`,
        url: `${site.url}/writing`,
      },
      inLanguage: "en-GB",
    },
  );
}
