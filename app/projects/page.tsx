import ProjectCard from "@/app/components/ProjectCard";

interface Link {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  links?: Link[];
}

function page() {
  return (
    <div>
      {" "}
      <h1 className="calistoga-font text-5xl">my projects.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <ProjectCard
          title="Klassic Kilts Website"
          description="A refined website design for a family-run kilt hire business, blending tradition with modern simplicity."
          image="/KlassicKilts-img.png"
          tags={["UI Design", "Web Design", "Figma", "Typography", "Branding"]}
          links={[
            {
              label: "Preview",
              href: "https://www.figma.com/proto/pG6meAtVNura4dcznpse0V/Hi-Top-Sneakers?node-id=1150-58&t=Hv9AvlMj4uFrcPVt-1",
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

export default page;
