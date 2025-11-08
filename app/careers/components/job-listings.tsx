"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JobCard } from "./job-card";
import { JOBS, ITEMS_PER_PAGE } from "./constants";

export function JobListingsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popular");

  // Helper function to extract salary value (in thousands)
  const getSalaryValue = (salary: string): number => {
    const match = salary.match(/\$(\d+)K/);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Helper function to extract hours from postedAt
  const getPostedHours = (postedAt: string): number => {
    const match = postedAt.match(/(\d+)\s+Hours?/i);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Sort jobs based on selected option
  const sortedJobs = [...JOBS].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        // Sort by postedAt (lower hours = newer)
        return getPostedHours(a.postedAt) - getPostedHours(b.postedAt);
      case "salary-high":
        // Sort by salary descending (use first number in range)
        return getSalaryValue(b.salary) - getSalaryValue(a.salary);
      case "salary-low":
        // Sort by salary ascending (use first number in range)
        return getSalaryValue(a.salary) - getSalaryValue(b.salary);
      case "popular":
      default:
        // Keep original order (by id)
        return a.id - b.id;
    }
  });

  const totalPages = Math.ceil(sortedJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedJobs = sortedJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when sort changes
  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

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
      Array.from(pagesToShow)
        .sort((a, b) => a - b)
        .forEach((page) => {
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

  return (
    <Section>
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
        <Paragraph size="sm" className="text-[#717680]">
          Showing {startIndex + 1}-
          {Math.min(startIndex + ITEMS_PER_PAGE, sortedJobs.length)} of{" "}
          {sortedJobs.length} results
        </Paragraph>
        <div className="flex items-center gap-3">
          <span className="text-[#717680] text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border-0 bg-transparent text-sm text-[#252B37] focus:outline-none cursor-pointer"
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
          </select>
        </div>
      </div>

      {/* Job Cards Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-12">
        {displayedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pb-8">
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
    </Section>
  );
}
