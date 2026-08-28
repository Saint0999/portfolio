import { fetchContributionGraph } from "../../lib/contributions";

export const config = { path: "/api/github-contributions" };

const DEFAULT_USERNAME = "Saint0999";

// Only proxy plausible GitHub logins so this can't be used as an open relay.
const USERNAME_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;

export default async function handler(req: Request): Promise<Response> {
  const username =
    new URL(req.url).searchParams.get("username") ?? DEFAULT_USERNAME;

  if (!USERNAME_PATTERN.test(username)) {
    return Response.json({ error: "invalid username" }, { status: 400 });
  }

  const graph = await fetchContributionGraph(username);
  if (!graph) {
    return Response.json({ error: "unavailable" }, { status: 502 });
  }

  return Response.json(graph, {
    headers: {
      // Serve a cached copy instantly, refresh in the background.
      "cache-control": "public, max-age=0, must-revalidate",
      "netlify-cdn-cache-control":
        "public, s-maxage=1800, stale-while-revalidate=86400",
    },
  });
}
