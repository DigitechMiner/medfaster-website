import { getBlogPosts } from "@/lib/cms/content";
import { BlogView } from "./components/blog-view";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogView posts={posts} />;
}
