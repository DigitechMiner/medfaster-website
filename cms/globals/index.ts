import type { GlobalConfig } from "payload";
import { SITE_DEFAULTS } from "../../content/site";
import { HEADER_FOOTER_DEFAULTS } from "../../content/header-footer";
import { TRACKING_DEFAULTS } from "../../content/tracking";
import { PAGE_REGISTRY } from "../../content/pages";
import { buildGlobal } from "./build-global";

export const SiteSettings = buildGlobal({
  slug: "site-settings",
  label: "Site Settings",
  group: "Settings",
  description: "Contact details, app and recruiter links, social profiles and page switches used across the whole site.",
  defaults: SITE_DEFAULTS as unknown as Record<string, Record<string, unknown>>,
});

export const HeaderFooterGlobal = buildGlobal({
  slug: "header-footer",
  label: "Header & Footer",
  group: "Pages",
  description: "Menus, buttons and footer content shown on every page of the website.",
  defaults: HEADER_FOOTER_DEFAULTS as unknown as Record<string, Record<string, unknown>>,
});

export const TrackingGlobal = buildGlobal({
  slug: "tracking",
  label: "Tracking & Analytics",
  group: "Settings",
  description: "Google Tag Manager, Google Analytics and Meta Pixel codes, and the cookie banner. Numbers are on the Analytics page.",
  defaults: TRACKING_DEFAULTS as unknown as Record<string, Record<string, unknown>>,
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
