import { siGithub, siX } from "simple-icons";
import { contactEmail, socialLinks } from "@/lib/data";
import type { SocialIcon } from "@/lib/types";
import SectionHeading from "./SectionHeading";

/*
 * Neither simple-icons nor lucide ships a LinkedIn mark — it was withdrawn at
 * LinkedIn's request — so that slot uses a generic profile silhouette rather
 * than a hand-drawn imitation of a trademarked logo. The link and its
 * accessible name still read LinkedIn. Mail is generic geometry for the same
 * reason: there is no brand mark to get wrong.
 */
const ICON_PATHS: Record<SocialIcon, string[]> = {
  linkedin: [
    "M12 12.2a4.35 4.35 0 1 0 0-8.7 4.35 4.35 0 0 0 0 8.7Z",
    "M12 14.1c-4.3 0-7.8 2.35-7.8 5.25 0 .8.65 1.45 1.45 1.45h12.7c.8 0 1.45-.65 1.45-1.45 0-2.9-3.5-5.25-7.8-5.25Z",
  ],
  github: [siGithub.path],
  x: [siX.path],
  email: [
    "M3.2 5h17.6c.66 0 1.2.54 1.2 1.2v.5L12 13.2 2 6.7v-.5C2 5.54 2.54 5 3.2 5Z",
    "M22 8.9v8.9c0 .66-.54 1.2-1.2 1.2H3.2C2.54 19 2 18.46 2 17.8V8.9l9.45 6.14c.34.22.76.22 1.1 0L22 8.9Z",
  ],
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-8 w-8 shrink-0 transition-transform duration-300 ease-[var(--ease-arrive)] group-hover:translate-x-1.5 sm:h-10 sm:w-10"
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export default function ReachMeSection() {
  // Static export: evaluated at build, so it advances with each deploy.
  const year = new Date().getFullYear();

  return (
    <section className="py-14 sm:py-20">
      <SectionHeading index="04" eyebrow="Get in touch" title="Reach me" />

      {/* overflow-hidden is what keeps the two flush halves inside the radius. */}
      <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2">
        {/*
          The whole half is the mailto target rather than a button inside it —
          at this size a small hit area in a large colour block reads as a bug.
        */}
        <a
          href={`mailto:${contactEmail}`}
          className="amber-panel group relative flex min-h-72 flex-col justify-between bg-amber p-8 sm:min-h-96 sm:p-10"
        >
          <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.18em] text-black">
            Thanks for visiting!
          </span>
          <span className="relative z-10 flex items-center justify-between gap-4 text-black">
            <span className="font-sans text-4xl font-medium tracking-tight sm:text-5xl">
              Let&apos;s build
            </span>
            <ArrowIcon />
          </span>
        </a>

        <div className="lit-panel flex min-h-72 flex-col justify-between bg-raised p-8 sm:min-h-96 sm:p-10">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-signal">
            &copy; {year} Abhinav
          </span>

          <div className="flex items-end justify-between gap-6">
            <h3 className="font-sans text-4xl font-medium tracking-tight text-signal sm:text-5xl">
              Or connect
            </h3>

            <ul className="flex shrink-0 flex-col gap-2.5">
              {socialLinks.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal text-ink transition-transform duration-200 hover:scale-105 focus-visible:scale-105"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                        className="h-5 w-5"
                      >
                        {ICON_PATHS[link.icon].map((d) => (
                          <path key={d} d={d} />
                        ))}
                      </svg>
                      {/* Chips carry no visible text; this is their name. */}
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
