import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading eyebrow="Selected Work" title="Projects" />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
