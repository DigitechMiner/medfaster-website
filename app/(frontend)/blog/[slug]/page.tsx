import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { JsonLd } from "@/components/global/json-ld";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "@/components/ui/image";
import { getBlogPost, getBlogPosts } from "@/lib/cms/content";
import { BASE_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/seo/site";

// Articles written in the admin panel (Content → Blog Posts).
// Published posts are generated at build time; new ones render on first visit
// and refresh whenever a post is saved.
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog | KeRaeva`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      ...BASE_OPEN_GRAPH,
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <Screen>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedDate,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          ...(post.image ? { image: post.image } : {}),
        }}
      />
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
              {post.title}
            </Heading>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Link href="/blog" className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg">
                Our Blog
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680] line-clamp-1">
                {post.title}
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      <Section className="bg-white">
        <article className="max-w-3xl mx-auto py-4 md:py-8 space-y-8">
          <div className="space-y-4">
            <Paragraph size="sm" className="text-[#717680]">
              {post.author} • <time dateTime={post.publishedDate}>{post.date}</time>
            </Paragraph>
            {post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="text-xs text-[#C44408] bg-[#FEF0E7] rounded-full px-3 py-1 font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {post.image && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image src={post.image} alt="" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
          )}

          <RichText data={post.content} className="kr-richtext" />

          <div className="pt-6 border-t border-[#E9EAEB]">
            <Link href="/blog" className="font-semibold text-[#F3651B] hover:opacity-80 transition-opacity">
              ← Back to all articles
            </Link>
          </div>
        </article>
      </Section>

      <Footer />
    </Screen>
  );
}
