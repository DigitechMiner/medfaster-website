import { cache } from "react";
import { SITE_DEFAULTS, type SiteSettings } from "@/content/site";
import { mergeContent } from "./merge";
import { fromCms } from "./payload";

export const getSiteSettings = cache(
  async (): Promise<SiteSettings> =>
    fromCms(SITE_DEFAULTS, async (payload) => {
      const doc = await payload.findGlobal({ slug: "site-settings", depth: 0 });
      return mergeContent(SITE_DEFAULTS, doc, Boolean(doc?.updatedAt));
    })
);

export { telHref } from "@/lib/links";
