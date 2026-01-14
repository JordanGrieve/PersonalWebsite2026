import React from "react";
import { Github, Globe } from "lucide-react";

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

function ProjectCard({
  title,
  description,
  image,
  tags = [],
  links = [],
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#030712] p-4 shadow-lg transition hover:border-white/20">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>

      <div className="mt-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="text-sm text-white/60">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white px-3 py-1.5 text-xs text-black transition hover:bg-white/80 text-[10px]"
            >
              {link.label.toLowerCase() === "repo" ? (
                <Github className="size-3" />
              ) : (
                <Globe className="size-3" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
