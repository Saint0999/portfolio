import type { Project } from "@/lib/types";
import ProjectLink from "./ProjectLink";

interface ProjectRowProps {
  project: Project;
  index: string;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <article className="group border-t border-rule py-8 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-10 sm:py-10">
      <span className="font-sans text-xs uppercase tracking-[0.24em] text-muted transition-colors group-hover:text-signal">
        {index}
      </span>

      <div className="mt-4 sm:mt-0">
        <h3 className="font-display text-3xl leading-none tracking-tight text-paper transition-colors group-hover:text-signal sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {/* Stack reads as a caption line rather than pills — the page has one
            border value and spends it on the rules between rows. */}
        <p className="mt-5 font-sans text-xs uppercase tracking-[0.18em] text-muted">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
          <ProjectLink href={project.githubUrl} label="Source" />
          <ProjectLink href={project.liveUrl} label="Live" />
        </div>
      </div>
    </article>
  );
}
