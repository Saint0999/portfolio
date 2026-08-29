import { reachMeLinks } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function ReachMeSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="04" eyebrow="Get in touch" title="Reach me" />
      <ul>
        {reachMeLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-baseline justify-between gap-6 border-t border-rule py-6 transition-colors hover:text-signal focus-visible:text-signal"
              >
                <span className="font-display text-3xl leading-none tracking-tight text-paper transition-colors group-hover:text-signal sm:text-4xl">
                  {link.label}
                </span>
                <span className="shrink-0 font-sans text-xs tracking-[0.14em] text-muted transition-colors group-hover:text-signal">
                  {link.handle}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
