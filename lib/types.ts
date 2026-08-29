export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface ReachMeLink {
  label: string;
  href: string;
  /** Set opposite the label in each row — the actual address or username. */
  handle: string;
}
