import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="01" eyebrow="Career" title="Experience" />

      {/* Deliberately a status, not a job history — there is no employment to
          list yet, and inventing one would be the wrong kind of portfolio. */}
      <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-10">
        <p className="flex items-center gap-2.5 font-sans text-xs uppercase tracking-[0.2em] text-signal">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
          />
          Available
        </p>
        <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-paper sm:mt-0 sm:text-3xl">
          Currently seeking frontend and Web3 engineering roles. Internships,
          contract work, or a first full-time seat on a product team.
        </p>
      </div>
    </section>
  );
}
