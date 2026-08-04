import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Selected Work" title="Projects" />
      <div className="flex flex-col divide-y divide-zinc-800">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
