interface TechPillProps {
  label: string;
}

export default function TechPill({ label }: TechPillProps) {
  return (
    <span className="rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs font-medium text-zinc-300">
      {label}
    </span>
  );
}
