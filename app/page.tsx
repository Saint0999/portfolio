import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ReachMeSection from "@/components/ReachMeSection";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ReachMeSection />
    </main>
  );
}
