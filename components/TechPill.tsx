interface TechPillProps {
  label: string;
}

export default function TechPill({ label }: TechPillProps) {
  return (
    <span className="rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs font-medium text-slate-300">
      {label}
    </span>
  );
}
