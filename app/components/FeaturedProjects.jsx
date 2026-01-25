import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

function FeaturedProjects() {
  return (
    <div className="mt-15">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-3xl calistoga-font">featured projects.</h2>
        <Link
          href="/projects"
          className="text-lg font-extralight inter-font text-white/60 hover:text-white transition"
        >
          <div className="flex flex-row items-center gap-1 text-center">
            view more
            <ArrowRight className="size-4" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <ProjectCard
          title="DesignHub"
          description="A developer portfolio showcasing projects, skills, and creative work built with passion and modern design."
          image="/DesignHub.png"
          tags={["React", "Branding", "Frontend", "Motion", "UI/UX"]}
          links={[
            {
              label: "Live",
              href: "https://design-hub-navy.vercel.app/",
            },
            {
              label: "Repo",
              href: "https://github.com/JordanGrieve/DesignHub",
            },
          ]}
        />

        <ProjectCard
          title="DevEvent"
          description="Discover hackathons, meetups, and conferences, explore agendas, and book events in one place."
          image="/devEvent-img.png"
          tags={["Next.js", "TypeScript", "MongoDB", "Mongoose", "TailwindCSS"]}
          links={[
            { label: "Live", href: "https://dev-events-nextjs16.vercel.app/" },
            {
              label: "Repo",
              href: "https://github.com/JordanGrieve/dev-events-nextjs16",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default FeaturedProjects;
