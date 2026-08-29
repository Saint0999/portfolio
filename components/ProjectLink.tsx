interface ProjectLinkProps {
  href: string;
  label: string;
}

/**
 * Text link with a corner arrow. The layout is ruled rather than boxed, so
 * outbound actions are set as type with a mark, not as buttons.
 */
export default function ProjectLink({ href, label }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-signal focus-visible:text-signal"
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-3 w-3 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}
