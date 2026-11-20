import crypto from "crypto";
import { headers } from "next/headers";
import { errorMessage, fillDays, type RangeDays, type Row, type SourceResult, type WebReport } from "./types";

// Google Analytics 4 Data API for the property set in Settings → Tracking &
// Analytics → Google Analytics Property ID.
//
// Sign-in, in order of preference:
// 1. Keyless (Workload Identity Federation): on Vercel, the request's OIDC token
//    is exchanged at Google STS and used to act as a read-only service account.
//    Set up in the Google Cloud project "Keraeva's Gen Web Analytics": pool and
//    provider "vercel" accept only production deployments of this project, and
//    the service account is a Viewer on the GA property. No secret key exists.
// 2. A service account JSON key in GOOGLE_ANALYTICS_CREDENTIALS (raw or base64),
//    for organisations that allow keys.

const WIF_PROVIDER =
  process.env.GOOGLE_WIF_PROVIDER || "projects/260427482857/locations/global/workloadIdentityPools/vercel/providers/vercel";
const SERVICE_ACCOUNT =
  process.env.GOOGLE_ANALYTICS_SERVICE_ACCOUNT || "keraeva-analytics-reader@keraevas-gen-web-analytics.iam.gserviceaccount.com";
const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

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

/** Vercel's OIDC token for this request (production deployments only match the Google pool). */
async function vercelOidcToken() {
  try {
    const token = (await headers()).get("x-vercel-oidc-token");
    if (token) return token;
  } catch {
    // outside a request
  }
  return process.env.VERCEL_OIDC_TOKEN || null;
}

// Google access tokens last an hour; reuse one until shortly before it expires
let cachedToken: { value: string; expires: number } | null = null;
const fresh = () => (cachedToken && cachedToken.expires > Date.now() + 60_000 ? cachedToken.value : null);

async function keylessAccessToken(oidcToken: string) {
  const reused = fresh();
  if (reused) return reused;
  // 1. Exchange the Vercel token for a federated Google token
  const sts = await fetch("https://sts.googleapis.com/v1/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
      audience: `//iam.googleapis.com/${WIF_PROVIDER}`,
      scope: "https://www.googleapis.com/auth/cloud-platform",
      requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
      subjectToken: oidcToken,
      subjectTokenType: "urn:ietf:params:oauth:token-type:jwt",
    }),
    cache: "no-store",
  });
  const stsBody = await sts.json().catch(() => ({}));
  if (!sts.ok) throw new Error(`Google didn't accept the Vercel sign-in: ${stsBody.error_description || stsBody.error || sts.status}`);
  // 2. Act as the read-only service account
  const impersonate = await fetch(`https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${SERVICE_ACCOUNT}:generateAccessToken`, {
    method: "POST",
    headers: { Authorization: `Bearer ${stsBody.access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ scope: [SCOPE], lifetime: "3600s" }),
    cache: "no-store",
  });
  const saBody = await impersonate.json().catch(() => ({}));
  if (!impersonate.ok) throw new Error(`Google refused to act as the read-only service account: ${saBody?.error?.message || impersonate.status}`);
  cachedToken = { value: saBody.accessToken, expires: new Date(saBody.expireTime).getTime() || Date.now() + 3_000_000 };
  return cachedToken.value;
}

async function keyAccessToken(credentials: Credentials) {
  const reused = fresh();
  if (reused) return reused;
  const now = Math.floor(Date.now() / 1000);
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({
    iss: credentials.client_email,
    scope: SCOPE,
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
  const credentials = (() => {
    try {
      return readCredentials();
    } catch {
      return null;
    }
  })();
  const oidcToken = credentials ? null : await vercelOidcToken();
  const missing = [
    ...(propertyId ? [] : ["Google Analytics Property ID (Settings → Tracking & Analytics)"]),
    ...(credentials || oidcToken ? [] : ["Google sign-in (works on the live site through Vercel, or set GOOGLE_ANALYTICS_CREDENTIALS)"]),
  ];
  if (missing.length) return { status: "not-connected", missing };
  try {
    const token = credentials ? await keyAccessToken(credentials) : await keylessAccessToken(oidcToken!);
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

