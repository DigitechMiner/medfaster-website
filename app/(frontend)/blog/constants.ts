export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

// Add published articles here; the blog shows a "coming soon" state when empty.
export const BLOG_POSTS: BlogPost[] = [];

