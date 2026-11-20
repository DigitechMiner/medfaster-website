import type { LivePreviewConfig, PayloadRequest } from "payload";
import { PAGE_REGISTRY } from "../content/pages";

// Live Preview: the admin editor shows the real page beside the form and
// refreshes it as you type (drafts autosave every second). The page opens
// through /api/preview, which turns on draft mode for signed-in editors only.

const PAGE_PATHS: Record<string, string> = Object.fromEntries(Object.values(PAGE_REGISTRY).map((page) => [page.slug, page.path]));

export const PREVIEW_GLOBALS = [...Object.values(PAGE_REGISTRY).map((page) => page.slug), "header-footer"];
export const PREVIEW_COLLECTIONS = ["pages"];

// Same origin as the admin panel, so the preview shares the editor's sign-in
function requestOrigin(req: PayloadRequest) {
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
  if (!host) return "";
  const proto = req.headers.get("x-forwarded-proto") || (/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host) ? "http" : "https");
  return `${proto}://${host}`;
}

export const livePreview: LivePreviewConfig = {
  url: ({ data, collectionConfig, globalConfig, req }) => {
    let path = "/";
    if (collectionConfig?.slug === "pages") path = data?.slug ? `/${String(data.slug)}` : "/";
    else if (globalConfig) path = PAGE_PATHS[globalConfig.slug] ?? "/";
    return `${requestOrigin(req)}/api/preview?path=${encodeURIComponent(path)}&live=1`;
  },
  breakpoints: [
    { label: "Phone", name: "phone", width: 390, height: 844 },
    { label: "Tablet", name: "tablet", width: 820, height: 1180 },
    { label: "Desktop", name: "desktop", width: 1440, height: 900 },
  ],
};
