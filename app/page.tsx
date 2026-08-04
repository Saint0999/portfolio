import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-8">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
