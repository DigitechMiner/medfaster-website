"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Paragraph } from "@/components/ui/paragraph";
import { ArrowRight, Briefcase } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { IconChip } from "@/components/ui/icon-chip";
import { JobCard } from "./job-card";
import { JOBS, ITEMS_PER_PAGE } from "./constants";
import { CustomButton } from "@/components/ui/custom-button";

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


  if (JOBS.length === 0) {
    return (
      <Section className="text-center">
        <div className="max-w-xl mx-auto space-y-4 py-6">
          <IconChip icon={Briefcase} size="lg" className="mx-auto" />
          <Heading as="h2" size="sm" className="text-[#252B37]">
            No Open Roles <span className="text-[#F3651B]">Right Now</span>
          </Heading>
          <Paragraph className="text-[#717680]">
            We don&apos;t have any openings at the moment, but we&apos;re always
            happy to hear from people who want to improve healthcare staffing.
            Send us your CV and we&apos;ll be in touch when a role fits.
          </Paragraph>
          <a
            href="mailto:support@keraeva.com?subject=Careers%20at%20KeRaeva"
            className="inline-flex items-center gap-2 font-semibold text-[#F3651B] hover:opacity-80 transition-opacity py-1.5"
          >
            Email support@keraeva.com
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </Section>
    );
  }

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
            className="border-0 bg-transparent text-sm text-[#252B37] focus:outline-none cursor-pointer py-2"
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

    <div className="flex justify-center items-center gap-4 pb-8">
  {/* Prev Button */}
  <CustomButton
    variant="muted"
    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
    disabled={currentPage === 1}
    className="my-0"
  >
    Prev
  </CustomButton>

  {/* Page Numbers */}
  <div className="flex gap-2">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
      const isActive = currentPage === page;
      return (
        <button
          key={page}
          type="button"
          onClick={() => setCurrentPage(page)}
          aria-current={isActive ? "page" : undefined}
          className={`w-11 h-11 rounded-full font-semibold text-sm transition-colors ${
            isActive
              ? "bg-[#F3651B] text-white"
              : "bg-white text-[#252B37] border border-gray-200 hover:text-[#F3651B]"
          }`}
        >
          {page.toString().padStart(2, "0")}
        </button>
      );
    })}
  </div>

  {/* Next Button */}
  <CustomButton
    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
    disabled={currentPage === totalPages}
    rightIcon={ArrowRight}
    className="my-0"
  >
    Next
  </CustomButton>
</div>

    </Section>
  );
}
