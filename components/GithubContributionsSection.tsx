import { githubUsername } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const LEVEL_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const CELL_SIZE = 11;
const CELL_GAP = 3;
const STEP = CELL_SIZE + CELL_GAP;
const LEFT_LABEL_WIDTH = 28;
const TOP_LABEL_HEIGHT = 20;
const WEEKDAY_ROWS: { row: number; label: string }[] = [
  { row: 1, label: "Mon" },
  { row: 3, label: "Wed" },
  { row: 5, label: "Fri" },
];

interface ContributionGraph {
  total: number;
  weeks: (number | null)[][];
  monthLabels: { col: number; label: string }[];
}

async function getContributionGraph(
  username: string,
): Promise<ContributionGraph | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const html = await res.text();

    const totalMatch = html.match(/([\d,]+)\s*\n\s*contributions/);
    if (!totalMatch) return null;
    const total = Number(totalMatch[1].replaceAll(",", ""));

    const dayMatches = [
      ...html.matchAll(/data-date="([\d-]+)"[^>]*?data-level="(\d)"/g),
    ];
    if (dayMatches.length === 0) return null;

    const days = dayMatches.map((m) => ({
      date: new Date(`${m[1]}T00:00:00Z`),
      level: Number(m[2]),
    }));

    const firstDate = days[0].date;
    const gridStart = new Date(firstDate);
    gridStart.setUTCDate(firstDate.getUTCDate() - firstDate.getUTCDay());

    let maxCol = 0;
    const weeks: (number | null)[][] = [];
    for (const { date, level } of days) {
      const diffDays = Math.round(
        (date.getTime() - gridStart.getTime()) / 86_400_000,
      );
      const col = Math.floor(diffDays / 7);
      const row = date.getUTCDay();
      maxCol = Math.max(maxCol, col);
      weeks[col] ??= [null, null, null, null, null, null, null];
      weeks[col][row] = level;
    }

    const monthLabels: { col: number; label: string }[] = [];
    let prevMonth = -1;
    for (let col = 0; col <= maxCol; col++) {
      const colDate = new Date(gridStart);
      colDate.setUTCDate(gridStart.getUTCDate() + col * 7);
      const month = colDate.getUTCMonth();
      if (month !== prevMonth) {
        monthLabels.push({
          col,
          label: colDate.toLocaleString("en-US", {
            month: "short",
            timeZone: "UTC",
          }),
        });
        prevMonth = month;
      }
    }

    return { total, weeks, monthLabels };
  } catch {
    return null;
  }
}

export default async function GithubContributionsSection() {
  const graph = await getContributionGraph(githubUsername);
  const profileUrl = `https://github.com/${githubUsername}`;

  return (
    <section className="py-8 sm:py-10">
      <SectionHeading eyebrow="Activity" title="GitHub Contributions" />

      {graph ? (
        <>
          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${LEFT_LABEL_WIDTH + (graph.weeks.length) * STEP} ${TOP_LABEL_HEIGHT + 7 * STEP}`}
              className="min-w-[640px] w-full"
            >
              {graph.monthLabels.map(({ col, label }) => (
                <text
                  key={col}
                  x={LEFT_LABEL_WIDTH + col * STEP}
                  y={12}
                  fill="#a1a1aa"
                  fontSize="10"
                >
                  {label}
                </text>
              ))}
              {WEEKDAY_ROWS.map(({ row, label }) => (
                <text
                  key={label}
                  x={0}
                  y={TOP_LABEL_HEIGHT + row * STEP + CELL_SIZE - 1}
                  fill="#a1a1aa"
                  fontSize="10"
                >
                  {label}
                </text>
              ))}
              {graph.weeks.map((week, col) =>
                week.map((level, row) =>
                  level === null ? null : (
                    <rect
                      key={`${col}-${row}`}
                      x={LEFT_LABEL_WIDTH + col * STEP}
                      y={TOP_LABEL_HEIGHT + row * STEP}
                      width={CELL_SIZE}
                      height={CELL_SIZE}
                      rx={2}
                      fill={LEVEL_COLORS[level]}
                    />
                  ),
                ),
              )}
            </svg>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
            <p>
              {graph.total.toLocaleString()} contributions in the last year
              on{" "}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline underline-offset-4 hover:text-white"
              >
                GitHub
              </a>
              .
            </p>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {LEVEL_COLORS.map((color) => (
                <span
                  key={color}
                  className="h-2.5 w-2.5 rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm text-zinc-500">
          View contribution activity on{" "}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            GitHub
          </a>
          .
        </p>
      )}
    </section>
  );
}
