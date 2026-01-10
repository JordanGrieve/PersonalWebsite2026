import Link from "next/link";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  return (
    <div className="mt-15">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-3xl calistoga-font">featured projects</h2>
        <Link
          href="/projects"
          className="text-lg font-extralight inter-font text-white/60 hover:text-white transition"
        >
          view more -
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <ProjectCard
          title="TT4D"
          description="Generate winning combinations, view past results, and analyze lottery trends all in one place."
          image="/projects/tt4d.png"
          tags={[
            "BS4",
            "Docker",
            "FastAPI",
            "Flask",
            "NextJS",
            "PostgreSQL",
            "Python",
            "TailwindCSS",
          ]}
          links={[
            { label: "Website", href: "https://example.com" },
            { label: "Source", href: "https://github.com/yourrepo" },
            { label: "Source (UI)", href: "https://github.com/yourrepo-ui" },
          ]}
        />
        <ProjectCard
          title="TT4D"
          description="Generate winning combinations, view past results, and analyze lottery trends all in one place."
          image="/projects/tt4d.png"
          tags={[
            "BS4",
            "Docker",
            "FastAPI",
            "Flask",
            "NextJS",
            "PostgreSQL",
            "Python",
            "TailwindCSS",
          ]}
          links={[
            { label: "Website", href: "https://example.com" },
            { label: "Source", href: "https://github.com/yourrepo" },
            { label: "Source (UI)", href: "https://github.com/yourrepo-ui" },
          ]}
        />
      </div>
    </div>
  );
}

export default FeaturedProjects;
