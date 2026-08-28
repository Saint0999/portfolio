"use client";

import { useEffect, useState } from "react";
import {
  CONTRIBUTIONS_ENDPOINT,
  type ContributionGraph as Graph,
} from "@/lib/contributions";

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

interface Props {
  /** Snapshot rendered at build time, shown until live data arrives. */
  initialGraph: Graph | null;
  username: string;
  profileUrl: string;
}

export default function ContributionGraph({
  initialGraph,
  username,
  profileUrl,
}: Props) {
  const [graph, setGraph] = useState(initialGraph);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${CONTRIBUTIONS_ENDPOINT}?username=${encodeURIComponent(username)}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then((res) => (res.ok ? (res.json() as Promise<Graph>) : null))
      .then((live) => {
        if (live?.weeks?.length) setGraph(live);
      })
      // Keep the build-time snapshot if the live fetch fails.
      .catch(() => {});

    return () => controller.abort();
  }, [username]);

  if (!graph) {
    return (
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
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${LEFT_LABEL_WIDTH + graph.weeks.length * STEP} ${TOP_LABEL_HEIGHT + 7 * STEP}`}
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
          {graph.total.toLocaleString()} contributions in the last year on{" "}
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
  );
}
