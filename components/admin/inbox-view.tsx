import Link from "next/link";
import { CheckCircle2, Clock, Inbox, Mail, Phone, Search } from "lucide-react";
import type { ListViewServerProps, Where } from "payload";
import { Avatar, Badge, PageHeader } from "./ui";
import { dateTime, initials, relativeTime, SUBMISSION_STATUS, SUBMISSION_TYPES } from "./format";
import { InboxActions, StatusSelect } from "./inbox-actions";
import { adminUrl } from "./paths";

type Submission = {
  id: string | number;
  type: string;
  status: string;
  summary?: string | null;
  name?: string | null;
  email?: string | null;
  fields?: Record<string, unknown> | null;
  source?: string | null;
  forwarded?: boolean | null;
  notes?: string | null;
  createdAt: string;
};

const BASE = adminUrl("/collections/form-submissions");
const LONG_FIELDS = ["message", "description"];
const HIDDEN_FIELDS = ["name", "email", "website", "type", "source", ...LONG_FIELDS];

function param(searchParams: Record<string, unknown> | undefined, key: string) {
  const value = searchParams?.[key];
  return typeof value === "string" ? value : Array.isArray(value) ? String(value[0]) : "";
}

const label = (key: string) => key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

// Inbox: filters, message list and the open submission, replacing the default list view
export async function InboxView({ payload, user, searchParams }: ListViewServerProps) {
  const sp = searchParams as Record<string, unknown> | undefined;
  const status = param(sp, "status");
  const type = param(sp, "type");
  const q = param(sp, "q");
  const selectedId = param(sp, "id");
  const as = { user, overrideAccess: false } as const;

  const href = (next: Record<string, string>) => {
    const merged = { status, type, q, ...next };
    const query = new URLSearchParams(Object.entries(merged).filter(([, v]) => v));
    const str = query.toString();
    return str ? `${BASE}?${str}` : BASE;
  };

  const and: Where[] = [];
  if (status) and.push({ status: { equals: status } });
  else and.push({ status: { not_equals: "spam" } });
  if (type) and.push({ type: { equals: type } });
  if (q) and.push({ or: [{ name: { like: q } }, { email: { like: q } }, { summary: { like: q } }] });

  const [list, statusCounts, typeCounts] = await Promise.all([
    payload.find({ collection: "form-submissions", where: { and }, sort: "-createdAt", limit: 50, depth: 0, ...as }),
    Promise.all(Object.keys(SUBMISSION_STATUS).map(async (s) => [s, (await payload.count({ collection: "form-submissions", where: { status: { equals: s } }, ...as })).totalDocs] as const)),
    Promise.all(Object.keys(SUBMISSION_TYPES).map(async (t) => [t, (await payload.count({ collection: "form-submissions", where: { and: [{ type: { equals: t } }, { status: { not_equals: "spam" } }] }, ...as })).totalDocs] as const)),
  ]);
  const docs = list.docs as unknown as Submission[];
  const allCount = statusCounts.filter(([s]) => s !== "spam").reduce((sum, [, n]) => sum + n, 0);

  let selected: Submission | undefined = docs.find((d) => String(d.id) === selectedId);
  if (!selected && selectedId) {
    try { selected = (await payload.findByID({ collection: "form-submissions", id: selectedId, depth: 0, ...as })) as unknown as Submission; } catch { /* not found */ }
  }
  selected ??= docs[0];

  const fields = (selected?.fields ?? {}) as Record<string, unknown>;
  const facts = Object.entries(fields).filter(([k, v]) => !HIDDEN_FIELDS.includes(k) && v !== "" && v != null && typeof v !== "object");
  const bodyField = LONG_FIELDS.find((k) => typeof fields[k] === "string" && fields[k]);

  return (
    <div className="kr-view kr-view--fill">
      <PageHeader title="Inbox" subtitle="Every Contact, Support, Request a Demo and newsletter form from the website lands here." />
      <div className="kr-card kr-inbox">
        <nav className="kr-inbox__filters" aria-label="Filter submissions">
          <div className="kr-overline">Status</div>
          <Link className={`kr-filter${!status ? " is-active" : ""}`} href={href({ status: "", id: "" })} prefetch={false}><span>All</span><span>{allCount}</span></Link>
          {statusCounts.map(([s, n]) => (
            <Link key={s} className={`kr-filter${status === s ? " is-active" : ""}`} href={href({ status: s, id: "" })} prefetch={false}><span>{SUBMISSION_STATUS[s].label}</span><span>{n}</span></Link>
          ))}
          <div className="kr-overline kr-overline--spaced">Form</div>
          {typeCounts.map(([t, n]) => (
            <Link key={t} className={`kr-filter${type === t ? " is-active" : ""}`} href={href({ type: type === t ? "" : t, id: "" })} prefetch={false}>
              <span><i className={`kr-dot kr-dot--${SUBMISSION_TYPES[t].tone}`} aria-hidden="true" />{SUBMISSION_TYPES[t].label}</span><span>{n}</span>
            </Link>
          ))}
        </nav>

        <div className="kr-inbox__list">
          <form className="kr-inbox__search" action={BASE} method="get" role="search">
            <Search aria-hidden="true" strokeWidth={1.75} />
            {status ? <input type="hidden" name="status" value={status} /> : null}
            {type ? <input type="hidden" name="type" value={type} /> : null}
            <input type="search" name="q" defaultValue={q} placeholder="Search name, email or message" aria-label="Search submissions" />
          </form>
          {docs.length === 0 ? (
            <div className="kr-inbox__empty"><Inbox aria-hidden="true" strokeWidth={1.5} /><p>Nothing here yet.</p></div>
          ) : (
            <ul>
              {docs.map((doc) => {
                const t = SUBMISSION_TYPES[doc.type] ?? { label: doc.type, tone: "neutral" };
                const active = selected && String(selected.id) === String(doc.id);
                return (
                  <li key={doc.id}>
                    <Link href={href({ id: String(doc.id) })} className={`kr-message${active ? " is-active" : ""}${doc.status === "new" ? " is-new" : ""}`} prefetch={false} scroll={false}>
                      <Avatar text={initials(doc.name || doc.email)} />
                      <div className="kr-message__text">
                        <div className="kr-message__line"><span className="kr-message__name">{doc.name || doc.email}</span><span className="kr-message__time">{relativeTime(doc.createdAt)}</span></div>
                        <Badge tone={t.tone}>{t.label}</Badge>
                        <span className="kr-message__preview">{doc.summary || doc.email}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <article className="kr-inbox__detail">
          {!selected ? (
            <div className="kr-inbox__empty"><CheckCircle2 aria-hidden="true" strokeWidth={1.5} /><p>Select a message to read it.</p></div>
          ) : (
            <>
              <header className="kr-detail__head">
                <Avatar text={initials(selected.name || selected.email)} size="lg" />
                <div className="kr-detail__who">
                  <div className="kr-row__line">
                    <h2>{selected.name || selected.email}</h2>
                    <Badge tone={(SUBMISSION_TYPES[selected.type] ?? { tone: "neutral" }).tone}>{(SUBMISSION_TYPES[selected.type] ?? { label: selected.type }).label}</Badge>
                  </div>
                  <div className="kr-detail__contact">
                    {selected.email ? <a href={`mailto:${selected.email}`}><Mail aria-hidden="true" strokeWidth={1.75} />{selected.email}</a> : null}
                    {typeof fields.phone === "string" && fields.phone ? <a href={`tel:${fields.phone.replace(/[^\d+]/g, "")}`}><Phone aria-hidden="true" strokeWidth={1.75} />{fields.phone}</a> : null}
                    <span><Clock aria-hidden="true" strokeWidth={1.75} />{dateTime(selected.createdAt)}</span>
                  </div>
                </div>
                <StatusSelect key={`${selected.id}-${selected.status}`} id={selected.id} status={selected.status} />
              </header>
              {facts.filter(([k]) => k !== "phone").length > 0 ? (
                <dl className="kr-facts">
                  {facts.filter(([k]) => k !== "phone").map(([k, v]) => (
                    <div key={k}><dt>{label(k)}</dt><dd>{String(v)}</dd></div>
                  ))}
                </dl>
              ) : null}
              {bodyField ? (
                <section className="kr-detail__body">
                  <div className="kr-overline">{bodyField === "description" ? "Description" : "Message"}</div>
                  <p>{String(fields[bodyField])}</p>
                </section>
              ) : null}
              <p className="kr-muted kr-small">
                Sent from {selected.source || "the website"}{selected.forwarded ? " · also forwarded to the team webhook" : ""}
              </p>
              <InboxActions key={selected.id} id={selected.id} status={selected.status} notes={selected.notes || ""} email={selected.email} name={selected.name} />
            </>
          )}
        </article>
      </div>
    </div>
  );
}
