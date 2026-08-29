import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="02" eyebrow="Selected work" title="Projects" />
      <div>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
