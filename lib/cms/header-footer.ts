import { cache } from "react";
import { HEADER_FOOTER_DEFAULTS, type HeaderFooter } from "@/content/header-footer";
import { mergeContent } from "./merge";
import { fromCms } from "./payload";

// Header and footer content, plus a "More" footer column for custom pages
// marked "Show in footer links"
export const getHeaderFooter = cache(
  async (): Promise<HeaderFooter> =>
    fromCms(HEADER_FOOTER_DEFAULTS, async (payload) => {
      const doc = await payload.findGlobal({ slug: "header-footer", depth: 0 });
      const content = mergeContent(HEADER_FOOTER_DEFAULTS, doc, Boolean(doc?.updatedAt));
      try {
        const pages = await payload.find({
          collection: "pages",
          where: { and: [{ _status: { equals: "published" } }, { showInFooter: { equals: true } }] },
          sort: "title",
          limit: 12,
          depth: 0,
          select: { title: true, slug: true },
        });
        if (pages.docs.length > 0) {
          content.footer.columns = [
            ...content.footer.columns,
            { title: "More", links: pages.docs.map((p) => ({ label: String(p.title), link: `/${p.slug}` })) },
          ];
        }
      } catch {
        // custom pages are optional
      }
      return content;
    })
);
