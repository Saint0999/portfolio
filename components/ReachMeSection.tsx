import { reachMeLinks } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ReachMeLinkButton from "./ReachMeLinkButton";

export default function ReachMeSection() {
  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Get in Touch" title="Reach Me" />
      <div className="flex flex-wrap gap-3">
        {reachMeLinks.map((link) => (
          <ReachMeLinkButton key={link.label} link={link} />
        ))}
      </div>
    </section>
  );
}
