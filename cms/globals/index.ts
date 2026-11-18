import type { GlobalConfig } from "payload";
import { SITE_DEFAULTS } from "../../content/site";
import { PAGE_REGISTRY } from "../../content/pages";
import { buildGlobal } from "./build-global";

export const SiteSettings = buildGlobal({
  slug: "site-settings",
  label: "Site Settings",
  group: "Settings",
  description: "Contact details, app and recruiter links, social profiles and page switches used across the whole site.",
  defaults: SITE_DEFAULTS as unknown as Record<string, Record<string, unknown>>,
});

export const PageGlobals: GlobalConfig[] = Object.values(PAGE_REGISTRY).map((page) =>
  buildGlobal({
    slug: page.slug,
    label: page.label,
    group: "Pages",
    description: page.description,
    defaults: page.defaults as unknown as Record<string, Record<string, unknown>>,
  })
);
