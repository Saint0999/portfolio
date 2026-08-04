import Image from "next/image";
import type { Skill } from "@/lib/types";

interface SkillPillProps {
  skill: Skill;
}

export default function SkillPill({ skill }: SkillPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 font-mono text-sm text-zinc-300">
      <Image
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.iconColor}`}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="h-4 w-4"
        unoptimized
      />
      {skill.name}
    </span>
  );
}
