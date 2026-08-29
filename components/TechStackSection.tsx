import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function TechStackSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="03" eyebrow="Toolkit" title="Stack" />
      <ul className="flex flex-wrap items-center gap-x-9 gap-y-8 sm:gap-x-12">
        {skills.map((skill) => (
          <li key={skill.name} className="group relative">
            {/*
              Drawn in currentColor, never the brand hex: the page has no
              chromatic ink, and eight logo colours would be the loudest thing
              on it.
            */}
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label={skill.name}
              fill="currentColor"
              className="h-8 w-8 text-muted transition-colors duration-200 group-hover:text-paper sm:h-9 sm:w-9"
            >
              <path d={skill.path} />
            </svg>

            {/*
              aria-hidden because the <svg> above already carries this exact
              string as its accessible name — without it every icon announces
              twice. The label is a sighted-hover affordance only; nothing is
              hidden from assistive tech by revealing it on hover alone.

              Absolutely positioned so revealing it never reflows the row, and
              pointer-events-none so it can't interrupt the hover it depends on.
            */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
