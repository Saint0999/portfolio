export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  slug: string;
  iconColor: string;
}

export type ReachMeIcon = "x" | "github" | "linkedin" | "mail";

export interface ReachMeLink {
  label: string;
  href: string;
  icon: ReachMeIcon;
}
