import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function TechStackSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="03" eyebrow="Toolkit" title="Stack" />
      {/* Set as type rather than logo pills: the rest of the page carries no
          images, and brand colors would be the only off-palette ink on it. */}
      <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-4">
        {skills.map((skill, i) => (
          <li key={skill} className="border-t border-rule pt-4 pb-7">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-display text-2xl leading-none tracking-tight text-paper">
              {skill}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
