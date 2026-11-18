import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/seo/site";
import { getCustomPageList } from "@/lib/cms/pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/medical") ? 0.9 : 0.6,
  }));
  // Published custom pages that are not hidden from search engines
  const custom = (await getCustomPageList())
    .filter((page) => !page.noindex)
    .map((page) => ({ url: `${SITE_URL}/${page.slug}`, lastModified: page.updatedAt, changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...routes, ...custom];
}
