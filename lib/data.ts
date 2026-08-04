import type { Project, ReachMeLink, Skill } from "./types";

export const githubUsername = "Saint0999";

export const reachMeLinks: ReachMeLink[] = [
  {
    label: "Email",
    href: "mailto:saint.dev0999@gmail.com",
    icon: "mail",
  },
  {
    label: "X",
    href: "https://x.com/avrm_999",
    icon: "x",
  },
  {
    label: "GitHub",
    href: "https://github.com/Saint0999",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/avrm999/",
    icon: "linkedin",
  },
];

export const skills: Skill[] = [
  { name: "C", slug: "c", iconColor: "A8B9CC" },
  { name: "C++", slug: "cplusplus", iconColor: "659AD2" },
  { name: "JavaScript", slug: "javascript", iconColor: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", iconColor: "3178C6" },
  { name: "React", slug: "react", iconColor: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", iconColor: "38BDF8" },
  { name: "Next.js", slug: "nextdotjs", iconColor: "FFFFFF" },
  { name: "Git", slug: "git", iconColor: "F05032" },
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
    title: "Linear Clone",
    description:
      "A high-performance issue-tracking interface inspired by Linear, focusing on keyboard-first navigation and fluid UI states.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Saint0999/linear-clone",
    liveUrl: "https://linear-clone-gilt.vercel.app/",
  },
];
