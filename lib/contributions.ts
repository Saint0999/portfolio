export interface ContributionGraph {
  total: number;
  weeks: (number | null)[][];
  monthLabels: { col: number; label: string }[];
}

export function parseContributionsHtml(html: string): ContributionGraph | null {
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
}

export async function fetchContributionGraph(
  username: string,
  init?: RequestInit,
): Promise<ContributionGraph | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${encodeURIComponent(username)}/contributions`,
      init,
    );
    if (!res.ok) return null;
    return parseContributionsHtml(await res.text());
  } catch {
    return null;
  }
}

/** Path served by the Netlify function in netlify/functions/. */
export const CONTRIBUTIONS_ENDPOINT = "/api/github-contributions";
