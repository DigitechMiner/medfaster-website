"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import Image from "next/image";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Boost Cancer: What You Need to Know",
    author: "Olivia Myers",
    date: "28 Jan 2025",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/blog/medical-team.png",
    tags: ["Medical", "Research", "Health"],
    featured: true,
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2025",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/images/blog/blog-1.png",
    tags: ["Product", "Tech", "Saas"],
  },
  {
    id: 3,
    title: "Building your AI stack",
    author: "Lana Steiner",
    date: "18 Jan 2025",
    excerpt: "The rise of AI/SaaS APIs has been met by a rise in tooling, testing, and managing them.",
    image: "/images/blog/blog-2.png",
    tags: ["Software Development", "AI"],
  },
  {
    id: 4,
    title: "Bill Watch-leadership lessons",
    author: "Alex Whitten",
    date: "17 Jan 2025",
    excerpt: "Like to know the secrets of influencing a 2-14 team size in a Super Bowl winning dynasty?",
    image: "/images/blog/blog-3.png",
    tags: ["Leadership", "Training"],
  },
  {
    id: 5,
    title: "PM mental models",
    author: "Demi Wilkinson",
    date: "16 Jan 2025",
    excerpt: "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/blog/blog-4.png",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 6,
    title: "How collaboration makes us better designers",
    author: "Karol Craig",
    date: "14 Jan 2025",
    excerpt: "Collaboration can makes us better at teams stronger, and our work better.",
    image: "/images/blog/blog-5.png",
    tags: ["Design", "Research"],
  },
];

const LATEST_POSTS = BLOG_POSTS.slice(0, 4);
function BlogCard({ post }: { post: (typeof BLOG_POSTS)[0] }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Paragraph size="xs" className="text-[#717680]">
          {post.author} • {post.date}
        </Paragraph>

        <Heading as="h3" size="xs" className="text-[#252B37] group-hover:text-[#F4781B] transition-colors">
          {post.title}
        </Heading>

        <Paragraph size="xs" className="text-[#717680]">
          {post.excerpt}
        </Paragraph>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-orange-50 text-[#F4781B] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(BLOG_POSTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedPosts = BLOG_POSTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
       <main className="bg-neutral-100 flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-1 md:p-4 lg:p-6 xl:p-8 w-full">
               {/* Page Header Section */}
               <Section className="bg-white border-b border-gray-200">
                   <div className="">
                         <Header />
                   </div><div className="max-w-7xl mx-auto px-4 py-12">
              <div className="space-y-4">
                <Heading as="h1" size="lg" className="text-[#252B37]">
                  Our Blog
                </Heading>

                <div className="flex items-center gap-2 text-sm">
                  <Link href="/" className="text-[#252B37] hover:text-[#F4781B]">
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4 text-[#717680]" />
                  <Paragraph size="sm" className="text-[#717680]">
                    Our Blog
                  </Paragraph>
                </div>
              </div>
            </div>
          </Section>
          {/* Hero Section - Featured Post */}
          <Section className="bg-white">
            <div className="w-full px-4">
              {/* Featured Hero Image */}
              <div className="relative h-200 rounded-2xl overflow-hidden mb-2">
                <Image
                  src="/images/blog/medical-team.png"
                  alt="Bone Cancer: What You Need to Know"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>

              {/* Featured Post Info */}
              <div className="space-y-4">
                <Paragraph size="sm" className="text-[#F4781B] font-semibold">
                  Olivia Rhye • 20 Jan 2025
                </Paragraph>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <Heading as="h3" size="xs" className="text-[#252B37] mb-3">
                      Bone Cancer: What You Need to Know
                    </Heading>

                    <Paragraph size="base" className="text-[#717680]">
                      How do you create compelling presentations that wow your colleagues and impress your managers?
                    </Paragraph>
                  </div>

                  {/* Arrow Icon */}
                  <svg
                    className="w-6 h-6 text-[#717680] flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7h10v10M7 17L17 7"
                    />
                  </svg>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 bg-orange-50 text-[#F4781B] rounded-full">
                    Medical
                  </span>
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                    Research
                  </span>
                  <span className="text-xs px-3 py-1 bg-red-50 text-red-600 rounded-full">
                    Health
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* Blog Grid - 3 columns */}
          <Section className="bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedPosts.slice(1).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center">
                <button className="text-[#717680] text-sm font-semibold hover:text-[#F4781B]">
                  ← Previous
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-full font-semibold text-sm transition-colors ${
                        currentPage === page
                          ? "bg-[#F4781B] text-white"
                          : "text-[#252B37] hover:text-[#F4781B]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button className="text-[#717680] text-sm font-semibold hover:text-[#F4781B]">
                  Next →
                </button>
              </div>
            </div>
          </Section>


          {/* Latest Writings Section */}
          <Section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <Heading as="h2" size="lg" className="text-[#252B37] mb-3">
                    Latest writings
                  </Heading>
                  <Paragraph size="base" className="text-[#717680]">
                    The latest news, technologies, and resources from our team.
                  </Paragraph>
                </div>
                <CustomButton
                  className="bg-[#F4781B] text-white hover:bg-[#E85C0F]"
                  rightIcon={ChevronRight}
                  iconClassName="text-white"
                  size="sm"
                >
                  View all posts
                </CustomButton>
              </div>

              {/* Latest Posts Grid - 4 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {BLOG_POSTS.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="flex gap-3 mt-8">
                <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-[#717680] hover:border-[#F4781B] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-[#717680] hover:border-[#F4781B] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </Section>
        </main>

        <Footer />
    </>
  );
}