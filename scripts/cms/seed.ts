// Loads the website's current content into the CMS so editors start from what is live.
// Safe to re-run: existing entries are left alone unless --force is passed.
// Usage: npm run payload run scripts/cms/seed.ts [-- --force]
import path from "path";
import { getPayload } from "payload";
import config from "@payload-config";
import { SITE_DEFAULTS } from "../../content/site";
import { HEADER_FOOTER_DEFAULTS } from "../../content/header-footer";
import { PAGE_REGISTRY } from "../../content/pages";
import { JOBS } from "../../app/(frontend)/careers/components/constants";
import { SUPPORT_FAQS } from "../../utils/constant/faqs";
import { TESTIMONIALS as HOME_TESTIMONIALS } from "../../utils/constant";
import { TESTIMONIALS as PRO_TESTIMONIALS } from "../../lib/constants";
import { testimonials as ORG_TESTIMONIALS } from "../../utils/constant/landingPage";
import { PRIVACY_POLICY } from "../../lib/legal/privacy-policy";
import { TERMS_AND_CONDITIONS } from "../../lib/legal/terms";
import type { LegalDocumentData } from "../../lib/legal/types";

const force = process.argv.includes("--force");
const payload = await getPayload({ config });
const lines = (items: string[] = []) => items.map((text) => ({ text }));

async function isEmpty(collection: Parameters<typeof payload.count>[0]["collection"]) {
  const { totalDocs } = await payload.count({ collection, overrideAccess: true });
  return totalDocs === 0;
}

async function uploadImage(publicPath: string, alt: string) {
  const filename = path.basename(publicPath);
  const found = await payload.find({ collection: "media", where: { filename: { equals: filename.replace(/\.\w+$/, ".webp") } }, limit: 1 });
  if (found.docs[0]) return found.docs[0].id;
  const doc = await payload.create({ collection: "media", data: { alt }, filePath: path.resolve("public" + publicPath) });
  return doc.id;
}

// Site settings, header & footer and page content
for (const [slug, defaults] of [["site-settings", SITE_DEFAULTS], ["header-footer", HEADER_FOOTER_DEFAULTS], ...Object.values(PAGE_REGISTRY).map((p) => [p.slug, p.defaults])] as const) {
  const current = await payload.findGlobal({ slug: slug as "site-settings", depth: 0 });
  if (current?.updatedAt && !force) {
    console.log(`- ${slug}: already saved, skipped`);
    continue;
  }
  // Saving the defaults turns every field's default into stored content
  const toRows = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map((item) => (typeof item === "string" ? { text: item } : toRows(item)));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, typeof v === "string" && /(image|photo|logo|screenshot|avatar|portrait)$/i.test(k) ? undefined : toRows(v)]));
    return value;
  };
  await payload.updateGlobal({ slug: slug as "site-settings", data: toRows(defaults) as never });
  console.log(`✓ ${slug}`);
}

// Jobs
if (force || (await isEmpty("jobs"))) {
  for (const [index, job] of JOBS.entries()) {
    await payload.create({
      collection: "jobs",
      draft: false,
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
        postedAt: new Date(job.postedAt).toISOString(),
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
  console.log(`✓ jobs (${JOBS.length})`);
}

// FAQs
if (force || (await isEmpty("faqs"))) {
  for (const [index, faq] of SUPPORT_FAQS.entries()) {
    await payload.create({ collection: "faqs", data: { question: faq.question, answer: faq.answer, order: index, active: true } });
  }
  console.log(`✓ faqs (${SUPPORT_FAQS.length})`);
}

// Testimonials: the same quote can appear on several pages
if (force || (await isEmpty("testimonials"))) {
  type Entry = { name: string; role: string; rating: number; review: string; pages: ("home" | "professionals" | "organizations")[] };
  const byName = new Map<string, Entry>();
  const add = (page: Entry["pages"][number], t: { name: string; role: string; rating: number; review?: string; quote?: string }) => {
    const review = (t.review ?? t.quote ?? "").trim();
    const key = `${t.name}|${review}`;
    const entry = byName.get(key) ?? { name: t.name, role: t.role, rating: t.rating, review, pages: [] };
    if (!entry.pages.includes(page)) entry.pages.push(page);
    byName.set(key, entry);
  };
  HOME_TESTIMONIALS.forEach((t) => add("home", t));
  PRO_TESTIMONIALS.forEach((t) => add("professionals", t));
  ORG_TESTIMONIALS.forEach((t) => add("organizations", t));
  let order = 0;
  for (const entry of byName.values()) {
    await payload.create({ collection: "testimonials", data: { ...entry, active: true, order: order++ } });
  }
  console.log(`✓ testimonials (${byName.size})`);
}

// Team (photos are uploaded to the Media Library)
if (force || (await isEmpty("team-members"))) {
  const { TEAM } = await import("../../content/team");
  for (const [index, member] of TEAM.entries()) {
    const photo = member.image ? await uploadImage(member.image, member.name) : undefined;
    await payload.create({
      collection: "team-members",
      data: { name: member.name, role: member.role, department: member.category, photo, order: index, active: true, showOnAbout: member.showOnAbout },
    });
  }
  console.log(`✓ team (${TEAM.length})`);
}

// Legal pages
async function seedLegal(document: "privacy-policy" | "terms-conditions", data: LegalDocumentData) {
  const existing = await payload.find({ collection: "legal-documents", where: { document: { equals: document } }, limit: 1 });
  if (existing.docs[0] && !force) return console.log(`- ${document}: already saved, skipped`);
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
  if (existing.docs[0]) await payload.update({ collection: "legal-documents", id: existing.docs[0].id, data: body });
  else await payload.create({ collection: "legal-documents", data: body });
  console.log(`✓ ${document}`);
}
await seedLegal("privacy-policy", PRIVACY_POLICY);
await seedLegal("terms-conditions", TERMS_AND_CONDITIONS);

console.log("Seed complete.");
process.exit(0);
