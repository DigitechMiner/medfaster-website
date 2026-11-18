export interface BlogPost {
  id: number;
  // URL segment for the article page under /blog
  slug: string;
  title: string;
  author: string;
  date: string;
  // ISO date, for structured data
  publishedDate?: string;
  excerpt: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

// Articles are written in the admin panel (Content → Blog Posts); the blog shows a
// "coming soon" state while none are published.
export const BLOG_POSTS: BlogPost[] = [];

