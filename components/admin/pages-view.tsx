import Link from "next/link";
import { redirect } from "next/navigation";
import { ExternalLink, FileText, SquarePen } from "lucide-react";
import type { AdminViewServerProps } from "payload";
import { DefaultTemplate } from "@payloadcms/next/templates";
import { PAGE_REGISTRY } from "@/content/pages";
import { Badge, ButtonLink, IconChip, PageHeader } from "./ui";
import { relativeTime } from "./format";
import { adminUrl } from "./paths";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com").replace(/\/$/, "");

// /admin/pages: every page whose text and images can be edited
export async function PagesView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, permissions, visibleEntities, locale } = initPageResult;
  const { payload, user } = req;
  if (!user) redirect(adminUrl(`/login?redirect=${encodeURIComponent(adminUrl("/pages"))}`));

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
      visibleEntities={visibleEntities}
    >
      <div className="kr-view">
        <PageHeader title="Pages" subtitle="Text, images, buttons and section visibility on each page of the website." />
        {pages.length === 0 ? (
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
