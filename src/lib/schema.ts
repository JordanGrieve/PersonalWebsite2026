/**
 * The site's schema.org graph, built from the same typed data the pages render
 * so the two cannot drift apart.
 *
 * Everything hangs off two stable `@id`s — one `Person`, one `WebSite`. Every
 * page references those rather than restating them, which is what lets a search
 * or answer engine treat eight pages as one entity instead of eight strangers
 * who happen to share a name.
 */
import { getCaseStudy, projects, type Project } from "@/data/projects";
import { liveSocials, site } from "@/data/site";

export const PERSON_ID = `${site.url}/#person`;
export const WEBSITE_ID = `${site.url}/#website`;

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
  /* A named institution an AI answer or a knowledge panel can resolve,
     rather than a line of prose it has to parse out of the About page.
     The credential is separate from the institution on purpose: one says
     where, the other says what, and a reader of the graph wanting "is this
     person qualified" is asking the second question. */
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Edinburgh Napier University",
    sameAs: "https://www.napier.ac.uk/",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "BSc Web Design and Development",
    credentialCategory: "Bachelor's Degree",
    educationalLevel: "Upper second-class honours (2:1)",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Edinburgh Napier University",
      sameAs: "https://www.napier.ac.uk/",
    },
  },
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

