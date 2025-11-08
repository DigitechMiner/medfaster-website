"use client";

import { useState, useRef } from "react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import Image from "next/image";
import { BLOG_POSTS } from "./constants";
import { BlogCard } from "./components/blog-card";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [latestWritingsIndex, setLatestWritingsIndex] = useState(0);
  const latestWritingsContainerRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 6;
  // Filter out featured posts since they're shown separately
  const nonFeaturedPosts = BLOG_POSTS.filter((post) => !post.featured);
  const totalPages = Math.ceil(nonFeaturedPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedPosts = nonFeaturedPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Generate pagination array: first, current-1, current, current+1, last
  const getPaginationPages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculate range around current page (current-1, current, current+1)
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    // Determine which pages to show around current (current-1, current, current+1)
    // Exclude pages that are already shown as first/last
    const pagesToShow = new Set<number>();
    
    if (prevPage > 1 && prevPage !== totalPages) {
      pagesToShow.add(prevPage);
    }
    if (currentPage !== 1 && currentPage !== totalPages) {
      pagesToShow.add(currentPage);
    }
    if (nextPage < totalPages && nextPage !== 1) {
      pagesToShow.add(nextPage);
    }

    // Always show first page
    pages.push(1);

    // Add ellipsis and middle pages only if there are pages to show
    if (pagesToShow.size > 0) {
      // Add ellipsis after first page if there's a gap
      const minPageToShow = Math.min(...Array.from(pagesToShow));
      if (minPageToShow > 2) {
        pages.push("ellipsis-start");
      }

      // Add pages around current page (sorted)
      Array.from(pagesToShow).sort((a, b) => a - b).forEach(page => {
        pages.push(page);
      });

      // Add ellipsis before last page if there's a gap
      const maxPageToShow = Math.max(...Array.from(pagesToShow));
      if (maxPageToShow < totalPages - 1) {
        pages.push("ellipsis-end");
      }
    } else {
      // If no middle pages, check if we need ellipsis between first and last
      if (totalPages > 2) {
        pages.push("ellipsis-start");
      }
    }

    // Always show last page (if it's not already shown)
    if (totalPages > 1 && !pagesToShow.has(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  // Latest Writings carousel - all cards in one row, move one at a time
  const handlePreviousCard = () => {
    if (latestWritingsIndex > 0) {
      const newIndex = latestWritingsIndex - 1;
      setLatestWritingsIndex(newIndex);
      scrollToCard(newIndex);
    }
  };

  const handleNextCard = () => {
    if (latestWritingsIndex < BLOG_POSTS.length - 1) {
      const newIndex = latestWritingsIndex + 1;
      setLatestWritingsIndex(newIndex);
      scrollToCard(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (latestWritingsContainerRef.current) {
      const container = latestWritingsContainerRef.current;
      const cardElement = container.children[index] as HTMLElement;
      if (cardElement) {
        // Scroll to align card to the left side of the container
        const scrollPosition = cardElement.offsetLeft;
        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              Our Blog
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Our Blog
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>
      {/* Hero Section - Featured Post */}
      <Section>
        {/* Featured Hero Image */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-2">
          <Image
            src="/images/blog/medical-team.png"
            alt="Bone Cancer: What You Need to Know"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-2xl"
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
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </Paragraph>
            </div>

            {/* Arrow Icon */}
            <ArrowUpRight className="w-6 h-6 text-[#717680] flex-shrink-0 mt-1" />
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

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="text-[#717680] text-sm font-semibold hover:text-[#F4781B] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex gap-2">
              {getPaginationPages().map((page, index) => {
                if (typeof page === "string") {
                  // Render ellipsis
                  return (
                    <span
                      key={`${page}-${index}`}
                      className="w-8 h-8 flex items-center justify-center text-[#252B37] font-semibold text-sm"
                    >
                      ...
                    </span>
                  );
                }
                return (
                  <Button
                    key={page}
                    variant="ghost"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full font-semibold text-sm transition-colors ${
                      currentPage === page
                        ? "bg-[#F4781B] text-white hover:bg-[#F4781B]"
                        : "text-[#252B37] hover:text-[#F4781B]"
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="text-[#717680] text-sm font-semibold hover:text-[#F4781B] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Latest Writings Section */}
      <Section>
        <div className="flex justify-between items-start mb-8">
          <div>
            <Heading as="h2" size="lg" className="text-[#252B37] mb-3">
              Latest writings
            </Heading>
            <Paragraph size="base" className="text-[#717680]">
              The latest news, technologies, and resources from our team.
            </Paragraph>
          </div>
          <CustomButton>View all posts</CustomButton>
        </div>

        {/* Latest Posts - All cards in one row */}
        <div className="relative">
          <div
            ref={latestWritingsContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none"
            }}
          >
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px]">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePreviousCard}
              disabled={latestWritingsIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 text-[#717680] hover:border-[#F4781B] hover:text-[#F4781B] bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextCard}
              disabled={latestWritingsIndex === BLOG_POSTS.length - 1}
              className="w-10 h-10 rounded-full border border-gray-300 text-[#717680] hover:border-[#F4781B] hover:text-[#F4781B] bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </Screen>
  );
}
