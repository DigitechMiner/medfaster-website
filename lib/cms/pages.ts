import { cache } from "react";
import type { Page } from "@/payload-types";
import type { Job } from "@/app/(frontend)/careers/components/job-card";
import { JOBS } from "@/app/(frontend)/careers/components/constants";
import { TESTIMONIALS } from "@/utils/constant";
import { RESERVED_SLUGS } from "@/cms/collections/Pages";
import { fromCms } from "./payload";

export type CustomPage = Page;
export type PageSection = NonNullable<Page["sections"]>[number];
export type SectionOf<T extends PageSection["blockType"]> = Extract<PageSection, { blockType: T }>;
export type QuoteItem = { name: string; role: string; review: string; rating: number };

// A published custom page, or the latest draft when previewing from the admin panel
export const getCustomPage = cache(
  async (slug: string, draft = false): Promise<CustomPage | null> => {
    if (RESERVED_SLUGS.includes(slug)) return null;
    return fromCms(null, async (payload) => {
      const result = await payload.find({
        collection: "pages",
        where: draft ? { slug: { equals: slug } } : { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
        draft,
        overrideAccess: draft,
        depth: 1,
        limit: 1,
      });
      return (result.docs[0] as CustomPage | undefined) ?? null;
    });
  }
);

// Published custom pages, for static generation and the sitemap
export const getCustomPageList = cache(
  async (): Promise<{ slug: string; updatedAt: string; noindex: boolean }[]> =>
    fromCms([], async (payload) => {
      const result = await payload.find({
        collection: "pages",
        where: { _status: { equals: "published" } },
        depth: 0,
        limit: 200,
        select: { slug: true, updatedAt: true, seo: true },
      });
      return result.docs
        .filter((doc) => doc.slug && !RESERVED_SLUGS.includes(doc.slug))
        .map((doc) => ({ slug: doc.slug, updatedAt: doc.updatedAt, noindex: Boolean(doc.seo?.noindex) }));
    })
);

const lines = (rows?: { text: string }[] | null) => (rows ?? []).map((row) => row.text);

const fallbackQuotes: QuoteItem[] = TESTIMONIALS.map(({ name, role, review, rating }) => ({ name, role, review, rating }));

// Visible testimonials from the CMS, or the site's built-in ones
export const getQuotes = cache(
  async (): Promise<QuoteItem[]> =>
    fromCms(fallbackQuotes, async (payload) => {
      const result = await payload.find({ collection: "testimonials", where: { active: { equals: true } }, sort: "order", depth: 0, limit: 24 });
      if (result.docs.length === 0) return fallbackQuotes;
      return result.docs.map((doc) => ({ name: doc.name, role: doc.role, review: doc.review, rating: doc.rating ?? 5 }));
    })
);

// Published job openings from the CMS, or the built-in Careers list
export const getOpenJobs = cache(
  async (): Promise<Job[]> =>
    fromCms(JOBS, async (payload) => {
      const result = await payload.find({ collection: "jobs", where: { _status: { equals: "published" } }, sort: "order", depth: 0, limit: 50 });
      if (result.docs.length === 0) return JOBS;
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
        postedAt: new Date(doc.postedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        applyUrl: doc.applyUrl || undefined,
        details: doc.details?.summary?.length
          ? {
              summary: lines(doc.details.summary),
              whyJoin: lines(doc.details.whyJoin),
              whyKeRaevaIntro: doc.details.whyKeRaevaIntro ?? "",
              whyKeRaeva: lines(doc.details.whyKeRaeva),
              documents: lines(doc.details.documents),
              skills: lines(doc.details.skills),
              howToApply: lines(doc.details.howToApply),
            }
          : undefined,
      }));
    })
);
