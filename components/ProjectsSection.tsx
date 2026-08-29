import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="02" eyebrow="Selected work" title="Projects" />
      {/* No rules between rows — the screenshots already separate them. */}
      <div className="flex flex-col gap-20 sm:gap-28">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={String(i + 1).padStart(2, "0")}
            flipped={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
