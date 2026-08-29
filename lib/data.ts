import type { Project, ReachMeLink } from "./types";

export const reachMeLinks: ReachMeLink[] = [
  {
    label: "Email",
    href: "mailto:saint.dev0999@gmail.com",
    handle: "saint.dev0999@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Saint0999",
    handle: "@Saint0999",
  },
  {
    label: "X",
    href: "https://x.com/avrm_999",
    handle: "@avrm_999",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/avrm999/",
    handle: "in/avrm999",
  },
];

export const skills: string[] = [
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

export const projects: Project[] = [
  {
    title: "Forecastly",
    description:
      "An intuitive weather and environmental forecasting dashboard featuring dynamic visual metrics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/Saint0999/Forecastly",
    liveUrl: "https://forecastly-kappa.vercel.app/",
  },
  {
    title: "Revnet",
    description:
      "A performance-focused web application built for seamless real-time interactions and responsive user experiences.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/Saint0999/RevNet",
    liveUrl: "https://revnet-pi.vercel.app/",
  },
  {
    title: "Invariant",
    description:
      "A live price reference for 16 crypto tokens and 20 world currencies, with any-to-any conversion and per-asset history charts.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    githubUrl: "https://github.com/Saint0999/invariant",
    liveUrl: "https://invariant-beta.vercel.app/",
  },
];
