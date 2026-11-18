import Link from "next/link";
import type { ServerProps } from "payload";
import { adminUrl } from "./paths";

type Props = ServerProps & { collectionSlug?: string; collectionConfig?: { slug: string } };

// All / Published / Drafts tabs above the Job Openings and Blog Posts lists
export async function StatusTabs(props: Props) {
  const { payload, user, searchParams } = props;
  const slug = (props.collectionSlug || props.collectionConfig?.slug) as "jobs" | "posts";
  if (!slug) return null;
  const sp = (searchParams ?? {}) as Record<string, unknown>;
  const where = sp.where as Record<string, Record<string, string>> | undefined;
  const current = (where?._status?.equals ?? sp["where[_status][equals]"] ?? "") as string;
  const as = { user, overrideAccess: false } as const;
  const [all, published, draft] = await Promise.all([
    payload.count({ collection: slug, ...as }),
    payload.count({ collection: slug, where: { _status: { equals: "published" } }, ...as }),
    payload.count({ collection: slug, where: { _status: { equals: "draft" } }, ...as }),
  ]);
  const base = adminUrl(`/collections/${slug}`);
  const tabs = [
    ["All", "", all.totalDocs],
    ["Published", "published", published.totalDocs],
    ["Drafts", "draft", draft.totalDocs],
  ] as const;
  return (
    <div className="kr-segmented kr-status-tabs" role="group" aria-label="Filter by status">
      {tabs.map(([label, value, count]) => (
        <Link key={label} href={value ? `${base}?where[_status][equals]=${value}` : base} className={current === value ? "is-active" : ""} prefetch={false}>
          {label} <span>{count}</span>
        </Link>
      ))}
    </div>
  );
}
