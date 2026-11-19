import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, BarChart3, Eye, Inbox, Megaphone, PlugZap, Settings, Users } from "lucide-react";
import type { AdminViewServerProps } from "payload";
import { DefaultTemplate } from "@payloadcms/next/templates";
import { getSiteSettings } from "@/lib/cms/site";
import { cleanMeasurementId, cleanPixelId } from "@/lib/tracking";
import { RANGES, type RangeDays, type SourceResult, type WebReport } from "@/lib/analytics/types";
import { vercelReport } from "@/lib/analytics/vercel";
import { googleReport } from "@/lib/analytics/google";
import { metaReport } from "@/lib/analytics/meta";
import { inboxReport } from "@/lib/analytics/inbox";
import { Badge, ButtonLink, IconChip, PageHeader } from "./ui";
import { DailyColumns, formatNumber, RankList } from "./charts";
import { adminUrl } from "./paths";

const SETTINGS_URL = adminUrl("/globals/site-settings");
const VERCEL_ENV_URL = "https://vercel.com/digitech-miners-projects/general-keraeva-website/settings/environment-variables";

// /website/analytics: visitors and conversions from Vercel Analytics, Google
// Analytics, the Meta Pixel and the website's own forms, side by side
export async function AnalyticsView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, permissions, visibleEntities, locale } = initPageResult;
  const { payload, user } = req;
  if (!user) redirect(adminUrl(`/login?redirect=${encodeURIComponent(adminUrl("/analytics"))}`));

  const requested = Number((searchParams as Record<string, unknown> | undefined)?.range);
  const days: RangeDays = (RANGES as readonly number[]).includes(requested) ? (requested as RangeDays) : 30;

  const { tracking } = await getSiteSettings();
  const gaId = cleanMeasurementId(tracking.googleAnalyticsId);
  const propertyId = /^\d{5,15}$/.test(tracking.googleAnalyticsPropertyId.trim()) ? tracking.googleAnalyticsPropertyId.trim() : "";
  const pixelId = cleanPixelId(tracking.metaPixelId);

  const [vercel, google, meta, inbox] = await Promise.all([
    vercelReport(days),
    googleReport(days, propertyId),
    metaReport(days, pixelId),
    inboxReport(days, payload, user),
  ]);

  const metaLeads = meta.status === "ok" ? meta.data.events.filter((e) => e.label === "Lead" || e.label === "Contact").reduce((sum, e) => sum + e.value, 0) : null;
  const state = (result: SourceResult<unknown>) => (result.status === "error" ? "couldn't load" : "not connected");
  const tiles = [
    { icon: Users, label: "Visitors", value: vercel.status === "ok" ? vercel.data.totals.visitors : null, foot: "Vercel Analytics", state: state(vercel) },
    { icon: Eye, label: "Page views", value: vercel.status === "ok" ? vercel.data.totals.pageviews : null, foot: "Vercel Analytics", state: state(vercel) },
    { icon: BarChart3, label: "Google users", value: google.status === "ok" ? google.data.totals.visitors : null, foot: "Google Analytics", state: state(google) },
    { icon: Megaphone, label: "Meta leads", value: metaLeads, foot: "Meta Pixel (Lead + Contact)", state: state(meta) },
    { icon: Inbox, label: "Form submissions", value: inbox.status === "ok" ? inbox.data.total : null, foot: "Website Inbox", state: state(inbox) },
  ];

  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={payload}
      permissions={permissions}
      searchParams={searchParams}
      user={user}
      viewActions={payload.config.admin?.components?.actions}
      visibleEntities={visibleEntities}
    >
      <div className="kr-view">
        <PageHeader
          title="Analytics"
          subtitle={`Visitors and sign-ups on keraeva.com over the last ${days} days. Numbers refresh every 10 minutes.`}
          actions={<ButtonLink href={SETTINGS_URL} icon={Settings} variant="secondary">Tracking settings</ButtonLink>}
        />
        <div className="kr-segmented kr-status-tabs" role="group" aria-label="Time period">
          {RANGES.map((range) => (
            <Link key={range} href={adminUrl(`/analytics?range=${range}`)} className={range === days ? "is-active" : ""} aria-current={range === days ? "true" : undefined} prefetch={false}>
              Last {range} days
            </Link>
          ))}
        </div>

        <section className="kr-stats kr-stats--five" aria-label="Summary">
          {tiles.map((tile) => (
            <div key={tile.label} className="kr-card kr-stat">
              <div className="kr-stat__top">
                <IconChip icon={tile.icon} />
                <span>{tile.label}</span>
              </div>
              <strong className="kr-stat__value">{tile.value === null ? "–" : formatNumber(tile.value)}</strong>
              <span className="kr-muted kr-small">{tile.value === null ? `${tile.foot}: ${tile.state}` : tile.foot}</span>
            </div>
          ))}
        </section>

        <WebSection
          id="vercel"
          title="Website traffic"
          source="Vercel Analytics"
          note="Counts every visitor without cookies, so it includes people who decline the cookie banner."
          result={vercel}
          setup={
            <ol>
              <li>In Vercel, create an access token (Account Settings → Tokens) with access to the Digitech Miner&apos;s projects team.</li>
              <li>Add it as <code>VERCEL_ANALYTICS_TOKEN</code> in the project&apos;s <a href={VERCEL_ENV_URL} target="_blank" rel="noopener noreferrer">environment variables</a> (Production), then redeploy.</li>
            </ol>
          }
        />

        <WebSection
          id="google"
          title="Google Analytics"
          source={gaId ? `Tracking code on · ${gaId}` : "Tracking code off"}
          note="Only counts visitors who accept the cookie banner."
          result={google}
          setup={
            <ol>
              <li>In Google Analytics, create a GA4 property and a web data stream for keraeva.com.</li>
              <li>Paste the <strong>Measurement ID</strong> (G-…) and the <strong>Property ID</strong> into <Link href={SETTINGS_URL} prefetch={false}>Site Settings → Tracking</Link>. The Measurement ID turns on tracking.</li>
              <li>In Google Cloud, enable the <em>Google Analytics Data API</em>, create a service account and download a JSON key.</li>
              <li>In Google Analytics → Admin → Property access management, add the service account&apos;s email as a <strong>Viewer</strong>.</li>
              <li>Add the JSON key as <code>GOOGLE_ANALYTICS_CREDENTIALS</code> in the project&apos;s <a href={VERCEL_ENV_URL} target="_blank" rel="noopener noreferrer">environment variables</a>, then redeploy.</li>
            </ol>
          }
        />

        <section className="kr-card kr-analytics" aria-labelledby="meta-title">
          <SectionHeader id="meta-title" title="Meta Pixel" source={pixelId ? `Pixel on · ${pixelId}` : "Pixel off"} result={meta} />
          {meta.status === "ok" ? (
            <>
              <p className="kr-muted kr-small">Only counts visitors who accept the cookie banner.{meta.data.partial ? " Showing the most recent part of this period." : ""}</p>
              <div className="kr-analytics__body">
                <div className="kr-analytics__chart">
                  <h3 className="kr-analytics__chart-title">Page views per day</h3>
                  <DailyColumns points={meta.data.daily} unit="page views" label="Meta Pixel page views per day" />
                </div>
                <RankList title="Events" rows={meta.data.events} unit="Count" empty="No Pixel events in this period yet." />
              </div>
            </>
          ) : (
            <SourceState
              result={meta}
              setup={
                <ol>
                  <li>In Meta Events Manager, create a Pixel (Data sources → Connect data → Web).</li>
                  <li>Paste the <strong>Pixel ID</strong> into <Link href={SETTINGS_URL} prefetch={false}>Site Settings → Tracking</Link>. This turns on the Pixel.</li>
                  <li>In Meta Business Settings → System users, create a system user, give it access to the Pixel and generate a token with the <code>ads_read</code> permission.</li>
                  <li>Add the token as <code>META_ACCESS_TOKEN</code> in the project&apos;s <a href={VERCEL_ENV_URL} target="_blank" rel="noopener noreferrer">environment variables</a>, then redeploy.</li>
                </ol>
              }
            />
          )}
        </section>

        <section className="kr-card kr-analytics" aria-labelledby="inbox-title">
          <SectionHeader id="inbox-title" title="Form submissions" source="Website Inbox" result={inbox} />
          {inbox.status === "ok" ? (
            <div className="kr-analytics__body">
              <div className="kr-analytics__chart">
                <h3 className="kr-analytics__chart-title">Submissions per day</h3>
                <DailyColumns points={inbox.data.daily} unit="submissions" label="Form submissions per day" />
              </div>
              <RankList title="By form" rows={inbox.data.byType} unit="Submissions" />
            </div>
          ) : (
            <SourceState result={inbox} />
          )}
          <p className="kr-hint"><Link href={adminUrl("/collections/form-submissions")} prefetch={false}>Open the Inbox</Link> to read and answer each submission.</p>
        </section>
      </div>
    </DefaultTemplate>
  );
}

function statusBadge(result: SourceResult<unknown>) {
  if (result.status === "ok") return <Badge tone="success">Connected</Badge>;
  if (result.status === "error") return <Badge tone="danger">Error</Badge>;
  return <Badge tone="neutral">Not connected</Badge>;
}

function SectionHeader({ id, title, source, result }: { id: string; title: string; source: string; result: SourceResult<unknown> }) {
  return (
    <div className="kr-card__header">
      <div className="kr-row__text">
        <h2 id={id}>{title}</h2>
        <span className="kr-muted kr-small">{source}</span>
      </div>
      {statusBadge(result)}
    </div>
  );
}

function SourceState({ result, setup }: { result: SourceResult<unknown>; setup?: React.ReactNode }) {
  if (result.status === "error") {
    return (
      <div className="kr-analytics__state">
        <IconChip icon={AlertTriangle} tone="neutral" />
        <div>
          <p className="kr-strong">Couldn&apos;t load these numbers</p>
          <p className="kr-muted kr-small">{result.message}</p>
        </div>
      </div>
    );
  }
  if (result.status === "not-connected") {
    return (
      <div className="kr-analytics__state">
        <IconChip icon={PlugZap} tone="neutral" />
        <div className="kr-analytics__setup">
          <p className="kr-strong">Not connected yet</p>
          <p className="kr-muted kr-small">Missing: {result.missing.join(", ")}</p>
          {setup}
        </div>
      </div>
    );
  }
  return null;
}

function WebSection({ id, title, source, note, result, setup }: { id: string; title: string; source: string; note: string; result: SourceResult<WebReport>; setup: React.ReactNode }) {
  return (
    <section className="kr-card kr-analytics" aria-labelledby={`${id}-title`}>
      <SectionHeader id={`${id}-title`} title={title} source={source} result={result} />
      {result.status === "ok" ? (
        <>
          <p className="kr-muted kr-small">
            {formatNumber(result.data.totals.visitors)} visitors · {formatNumber(result.data.totals.pageviews)} page views
            {result.data.totals.sessions !== undefined ? ` · ${formatNumber(result.data.totals.sessions)} sessions` : ""}. {note}
          </p>
          <div className="kr-analytics__chart">
            <h3 className="kr-analytics__chart-title">Visitors per day</h3>
            <DailyColumns points={result.data.daily} unit="visitors" label={`${title}: visitors per day`} />
          </div>
          <div className="kr-analytics__grid">
            <RankList title="Top pages" rows={result.data.pages} unit="Page views" />
            <RankList title="Where visitors come from" rows={result.data.sources} unit={id === "google" ? "Sessions" : "Visitors"} />
            <RankList title="Countries" rows={result.data.countries} unit="Visitors" />
            <RankList title="Devices" rows={result.data.devices} unit="Visitors" />
          </div>
        </>
      ) : (
        <SourceState result={result} setup={setup} />
      )}
    </section>
  );
}

