interface SectionHeadingProps {
  /** Two-digit index. The page reads as a numbered document, not a stack of cards. */
  index: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 border-t border-rule pt-5 sm:mb-14">
      <div className="flex items-baseline gap-4 font-sans text-xs uppercase tracking-[0.24em]">
        <span className="text-paper">{index}</span>
        <span className="text-muted">{eyebrow}</span>
      </div>
      <h2 className="metallic mt-5 font-display text-4xl leading-none tracking-tight text-paper sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
