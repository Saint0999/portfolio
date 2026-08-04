import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="flex items-start gap-6 border-t border-zinc-800 pt-10">
        <div className="flex flex-col items-center pt-1.5">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-zinc-600" />
          <span className="mt-2 h-16 w-px bg-gradient-to-b from-zinc-700 to-transparent" />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-500">
            Open to opportunities
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-300">
            Currently seeking frontend / Web3 software engineering
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
