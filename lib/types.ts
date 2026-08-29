export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  /** Omitted when a project has no working deployment. */
  liveUrl?: string;
  /** Screenshot in /public/projects, captured at 1600x1000. */
  image: string;
}

export interface Skill {
  name: string;
  /** SVG path data from simple-icons, drawn on a 24x24 viewBox. */
  path: string;
}

export type SocialIcon = "linkedin" | "github" | "x" | "email";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}
