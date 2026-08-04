import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SkillPill from "./SkillPill";

export default function TechStackSection() {
  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Toolkit" title="Tech Stack" />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill.slug} skill={skill} />
        ))}
      </div>
    </section>
  );
}
