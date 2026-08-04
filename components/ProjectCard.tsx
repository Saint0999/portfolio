import type { Project } from "@/lib/types";
import TechPill from "./TechPill";
import ProjectLinkButton from "./ProjectLinkButton";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group py-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="sm:max-w-md">
          <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {project.stack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <ProjectLinkButton
              href={project.githubUrl}
              label="GitHub"
              icon="github"
            />
            <ProjectLinkButton
              href={project.liveUrl}
              label="Live"
              icon="external"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
