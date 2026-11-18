import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/seo/site";
import { getCustomPageList } from "@/lib/cms/pages";
import { getBlogPosts, getJobs } from "@/lib/cms/content";

// Refreshed hourly so new articles and openings are listed without a redeploy
export const revalidate = 3600;

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
  // Published blog articles and job openings with their own page
  const [posts, jobs] = await Promise.all([getBlogPosts(), getJobs()]);
  const articles = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  const listedRoutes = new Set(routes.map((route) => route.url));
  const openings = jobs
    .filter((job) => job.details && !listedRoutes.has(`${SITE_URL}/careers/${job.slug}`))
    .map((job) => ({ url: `${SITE_URL}/careers/${job.slug}`, changeFrequency: "weekly" as const, priority: 0.6 }));
  return [...routes, ...custom, ...articles, ...openings];
}
