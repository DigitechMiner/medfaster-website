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

// Digits for tel: links, assuming North American numbers
export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? "1" + digits : digits}`;
}
