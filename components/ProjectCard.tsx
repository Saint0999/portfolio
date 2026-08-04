import type { Project } from "@/lib/types";
import TechPill from "./TechPill";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col border-t border-slate-800 pt-6 transition-colors">
      <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
}
