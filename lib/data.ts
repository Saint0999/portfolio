import {
  siC,
  siCplusplus,
  siGit,
  siJavascript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
} from "simple-icons";
import type { Project, Skill, SocialLink } from "./types";

/** The primary contact action — the whole left panel links here. */
export const contactEmail = "saint.dev0999@gmail.com";

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/avrm999/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/Saint0999", icon: "github" },
  { label: "X", href: "https://x.com/avrm_999", icon: "x" },
  { label: "Email", href: `mailto:${contactEmail}`, icon: "email" },
];

/*
 * Icon paths come from simple-icons rather than being hand-written: these are
 * the official marks, and transcribing logo geometry by hand produces subtly
 * wrong shapes. Only `path` is taken — each icon's brand `hex` is deliberately
 * discarded, since the stack renders monochrome.
 *
 * This module is only ever imported by Server Components, so the package is
 * resolved at build time and none of it reaches the client bundle.
 */
export const skills: Skill[] = [
  { name: siC.title, path: siC.path },
  { name: siCplusplus.title, path: siCplusplus.path },
  { name: siJavascript.title, path: siJavascript.path },
  { name: siTypescript.title, path: siTypescript.path },
  { name: siReact.title, path: siReact.path },
  { name: siNextdotjs.title, path: siNextdotjs.path },
  { name: siTailwindcss.title, path: siTailwindcss.path },
  { name: siGit.title, path: siGit.path },
];

export const projects: Project[] = [
  {
    title: "Invariant",
    description:
      "A live price reference for 16 crypto tokens and 20 world currencies, with any-to-any conversion and per-asset history charts.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    githubUrl: "https://github.com/Saint0999/invariant",
    liveUrl: "https://invariant-beta.vercel.app/",
    image: "/projects/invariant.webp",
  },
  {
    // No liveUrl: the linear-clone-beta deployment still serves the default
    // create-next-app scaffold, so linking it would misrepresent the work.
    title: "Linear Clone",
    description:
      "A recreation of the Linear marketing homepage aimed at the feel rather than just the layout: inertial scrolling, scroll-triggered reveals, and small mock-UI interactions.",
    stack: ["Next.js", "React", "Tailwind CSS", "Lenis"],
    githubUrl: "https://github.com/Saint0999/linear-clone",
    image: "/projects/linear.webp",
  },
  {
    title: "Forecastly",
    description:
      "An intuitive weather and environmental forecasting dashboard featuring dynamic visual metrics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/Saint0999/Forecastly",
    liveUrl: "https://forecastly-kappa.vercel.app/",
    image: "/projects/forecastly.webp",
  },
];

/*
 * Marks for the per-project stack lines, keyed by the exact label used in
 * `projects[].stack`. Anything absent here renders as text instead: "REST API"
 * is not a brand at all, and Lenis has no mark in simple-icons — inventing
 * glyphs for either would be worse than the words.
 */
export const techIcons: Record<string, string> = {
  "Next.js": siNextdotjs.path,
  TypeScript: siTypescript.path,
  "Tailwind CSS": siTailwindcss.path,
  "Three.js": siThreedotjs.path,
  React: siReact.path,
};
