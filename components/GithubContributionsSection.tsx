import { githubUsername } from "@/lib/data";
import { fetchContributionGraph } from "@/lib/contributions";
import ContributionGraph from "./ContributionGraph";
import SectionHeading from "./SectionHeading";

export default async function GithubContributionsSection() {
  // Static export: this runs at build time only. It seeds the first paint;
  // ContributionGraph refreshes it from the Netlify function on mount.
  const initialGraph = await fetchContributionGraph(githubUsername);

  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Activity" title="GitHub Contributions" />
      <ContributionGraph
        initialGraph={initialGraph}
        username={githubUsername}
        profileUrl={`https://github.com/${githubUsername}`}
      />
    </section>
  );
}
