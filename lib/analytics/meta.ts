import { errorMessage, fillDays, periodStart, type MetaReport, type RangeDays, type SourceResult } from "./types";

// Meta Pixel event counts from the Graph API, read with an access token (a
// system user token with access to the Pixel) in META_ACCESS_TOKEN.
const GRAPH = "https://graph.facebook.com/v23.0";
const MAX_PAGES = 40;

type Bucket = { start_time: string; data: { value: string; count: number }[] };
type Page = { data?: Bucket[]; paging?: { next?: string }; error?: { message: string } };

export async function metaReport(days: RangeDays, pixelId: string): Promise<SourceResult<MetaReport>> {
  const token = process.env.META_ACCESS_TOKEN;
  const missing = [...(pixelId ? [] : ["Meta Pixel ID (Settings → Tracking & Analytics)"]), ...(token ? [] : ["META_ACCESS_TOKEN"])];
  if (missing.length) return { status: "not-connected", missing };
  try {
    const params = new URLSearchParams({
      aggregation: "event",
      start_time: String(Math.floor(periodStart(days).getTime() / 1000)),
      end_time: String(Math.floor(Date.now() / 1000)),
      access_token: token!,
    });
    let url: string | undefined = `${GRAPH}/${pixelId}/stats?${params}`;
    const events = new Map<string, number>();
    const pageViews = new Map<string, number>();
    let pages = 0;
    while (url && pages < MAX_PAGES) {
      const response = await fetch(url, { next: { revalidate: 600 } });
      const body = (await response.json().catch(() => ({}))) as Page;
      if (!response.ok || body.error) throw new Error(body.error?.message || `Meta responded with ${response.status}`);
      for (const bucket of body.data ?? []) {
        const day = new Date(bucket.start_time).toISOString().slice(0, 10);
        for (const { value, count } of bucket.data ?? []) {
          events.set(value, (events.get(value) ?? 0) + count);
          if (value === "PageView") pageViews.set(day, (pageViews.get(day) ?? 0) + count);
        }
      }
      url = body.paging?.next;
      pages += 1;
    }
    return {
      status: "ok",
      data: {
        events: [...events].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value),
        daily: fillDays(days, pageViews),
        partial: Boolean(url),
      },
    };
  } catch (error) {
    return { status: "error", message: errorMessage(error) };
  }
}
