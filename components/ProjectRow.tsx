import Image from "next/image";
import { techIcons } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectLink from "./ProjectLink";

interface ProjectRowProps {
  project: Project;
  index: string;
  /** Alternates the image side so the column doesn't march down one edge. */
  flipped: boolean;
}

export default function ProjectRow({
  project,
  index,
  flipped,
}: ProjectRowProps) {
  // Falls back to the repo when a project has no deployment, so the image and
  // the primary action always lead somewhere real. For such a project this
  // makes "View work" and "Source" the same destination — intentional, so the
  // row keeps its pill. Adding a `liveUrl` repoints it with no other change.
  const primaryHref = project.liveUrl ?? project.githubUrl;

  return (
    <article className="group grid items-center gap-8 sm:grid-cols-12 sm:gap-12">
      <div
        className={`sm:col-span-7 ${flipped ? "sm:order-2" : "sm:order-1"}`}
      >
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl bg-raised ring-1 ring-rule"
        >
          <Image
            src={project.image}
            alt={`${project.title} — screenshot of the live site`}
            width={1600}
            height={1000}
            className="h-auto w-full saturate-0 transition-[filter] duration-700 ease-in-out group-hover:saturate-100"
          />
        </a>
      </div>

      <div className={`sm:col-span-5 ${flipped ? "sm:order-1" : "sm:order-2"}`}>
        <span className="font-sans text-xs uppercase tracking-[0.24em] text-muted transition-colors duration-700 ease-in-out group-hover:text-paper">
          {index}
        </span>

        <h3 className="metallic-soft mt-4 font-display text-3xl leading-none tracking-tight text-paper sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {/*
          <title> rather than aria-label: it supplies the accessible name AND a
          native hover tooltip, so an unfamiliar mark is still identifiable
          without adding a second element to announce.
        */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          {project.stack.map((tech) => {
            const path = techIcons[tech];
            return (
              <li key={tech}>
                {path ? (
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    fill="currentColor"
                    className="h-5 w-5 text-muted transition-colors duration-700 ease-in-out group-hover:text-paper"
                  >
                    <title>{tech}</title>
                    <path d={path} />
                  </svg>
                ) : (
                  <span className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted transition-colors duration-700 ease-in-out group-hover:text-paper">
                    {tech}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-signal px-5 py-2.5 font-sans text-sm font-medium text-ink transition-transform duration-200 hover:scale-105 focus-visible:scale-105"
          >
            View work
          </a>
          <ProjectLink href={project.githubUrl} label="Source" />
        </div>
      </div>
    </article>
  );
}
