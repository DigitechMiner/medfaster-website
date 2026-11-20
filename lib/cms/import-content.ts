// Copies the website's built-in content into the CMS so editors start from what is live.
// Used by the admin dashboard's "Import website content" button and by
// scripts/cms/seed.ts. Safe to re-run: anything already in the CMS is left
// alone unless `force` is set.
// Relative imports so the Payload CLI (plain Node ESM) can load this file too.
import { readFile } from "fs/promises";
import path from "path";
import type { Payload } from "payload";
import { SITE_DEFAULTS } from "../../content/site";
import { HEADER_FOOTER_DEFAULTS } from "../../content/header-footer";
import { PAGE_REGISTRY } from "../../content/pages";
import { TEAM } from "../../content/team";
import { JOBS } from "../../app/(frontend)/careers/components/constants";
import { SUPPORT_FAQS } from "../../utils/constant/faqs";
import { TESTIMONIALS as HOME_TESTIMONIALS } from "../../utils/constant";
import { TESTIMONIALS as PRO_TESTIMONIALS } from "../../lib/constants";
import { testimonials as ORG_TESTIMONIALS } from "../../utils/constant/landingPage";
import { PRIVACY_POLICY } from "../legal/privacy-policy";
import { TERMS_AND_CONDITIONS } from "../legal/terms";
import type { LegalDocumentData } from "../legal/types";

type CollectionSlug = Parameters<Payload["count"]>[0]["collection"];
type GlobalSlug = Parameters<Payload["findGlobal"]>[0]["slug"];

export type ImportOptions = {
  force?: boolean;
  // Site address to download images from when the files are not on disk (e.g. on Vercel)
  origin?: string;
};

export type ImportResult = { imported: string[]; skipped: string[] };

const lines = (items: string[] = []) => items.map((text) => ({ text }));

// "Nov 18, 2026" as midday UTC, so the date reads the same in every timezone
function calendarDate(text: string) {
  const parsed = new Date(text);
  return new Date(Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate(), 12)).toISOString();
}

const MIME: Record<string, string> = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml" };

// Built-in content collections: they count as "imported" once they hold anything
export const IMPORTABLE_COLLECTIONS: CollectionSlug[] = ["jobs", "faqs", "testimonials", "team-members", "legal-documents"];

// What the import would still add: empty content collections and pages never saved.
// Empty means nothing is shown to admins.
export async function missingContent(payload: Payload): Promise<string[]> {
  const missing: string[] = [];
  for (const collection of IMPORTABLE_COLLECTIONS) {
    const { totalDocs } = await payload.count({ collection, overrideAccess: true });
    if (totalDocs === 0) missing.push(collection);
  }
  const globals = ["site-settings", "header-footer", ...Object.values(PAGE_REGISTRY).map((page) => page.slug)];
  for (const slug of globals) {
    const doc = await payload.findGlobal({ slug: slug as GlobalSlug, depth: 0, overrideAccess: true });
    if (!(doc as { updatedAt?: string } | null)?.updatedAt) missing.push(slug);
  }
  return missing;
}

export async function needsImport(payload: Payload): Promise<boolean> {
  return (await missingContent(payload)).length > 0;
}

export async function importWebsiteContent(payload: Payload, { force = false, origin }: ImportOptions = {}): Promise<ImportResult> {
  const result: ImportResult = { imported: [], skipped: [] };

  const isEmpty = async (collection: CollectionSlug) =>
    (await payload.count({ collection, overrideAccess: true })).totalDocs === 0;

  async function loadFile(publicPath: string): Promise<Buffer> {
    try {
      return await readFile(path.resolve("public" + publicPath));
    } catch {
      if (!origin) throw new Error(`Image not found: ${publicPath}`);
      const response = await fetch(new URL(publicPath, origin));
      if (!response.ok) throw new Error(`Could not download ${publicPath} (${response.status})`);
      return Buffer.from(await response.arrayBuffer());
    }
  }

  async function uploadImage(publicPath: string, alt: string) {
    const name = path.basename(publicPath);
    // Reuse an earlier upload, including copies the storage renamed (kevin-1.webp)
    const base = name.replace(/\.\w+$/, "");
    const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const sameImage = new RegExp(`^${escaped}(-\\d+)?\\.\\w+$`, "i");
    const found = await payload.find({
      collection: "media",
      where: { filename: { like: base } },
      limit: 50,
      depth: 0,
      overrideAccess: true,
    });
    const existing = found.docs.find((doc) => doc.filename && sameImage.test(doc.filename));
    if (existing) return existing.id;
    const data = await loadFile(publicPath);
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      file: { data, name, size: data.length, mimetype: MIME[path.extname(name).toLowerCase()] ?? "application/octet-stream" },
      overrideAccess: true,
    });
    return doc.id;
  }

  // Site settings, header & footer and page content
  const globals: [string, unknown][] = [
    ["site-settings", SITE_DEFAULTS],
    ["header-footer", HEADER_FOOTER_DEFAULTS],
    ...Object.values(PAGE_REGISTRY).map((page) => [page.slug, page.defaults] as [string, unknown]),
  ];
  for (const [slug, defaults] of globals) {
    const current = await payload.findGlobal({ slug: slug as GlobalSlug, depth: 0, overrideAccess: true });
    if ((current as { updatedAt?: string } | null)?.updatedAt && !force) {
      result.skipped.push(slug);
      continue;
    }
    // Saving the defaults turns every field's default into stored content.
    // Built-in image paths are left out: the site keeps using them until an image is uploaded.
    const toRows = (value: unknown): unknown => {
      if (Array.isArray(value)) return value.map((item) => (typeof item === "string" ? { text: item } : toRows(item)));
      if (value && typeof value === "object")
        return Object.fromEntries(
          Object.entries(value).map(([k, v]) => [k, typeof v === "string" && /(image|photo|logo|screenshot|avatar|portrait)$/i.test(k) ? undefined : toRows(v)])
        );
      return value;
    };
    // Published straight away (pages and the header/footer have drafts)
    await payload.updateGlobal({ slug: slug as GlobalSlug, data: { ...(toRows(defaults) as object), _status: "published" } as never, draft: false, overrideAccess: true });
    result.imported.push(slug);
  }

  // Jobs
  if (force || (await isEmpty("jobs"))) {
    for (const [index, job] of JOBS.entries()) {
      await payload.create({
        collection: "jobs",
        draft: false,
        overrideAccess: true,
        data: {
          _status: "published",
          title: job.title,
          slug: job.slug,
          order: index,
          company: job.company,
          location: job.location,
          type: job.type,
          mode: job.mode,
          experience: job.experience,
          salary: job.salary,
          postedAt: calendarDate(job.postedAt),
          applyUrl: job.applyUrl,
          details: job.details && {
            summary: lines(job.details.summary),
            whyJoin: lines(job.details.whyJoin),
            whyKeRaevaIntro: job.details.whyKeRaevaIntro,
            whyKeRaeva: lines(job.details.whyKeRaeva),
            documents: lines(job.details.documents),
            skills: lines(job.details.skills),
            howToApply: lines(job.details.howToApply),
          },
        },
      });
    }
    result.imported.push(`jobs (${JOBS.length})`);
  } else result.skipped.push("jobs");

  // FAQs
  if (force || (await isEmpty("faqs"))) {
    for (const [index, faq] of SUPPORT_FAQS.entries()) {
      await payload.create({ collection: "faqs", overrideAccess: true, data: { question: faq.question, answer: faq.answer, order: index, active: true } });
    }
    result.imported.push(`faqs (${SUPPORT_FAQS.length})`);
  } else result.skipped.push("faqs");

  // Testimonials: the same quote can appear on several pages
  if (force || (await isEmpty("testimonials"))) {
    type Page = "home" | "professionals" | "organizations";
    type Entry = { name: string; role: string; rating: number; review: string; pages: Page[] };
    const byQuote = new Map<string, Entry>();
    const add = (page: Page, t: { name: string; role: string; rating: number; review?: string; quote?: string }) => {
      const review = (t.review ?? t.quote ?? "").trim();
      const key = `${t.name}|${review}`;
      const entry = byQuote.get(key) ?? { name: t.name, role: t.role, rating: t.rating, review, pages: [] };
      if (!entry.pages.includes(page)) entry.pages.push(page);
      byQuote.set(key, entry);
    };
    HOME_TESTIMONIALS.forEach((t) => add("home", t));
    PRO_TESTIMONIALS.forEach((t) => add("professionals", t));
    ORG_TESTIMONIALS.forEach((t) => add("organizations", t));
    let order = 0;
    for (const entry of byQuote.values()) {
      await payload.create({ collection: "testimonials", overrideAccess: true, data: { ...entry, active: true, order: order++ } });
    }
    result.imported.push(`testimonials (${byQuote.size})`);
  } else result.skipped.push("testimonials");

  // Legal pages
  async function importLegal(document: "privacy-policy" | "terms-conditions", data: LegalDocumentData) {
    const existing = await payload.find({ collection: "legal-documents", where: { document: { equals: document } }, limit: 1, overrideAccess: true });
    if (existing.docs[0] && !force) return result.skipped.push(document);
    const body = {
      document,
      title: data.title,
      effectiveDate: data.effectiveDate,
      lastUpdated: data.lastUpdated,
      summary: data.summary,
      parts: data.parts.map((part) => ({
        title: part.title,
        intro: part.intro,
        sections: part.sections.map((section) => ({ anchor: section.id, title: section.title, content: section.content })),
      })),
    };
    if (existing.docs[0]) await payload.update({ collection: "legal-documents", id: existing.docs[0].id, data: body, overrideAccess: true });
    else await payload.create({ collection: "legal-documents", data: body, overrideAccess: true });
    result.imported.push(document);
  }
  await importLegal("privacy-policy", PRIVACY_POLICY);
  await importLegal("terms-conditions", TERMS_AND_CONDITIONS);

  // Team last: its photos are uploaded, the slowest step and the only one that needs file storage
  if (force || (await isEmpty("team-members"))) {
    for (const [index, member] of TEAM.entries()) {
      const photo = member.image ? await uploadImage(member.image, member.name) : undefined;
      await payload.create({
        collection: "team-members",
        overrideAccess: true,
        data: { name: member.name, role: member.role, department: member.category, photo, order: index, active: true, showOnAbout: member.showOnAbout },
      });
    }
    result.imported.push(`team (${TEAM.length})`);
  } else result.skipped.push("team");


  return result;
}
