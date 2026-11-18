import Link from "next/link";
import { ArrowRight, Briefcase, ChevronRight, FileText, Image as ImageIcon, Inbox, Newspaper, Plus, Settings, SquarePen, Upload } from "lucide-react";
import type { AdminViewServerProps } from "payload";
import { PAGE_REGISTRY } from "@/content/pages";
import { Avatar, Badge, ButtonLink, IconChip, PageHeader } from "./ui";
import { daysAgoISO, fileSize, greeting, initials, relativeTime, SUBMISSION_TYPES } from "./format";
import { adminUrl } from "./paths";

type Submission = { id: string | number; name?: string | null; email?: string | null; summary?: string | null; type: string; status: string; createdAt: string };

// KeRaeva admin home: what needs attention, quick actions and the editable pages
export async function Dashboard({ payload, user }: AdminViewServerProps) {
  const as = { user, overrideAccess: false } as const;
  const safe = async <T,>(fallback: T, run: () => Promise<T>) => { try { return await run(); } catch { return fallback; } };
  const weekStart = daysAgoISO(7);

  const [newCount, weekCount, published, drafts, media, latest] = await Promise.all([
    safe(0, async () => (await payload.count({ collection: "form-submissions", where: { status: { equals: "new" } }, ...as })).totalDocs),
    safe(0, async () => (await payload.count({ collection: "form-submissions", where: { createdAt: { greater_than: weekStart } }, ...as })).totalDocs),
    safe(0, async () => (await payload.count({ collection: "jobs", where: { _status: { equals: "published" } }, ...as })).totalDocs),
    safe(0, async () => (await payload.count({ collection: "jobs", where: { _status: { equals: "draft" } }, ...as })).totalDocs),
    safe({ totalDocs: 0, docs: [] as { filesize?: number | null }[] }, async () => (await payload.find({ collection: "media", limit: 500, depth: 0, select: { filesize: true }, ...as })) as unknown as { totalDocs: number; docs: { filesize?: number | null }[] }),
    safe([] as Submission[], async () => (await payload.find({ collection: "form-submissions", sort: "-createdAt", limit: 5, depth: 0, ...as })).docs as unknown as Submission[]),
  ]);

  const pages = await Promise.all(
    Object.values(PAGE_REGISTRY).map(async (page) => {
      const doc = await safe(null as { updatedAt?: string } | null, () => payload.findGlobal({ slug: page.slug as Parameters<typeof payload.findGlobal>[0]["slug"], depth: 0, ...as }) as Promise<{ updatedAt?: string }>);
      return { ...page, updatedAt: doc?.updatedAt };
    })
  );
  const lastPageEdit = pages.map((p) => p.updatedAt).filter(Boolean).sort().pop();
  const mediaBytes = media.docs.reduce((sum, doc) => sum + (doc.filesize || 0), 0);
  const firstName = ((user as { name?: string } | null)?.name || "").split(" ")[0];

  const stats = [
    { icon: Inbox, label: "New submissions", value: newCount, tone: "brand", foot: `${weekCount} in the last 7 days`, href: adminUrl("/collections/form-submissions?status=new") },
    { icon: Briefcase, label: "Published jobs", value: published, tone: "success", foot: `${drafts} draft${drafts === 1 ? "" : "s"}`, href: adminUrl("/collections/jobs") },
    { icon: FileText, label: "Editable pages", value: pages.length, tone: "info", foot: lastPageEdit ? `Last edit ${relativeTime(lastPageEdit).toLowerCase()}` : "Not edited yet", href: adminUrl("/pages") },
    { icon: ImageIcon, label: "Media files", value: media.totalDocs, tone: "neutral", foot: `${fileSize(mediaBytes)} used`, href: adminUrl("/collections/media") },
  ];

  const actions = [
    { icon: SquarePen, label: "Edit the home page", hint: "Hero, sections and buttons", href: adminUrl("/globals/page-home") },
    { icon: Briefcase, label: "Post a job opening", hint: "Shows on Careers when published", href: adminUrl("/collections/jobs/create") },
    { icon: Newspaper, label: "Write a blog post", hint: "Draft, preview, publish", href: adminUrl("/collections/posts/create") },
    { icon: Settings, label: "Update site settings", hint: "Contact details and app links", href: adminUrl("/globals/site-settings") },
  ];

  return (
    <div className="kr-view">
      <PageHeader
        title={`${greeting()}${firstName ? `, ${firstName}` : ""}`}
        subtitle="Here’s what’s happening on keraeva.com."
        actions={
          <>
            <ButtonLink href={adminUrl("/collections/media/create")} icon={Upload} variant="secondary">Upload media</ButtonLink>
            <ButtonLink href={adminUrl("/collections/jobs/create")} icon={Plus}>New job opening</ButtonLink>
          </>
        }
      />

      <section className="kr-stats" aria-label="Overview">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="kr-card kr-stat" prefetch={false}>
            <div className="kr-stat__top">
              <IconChip icon={stat.icon} />
              <span>{stat.label}</span>
            </div>
            <strong className="kr-stat__value">{stat.value}</strong>
            <Badge tone={stat.tone}>{stat.foot}</Badge>
          </Link>
        ))}
      </section>

      <div className="kr-columns">
        <section className="kr-card kr-list-card" aria-labelledby="latest-submissions">
          <div className="kr-card__header">
            <h2 id="latest-submissions">Latest submissions</h2>
            <ButtonLink href={adminUrl("/collections/form-submissions")} icon={ArrowRight} variant="ghost" size="sm">Open inbox</ButtonLink>
          </div>
          {latest.length === 0 ? (
            <p className="kr-empty">No form submissions yet. Contact, Support, Request a Demo and newsletter forms will appear here.</p>
          ) : (
            <ul className="kr-rows">
              {latest.map((item) => {
                const type = SUBMISSION_TYPES[item.type] ?? { label: item.type, tone: "neutral" };
                return (
                  <li key={item.id}>
                    <Link href={adminUrl(`/collections/form-submissions?id=${item.id}`)} className="kr-row" prefetch={false}>
                      <Avatar text={initials(item.name || item.email)} />
                      <div className="kr-row__text">
                        <div className="kr-row__line">
                          <span className={item.status === "new" ? "kr-strong" : ""}>{item.name || item.email}</span>
                          <Badge tone={type.tone}>{type.label}</Badge>
                        </div>
                        <span className="kr-muted">{item.summary || item.email}</span>
                      </div>
                      <span className="kr-row__meta">
                        {relativeTime(item.createdAt)}
                        {item.status === "new" ? <span className="kr-dot" aria-label="New" /> : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <div className="kr-side">
          <section className="kr-card" aria-labelledby="quick-actions">
            <h2 id="quick-actions">Quick actions</h2>
            <ul className="kr-rows kr-rows--plain">
              {actions.map((action) => (
                <li key={action.label}>
                  <Link href={action.href} className="kr-row" prefetch={false}>
                    <IconChip icon={action.icon} tone="neutral" />
                    <div className="kr-row__text">
                      <span className="kr-strong">{action.label}</span>
                      <span className="kr-muted kr-small">{action.hint}</span>
                    </div>
                    <ChevronRight className="kr-row__chevron" aria-hidden="true" strokeWidth={1.75} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="kr-card" aria-labelledby="pages">
            <div className="kr-card__header">
              <h2 id="pages">Pages</h2>
              <ButtonLink href={adminUrl("/pages")} variant="ghost" size="sm">All pages</ButtonLink>
            </div>
            <ul className="kr-rows kr-rows--plain">
              {pages.slice(0, 4).map((page) => (
                <li key={page.slug}>
                  <Link href={adminUrl(`/globals/${page.slug}`)} className="kr-row" prefetch={false}>
                    <div className="kr-row__text">
                      <span className="kr-strong">{page.label}</span>
                      <span className="kr-muted kr-small">{page.updatedAt ? `Edited ${relativeTime(page.updatedAt).toLowerCase()}` : "Not edited yet"}</span>
                    </div>
                    <Badge tone="success">Live</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
