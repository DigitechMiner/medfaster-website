// Loaders that feed the public pages from the admin panel.
// Each falls back to the content built into the site when the CMS is not
// configured, unreachable, or the collection has never been filled in,
// so the website always renders complete pages.
import { cache } from "react";
import type { Payload } from "payload";
import type { Job } from "@/app/(frontend)/careers/components/job-card";
import { JOBS } from "@/app/(frontend)/careers/components/constants";
import type { BlogPost } from "@/app/(frontend)/blog/constants";
import { SUPPORT_FAQS } from "@/utils/constant/faqs";
import { TESTIMONIALS as HOME_TESTIMONIALS } from "@/utils/constant";
import { TESTIMONIALS as PRO_TESTIMONIALS } from "@/lib/constants";
import { testimonials as ORG_TESTIMONIALS } from "@/utils/constant/landingPage";
import { PRIVACY_POLICY } from "@/lib/legal/privacy-policy";
import { TERMS_AND_CONDITIONS } from "@/lib/legal/terms";
import type { LegalDocumentData } from "@/lib/legal/types";
import { PAGE_REGISTRY } from "@/content/pages";
import type { Post } from "@/payload-types";
import { fromCms, isPreview } from "./payload";
import { mediaUrl, mergeContent } from "./merge";

type CollectionSlug = Parameters<Payload["count"]>[0]["collection"];

// True once editors have added anything (drafts and hidden items included),
// so hiding or unpublishing every item really empties the section
async function hasEntries(payload: Payload, collection: CollectionSlug) {
  const { totalDocs } = await payload.count({ collection, overrideAccess: true });
  return totalDocs > 0;
}

const lines = (rows?: { text?: string | null }[] | null) =>
  (rows ?? []).map((row) => row.text ?? "").filter((text) => text.trim() !== "");

const shortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

// Careers

export const getJobs = cache(
  async (): Promise<Job[]> =>
    fromCms(JOBS, async (payload) => {
      if (!(await hasEntries(payload, "jobs"))) return JOBS;
      const result = await payload.find({
        collection: "jobs",
        where: { _status: { equals: "published" } },
        sort: "order",
        depth: 0,
        limit: 100,
      });
      return result.docs.map((doc) => ({
        id: doc.id,
        slug: doc.slug,
        title: doc.title,
        company: doc.company,
        location: doc.location,
        type: doc.type,
        mode: doc.mode,
        salary: doc.salary || undefined,
        experience: doc.experience,
        postedAt: shortDate(doc.postedAt),
        applyUrl: doc.applyUrl || undefined,
        details: lines(doc.details?.summary).length
          ? {
              summary: lines(doc.details?.summary),
              whyJoin: lines(doc.details?.whyJoin),
              whyKeRaevaIntro: doc.details?.whyKeRaevaIntro ?? "",
              whyKeRaeva: lines(doc.details?.whyKeRaeva),
              documents: lines(doc.details?.documents),
              skills: lines(doc.details?.skills),
              howToApply: lines(doc.details?.howToApply),
            }
          : undefined,
      }));
    })
);

export async function getJob(slug: string) {
  return (await getJobs()).find((job) => job.slug === slug);
}

// Support FAQs

export type FaqItem = { question: string; answer: string };

export const getFaqs = cache(
  async (): Promise<FaqItem[]> =>
    fromCms(SUPPORT_FAQS, async (payload) => {
      if (!(await hasEntries(payload, "faqs"))) return SUPPORT_FAQS;
      const result = await payload.find({ collection: "faqs", where: { active: { equals: true } }, sort: "order", depth: 0, limit: 200 });
      return result.docs.map((doc) => ({ question: doc.question, answer: doc.answer }));
    })
);

// Testimonials, per page

export type TestimonialItem = { id: number | string; name: string; role: string; review: string; rating: number };
export type TestimonialPage = "home" | "professionals" | "organizations";

const TESTIMONIAL_DEFAULTS: Record<TestimonialPage, TestimonialItem[]> = {
  home: HOME_TESTIMONIALS.map(({ id, name, role, review, rating }) => ({ id, name, role, review, rating })),
  professionals: PRO_TESTIMONIALS.map(({ id, name, role, review, rating }) => ({ id, name, role, review, rating })),
  organizations: ORG_TESTIMONIALS.map(({ name, role, quote, rating }, index) => ({ id: index + 1, name, role, review: quote, rating })),
};

export const getTestimonials = cache(
  async (page: TestimonialPage): Promise<TestimonialItem[]> =>
    fromCms(TESTIMONIAL_DEFAULTS[page], async (payload) => {
      if (!(await hasEntries(payload, "testimonials"))) return TESTIMONIAL_DEFAULTS[page];
      const result = await payload.find({
        collection: "testimonials",
        where: { and: [{ active: { equals: true } }, { pages: { contains: page } }] },
        sort: "order",
        depth: 0,
        limit: 50,
      });
      return result.docs.map((doc) => ({ id: doc.id, name: doc.name, role: doc.role, review: doc.review, rating: doc.rating ?? 5 }));
    })
);

// Legal pages

const LEGAL_DEFAULTS = { "privacy-policy": PRIVACY_POLICY, "terms-conditions": TERMS_AND_CONDITIONS } as const;

export const getLegalDocument = cache(
  async (document: keyof typeof LEGAL_DEFAULTS): Promise<LegalDocumentData> =>
    fromCms<LegalDocumentData>(LEGAL_DEFAULTS[document], async (payload) => {
      const result = await payload.find({ collection: "legal-documents", where: { document: { equals: document } }, depth: 0, limit: 1 });
      const doc = result.docs[0];
      if (!doc) return LEGAL_DEFAULTS[document];
      return {
        title: doc.title,
        effectiveDate: doc.effectiveDate,
        lastUpdated: doc.lastUpdated,
        summary: doc.summary || undefined,
        parts: (doc.parts ?? []).map((part) => ({
          title: part.title || undefined,
          intro: part.intro || undefined,
          sections: (part.sections ?? []).map((section) => ({ id: section.anchor, title: section.title, content: section.content })),
        })),
      };
    })
);

// Blog

export type BlogArticle = BlogPost & { content: Post["content"] };

function toBlogPost(doc: Post): BlogArticle {
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    author: doc.author,
    date: shortDate(doc.publishedDate),
    publishedDate: doc.publishedDate,
    excerpt: doc.excerpt,
    image: mediaUrl(doc.coverImage) ?? "",
    tags: lines(doc.tags),
    featured: Boolean(doc.featured),
    content: doc.content,
  };
}

export const getBlogPosts = cache(
  async (): Promise<BlogPost[]> =>
    fromCms<BlogPost[]>([], async (payload) => {
      const result = await payload.find({
        collection: "posts",
        where: { _status: { equals: "published" } },
        sort: "-publishedDate",
        depth: 1,
        limit: 200,
      });
      // The list does not need the article bodies
      return result.docs.map((doc) => {
        const post: Partial<BlogArticle> = toBlogPost(doc);
        delete post.content;
        return post as BlogPost;
      });
    })
);

export const getBlogPost = cache(
  async (slug: string): Promise<BlogArticle | null> =>
    fromCms<BlogArticle | null>(null, async (payload) => {
      const result = await payload.find({
        collection: "posts",
        where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
        depth: 1,
        limit: 1,
      });
      return result.docs[0] ? toBlogPost(result.docs[0]) : null;
    })
);

// Page text and images (Pages → Home, …)

type PageKey = keyof typeof PAGE_REGISTRY;
type PageContent<K extends PageKey> = (typeof PAGE_REGISTRY)[K]["defaults"];

export const getPageContent = cache(
  async <K extends PageKey>(key: K): Promise<PageContent<K>> => {
    const page = PAGE_REGISTRY[key];
    const defaults = page.defaults as PageContent<K>;
    return fromCms(defaults, async (payload) => {
      const doc = await payload.findGlobal({ slug: page.slug as Parameters<Payload["findGlobal"]>[0]["slug"], depth: 1, draft: await isPreview() });
      return mergeContent(defaults, doc, Boolean((doc as { updatedAt?: string } | null)?.updatedAt));
    });
  }
);
