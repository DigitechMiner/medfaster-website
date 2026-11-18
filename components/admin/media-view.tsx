import Link from "next/link";
import { ImageOff, Search, Upload } from "lucide-react";
import type { ListViewServerProps, Where } from "payload";
import { ButtonLink, PageHeader } from "./ui";
import { fileSize } from "./format";
import { adminUrl } from "./paths";

type MediaDoc = { id: string | number; filename?: string | null; alt?: string | null; url?: string | null; width?: number | null; height?: number | null; filesize?: number | null; mimeType?: string | null; thumbnailURL?: string | null };

const BASE = adminUrl("/collections/media");
const param = (sp: Record<string, unknown> | undefined, key: string) => { const v = sp?.[key]; return typeof v === "string" ? v : ""; };

// Media Library as an image grid, replacing the default table
export async function MediaView({ payload, user, searchParams, hasCreatePermission }: ListViewServerProps & { hasCreatePermission?: boolean }) {
  const sp = searchParams as Record<string, unknown> | undefined;
  const q = param(sp, "q");
  const filter = param(sp, "filter");
  const as = { user, overrideAccess: false } as const;

  const and: Where[] = [];
  if (q) and.push({ or: [{ filename: { like: q } }, { alt: { like: q } }] });
  if (filter === "missing-alt") and.push({ or: [{ alt: { exists: false } }, { alt: { equals: "" } }] });

  const [result, total, missing] = await Promise.all([
    payload.find({ collection: "media", where: and.length ? { and } : undefined, sort: "-updatedAt", limit: 60, depth: 0, ...as }),
    payload.count({ collection: "media", ...as }),
    payload.count({ collection: "media", where: { or: [{ alt: { exists: false } }, { alt: { equals: "" } }] }, ...as }),
  ]);
  const docs = result.docs as unknown as MediaDoc[];
  const link = (next: Record<string, string>) => { const s = new URLSearchParams(Object.entries({ q, filter, ...next }).filter(([, v]) => v)).toString(); return s ? `${BASE}?${s}` : BASE; };

  return (
    <div className="kr-view">
      <PageHeader
        title="Media Library"
        subtitle="Images used across the website. Replacing an image updates every page that uses it."
        actions={hasCreatePermission !== false ? <ButtonLink href={`${BASE}/create`} icon={Upload}>Upload image</ButtonLink> : null}
      />
      <div className="kr-toolbar">
        <form className="kr-search" action={BASE} method="get" role="search">
          <Search aria-hidden="true" strokeWidth={1.75} />
          {filter ? <input type="hidden" name="filter" value={filter} /> : null}
          <input type="search" name="q" defaultValue={q} placeholder="Search by file name or alt text" aria-label="Search media" />
        </form>
        <div className="kr-segmented" role="group" aria-label="Show">
          <Link href={link({ filter: "" })} className={!filter ? "is-active" : ""} prefetch={false}>All <span>{total.totalDocs}</span></Link>
          <Link href={link({ filter: "missing-alt" })} className={filter === "missing-alt" ? "is-active" : ""} prefetch={false}>Missing alt text <span>{missing.totalDocs}</span></Link>
        </div>
      </div>
      {docs.length === 0 ? (
        <div className="kr-card kr-empty-state"><ImageOff aria-hidden="true" strokeWidth={1.5} /><p>{q || filter ? "No images match." : "No images yet. Upload the first one."}</p></div>
      ) : (
        <ul className="kr-media-grid">
          {docs.map((doc) => (
            <li key={doc.id}>
              <Link href={`${BASE}/${doc.id}`} className="kr-media-tile" prefetch={false}>
                <span className="kr-media-tile__thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {doc.url && doc.mimeType?.startsWith("image/") ? <img src={doc.thumbnailURL || doc.url} alt="" loading="lazy" /> : <ImageOff aria-hidden="true" strokeWidth={1.5} />}
                </span>
                <span className="kr-media-tile__meta">
                  <span className="kr-media-tile__name">{doc.filename}</span>
                  <span className={doc.alt ? "kr-muted kr-small" : "kr-warning kr-small"}>
                    {doc.alt ? `${doc.width && doc.height ? `${doc.width} × ${doc.height} · ` : ""}${fileSize(doc.filesize || 0)}` : "Missing alt text"}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
