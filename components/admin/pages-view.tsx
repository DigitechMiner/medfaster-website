import Link from "next/link";
import { redirect } from "next/navigation";
import { ExternalLink, FilePlus2, FileText, LayoutTemplate, PanelsTopLeft, Plus, SquarePen } from "lucide-react";
import type { AdminViewServerProps } from "payload";
import { DefaultTemplate } from "@payloadcms/next/templates";
import { PAGE_REGISTRY } from "@/content/pages";
import { Badge, ButtonLink, IconChip, PageHeader } from "./ui";
import { relativeTime } from "./format";
import { adminUrl } from "./paths";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com").replace(/\/$/, "");

type CustomPageRow = { id: number | string; title: string; slug: string; status: string; updatedAt?: string };

const TABS = [
  ["All", ""],
  ["Main pages", "main"],
  ["Custom pages", "custom"],
] as const;

// /website/pages: the website's main pages (fixed layouts) and custom pages built from sections
export async function PagesView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, permissions, visibleEntities, locale } = initPageResult;
  const { payload, user } = req;
  if (!user) redirect(adminUrl(`/login?redirect=${encodeURIComponent(adminUrl("/pages"))}`));

  const tab = String((searchParams as Record<string, unknown> | undefined)?.tab ?? "");
  const canCustom = (visibleEntities.collections as string[]).includes("pages");

  let custom: CustomPageRow[] = [];
  if (canCustom) {
    try {
      const result = await payload.find({ collection: "pages", depth: 0, limit: 200, sort: "title", draft: true, user, overrideAccess: false, select: { title: true, slug: true, _status: true, updatedAt: true } });
      custom = result.docs.map((doc) => ({ id: doc.id, title: doc.title, slug: doc.slug, status: doc._status ?? "draft", updatedAt: doc.updatedAt }));
    } catch {
      // not readable
    }
  }

  const pages = await Promise.all(
    Object.values(PAGE_REGISTRY)
      .filter((page) => (visibleEntities.globals as string[]).includes(page.slug))
      .map(async (page) => {
        let updatedAt: string | undefined;
        try {
          const doc = (await payload.findGlobal({ slug: page.slug as Parameters<typeof payload.findGlobal>[0]["slug"], depth: 0, user, overrideAccess: false })) as { updatedAt?: string };
          updatedAt = doc?.updatedAt;
        } catch {
          // not readable
        }
        return { ...page, updatedAt };
      })
  );

  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={payload}
      permissions={permissions}
      searchParams={searchParams}
      user={user}
      // Same top-bar actions (View site, theme switch) as Payload's own screens
      viewActions={payload.config.admin?.components?.actions}
      visibleEntities={visibleEntities}
    >
      <div className="kr-view">
        <PageHeader
          title="Pages"
          subtitle="Edit the website's pages, or build a new page from ready-made sections."
          actions={
            <>
              {(visibleEntities.globals as string[]).includes("header-footer") && (
                <ButtonLink href={adminUrl("/globals/header-footer")} icon={PanelsTopLeft} variant="secondary">Header &amp; Footer</ButtonLink>
              )}
              {canCustom && <ButtonLink href={adminUrl("/collections/pages/create")} icon={Plus}>New page</ButtonLink>}
            </>
          }
        />
        <div className="kr-segmented kr-status-tabs" role="group" aria-label="Filter pages">
          {TABS.map(([label, value]) => (
            <Link key={label} href={value ? adminUrl(`/pages?tab=${value}`) : adminUrl("/pages")} className={tab === value ? "is-active" : ""} prefetch={false}>
              {label} <span>{value === "main" ? pages.length : value === "custom" ? custom.length : pages.length + custom.length}</span>
            </Link>
          ))}
        </div>
        {tab !== "main" && canCustom && (tab === "custom" || custom.length > 0) && (
          <>
            {tab !== "custom" && <h2 className="kr-section-title">Custom pages</h2>}
            {custom.length === 0 ? (
              <div className="kr-card kr-empty-state">
                <IconChip icon={FilePlus2} />
                <h2>No custom pages yet</h2>
                <p className="kr-muted">Build a page from sections such as a hero, image and text, feature cards, steps, FAQs, job openings and a call to action.</p>
                <ButtonLink href={adminUrl("/collections/pages/create")} icon={Plus}>New page</ButtonLink>
              </div>
            ) : (
              <div className="kr-page-grid">
                {custom.map((page) => (
                  <article key={page.id} className="kr-card kr-page-card">
                    <div className="kr-page-card__top">
                      <IconChip icon={LayoutTemplate} />
                      <div className="kr-row__text">
                        <h2>{page.title}</h2>
                        <span className="kr-muted kr-small">{SITE_URL.replace(/^https?:\/\//, "")}/{page.slug}</span>
                      </div>
                      {page.status === "published" ? <Badge tone="success">Live</Badge> : <Badge tone="warning">Draft</Badge>}
                    </div>
                    <p className="kr-muted">Custom page built from sections.</p>
                    <div className="kr-page-card__foot">
                      <span className="kr-muted kr-small">{page.updatedAt ? `Edited ${relativeTime(page.updatedAt).toLowerCase()}` : ""}</span>
                      <div className="kr-inline">
                        <ButtonLink href={page.status === "published" ? `${SITE_URL}/${page.slug}` : `/api/preview?slug=${encodeURIComponent(page.slug)}`} icon={ExternalLink} variant="ghost" size="sm" external>
                          {page.status === "published" ? "View" : "Preview"}
                        </ButtonLink>
                        <ButtonLink href={adminUrl(`/collections/pages/${page.id}`)} icon={SquarePen} variant="secondary" size="sm">Edit page</ButtonLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
        {tab !== "custom" && tab !== "main" && custom.length > 0 && <h2 className="kr-section-title">Main pages</h2>}
        {tab === "custom" ? null : pages.length === 0 ? (
          <p className="kr-empty">No editable pages yet.</p>
        ) : (
          <div className="kr-page-grid">
            {pages.map((page) => (
              <article key={page.slug} className="kr-card kr-page-card">
                <div className="kr-page-card__top">
                  <IconChip icon={FileText} />
                  <div className="kr-row__text">
                    <h2>{page.label}</h2>
                    <span className="kr-muted kr-small">{SITE_URL.replace(/^https?:\/\//, "")}{page.path}</span>
                  </div>
                  <Badge tone="success">Live</Badge>
                </div>
                <p className="kr-muted">{page.description}</p>
                <div className="kr-page-card__foot">
                  <span className="kr-muted kr-small">{page.updatedAt ? `Edited ${relativeTime(page.updatedAt).toLowerCase()}` : "Not edited yet"}</span>
                  <div className="kr-inline">
                    <ButtonLink href={`${SITE_URL}${page.path}`} icon={ExternalLink} variant="ghost" size="sm" external>View</ButtonLink>
                    <ButtonLink href={adminUrl(`/globals/${page.slug}`)} icon={SquarePen} variant="secondary" size="sm">Edit page</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        <p className="kr-hint"><Link href={adminUrl("/globals/site-settings")} prefetch={false}>Site Settings</Link> hold the contact details, app links and page switches shared by every page.</p>
      </div>
    </DefaultTemplate>
  );
}
