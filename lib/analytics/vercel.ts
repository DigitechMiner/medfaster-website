import { countryName, errorMessage, fillDays, periodStart, type RangeDays, type Row, type SourceResult, type WebReport } from "./types";

// Vercel Web Analytics (already collecting on keraeva.com through <Analytics />).
// Read with a Vercel access token in VERCEL_ANALYTICS_TOKEN.
const PROJECT_ID = process.env.VERCEL_ANALYTICS_PROJECT_ID || "prj_aJGpmYwZcCOQX2olM4pRqFfks5g1";
const TEAM_ID = process.env.VERCEL_ANALYTICS_TEAM_ID || "team_QD9wWzRhoWDPs1BVRZCt9js2";

type VisitRow = Record<string, string | number> & { visitors: number; pageviews: number };

async function query<T>(endpoint: string, params: Record<string, string | number>, token: string): Promise<T> {
  const search = new URLSearchParams({ projectId: PROJECT_ID, teamId: TEAM_ID, ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])) });
  const response = await fetch(`https://api.vercel.com/v1/query/web-analytics/visits/${endpoint}?${search}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 600 },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body?.error?.message || `Vercel responded with ${response.status}`);
  }
  return ((await response.json()) as { data: T }).data;
}

function rows(data: VisitRow[], key: string, metric: "visitors" | "pageviews", rename: (label: string) => string = (l) => l): Row[] {
  return data.map((row) => ({ label: row[key] === "Others" ? "Other" : rename(String(row[key] ?? "")), value: Number(row[metric]) || 0 }));
}

export async function vercelReport(days: RangeDays): Promise<SourceResult<WebReport>> {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  if (!token) return { status: "not-connected", missing: ["VERCEL_ANALYTICS_TOKEN"] };
  const range = { since: periodStart(days).toISOString(), until: new Date().toISOString() };
  try {
    const [totals, daily, pages, referrers, countries, devices] = await Promise.all([
      query<{ visitors: number; pageviews: number }>("count", range, token),
      query<(VisitRow & { timestamp: string })[]>("aggregate", { ...range, by: "day", limit: 100 }, token),
      query<VisitRow[]>("aggregate", { ...range, by: "requestPath", limit: 8 }, token),
      query<VisitRow[]>("aggregate", { ...range, by: "referrerHostname", limit: 8 }, token),
      query<VisitRow[]>("aggregate", { ...range, by: "country", limit: 8 }, token),
      query<VisitRow[]>("aggregate", { ...range, by: "deviceType", limit: 5 }, token),
    ]);
    return {
      status: "ok",
      data: {
        totals: { visitors: totals.visitors, pageviews: totals.pageviews },
        daily: fillDays(days, new Map(daily.map((d) => [String(d.timestamp).slice(0, 10), Number(d.visitors) || 0]))),
        pages: rows(pages, "requestPath", "pageviews"),
        sources: rows(referrers, "referrerHostname", "visitors", (l) => l || "Direct / unknown"),
        countries: rows(countries, "country", "visitors", countryName),
        devices: rows(devices, "deviceType", "visitors", (l) => (l ? l[0].toUpperCase() + l.slice(1) : "Unknown")),
      },
    };
  } catch (error) {
    return { status: "error", message: errorMessage(error) };
  }
}
