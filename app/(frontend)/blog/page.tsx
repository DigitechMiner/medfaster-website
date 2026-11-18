import type { Metadata } from "next";
import { getBlogPosts, getPageContent } from "@/lib/cms/content";
import { stripAccents } from "@/components/ui/accent-text";
import { BlogView } from "./components/blog-view";

// Text comes from the admin panel (Pages → Blog); articles from Content → Blog Posts
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("blog");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function BlogPage() {
  const [content, posts] = await Promise.all([getPageContent("blog"), getBlogPosts()]);
  return <BlogView posts={posts} content={content} />;
}
