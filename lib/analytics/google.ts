import crypto from "crypto";
import { errorMessage, fillDays, type RangeDays, type Row, type SourceResult, type WebReport } from "./types";

// Google Analytics 4 Data API, read with a service account (JSON key in
// GOOGLE_ANALYTICS_CREDENTIALS, raw or base64) that has Viewer access to the
// property set in Site Settings → Tracking → Google Analytics Property ID.

type Credentials = { client_email: string; private_key: string };
type ReportRow = { dimensionValues?: { value: string }[]; metricValues?: { value: string }[] };
type Report = { rows?: ReportRow[] };

function readCredentials(): Credentials | null {
  const raw = process.env.GOOGLE_ANALYTICS_CREDENTIALS?.trim();
  if (!raw) return null;
  const text = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
  const parsed = JSON.parse(text) as Credentials;
  if (!parsed.client_email || !parsed.private_key) throw new Error("GOOGLE_ANALYTICS_CREDENTIALS is not a service account key.");
  return parsed;
}

let cachedToken: { value: string; expires: number } | null = null;

async function accessToken(credentials: Credentials) {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const now = Math.floor(Date.now() / 1000);
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = crypto.createSign("RSA-SHA256").update(unsigned).sign(credentials.private_key.replace(/\\n/g, "\n"), "base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }),
    cache: "no-store",
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error_description || "Google sign-in with the service account failed.");
  cachedToken = { value: body.access_token, expires: Date.now() + body.expires_in * 1000 };
  return cachedToken.value;
}

const metricOrder = (name: string) => ({ metric: { metricName: name }, desc: true });

function toRows(report: Report, rename: (label: string) => string = (l) => l): Row[] {
  return (report.rows ?? []).map((row) => ({ label: rename(row.dimensionValues?.[0]?.value ?? ""), value: Number(row.metricValues?.[0]?.value) || 0 }));
}

export async function googleReport(days: RangeDays, propertyId: string): Promise<SourceResult<WebReport>> {
  const missing = [
    ...(propertyId ? [] : ["Google Analytics Property ID (Site Settings → Tracking)"]),
    ...(process.env.GOOGLE_ANALYTICS_CREDENTIALS ? [] : ["GOOGLE_ANALYTICS_CREDENTIALS"]),
  ];
  if (missing.length) return { status: "not-connected", missing };
  try {
    const credentials = readCredentials()!;
    const token = await accessToken(credentials);
    const dateRanges = [{ startDate: `${days - 1}daysAgo`, endDate: "today" }];
    const call = async (path: string, body: object) => {
      const response = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:${path}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        next: { revalidate: 600 },
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(json?.error?.message || `Google responded with ${response.status}`);
      return json;
    };
    const [batch, devices] = await Promise.all([
      call("batchRunReports", {
        requests: [
          { dateRanges, metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }, { name: "sessions" }] },
          { dateRanges, dimensions: [{ name: "date" }], metrics: [{ name: "activeUsers" }], limit: 400 },
          { dateRanges, dimensions: [{ name: "pagePath" }], metrics: [{ name: "screenPageViews" }], orderBys: [metricOrder("screenPageViews")], limit: 8 },
          { dateRanges, dimensions: [{ name: "sessionSource" }], metrics: [{ name: "sessions" }], orderBys: [metricOrder("sessions")], limit: 8 },
          { dateRanges, dimensions: [{ name: "country" }], metrics: [{ name: "activeUsers" }], orderBys: [metricOrder("activeUsers")], limit: 8 },
        ],
      }) as Promise<{ reports: Report[] }>,
      call("runReport", { dateRanges, dimensions: [{ name: "deviceCategory" }], metrics: [{ name: "activeUsers" }], orderBys: [metricOrder("activeUsers")], limit: 5 }) as Promise<Report>,
    ]);
    const [totals, daily, pages, sources, countries] = batch.reports;
    const totalValues = totals.rows?.[0]?.metricValues?.map((m) => Number(m.value) || 0) ?? [0, 0, 0];
    const byDay = new Map(
      (daily.rows ?? []).map((row) => {
        const d = row.dimensionValues?.[0]?.value ?? "";
        return [`${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`, Number(row.metricValues?.[0]?.value) || 0];
      })
    );
    return {
      status: "ok",
      data: {
        totals: { visitors: totalValues[0], pageviews: totalValues[1], sessions: totalValues[2] },
        daily: fillDays(days, byDay),
        pages: toRows(pages),
        sources: toRows(sources, (l) => (l === "(direct)" ? "Direct" : l || "Unknown")),
        countries: toRows(countries, (l) => l || "Unknown"),
        devices: toRows(devices, (l) => (l ? l[0].toUpperCase() + l.slice(1) : "Unknown")),
      },
    };
  } catch (error) {
    return { status: "error", message: errorMessage(error) };
  }
}

