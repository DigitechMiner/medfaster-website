"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Paragraph } from "@/components/ui/paragraph";
import { ArrowRight } from "lucide-react";
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

    <div className="flex justify-center items-center gap-4 pb-8">
  {/* Prev Button */}
  <CustomButton
    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
    disabled={currentPage === 1}
    className={`
      flex items-center px-4 h-[44px] rounded-full bg-white border-none
      text-[#717680] font-semibold text-base
      ${currentPage === 1 ? "cursor-not-allowed" : "hover:text-[#F3651B] hover:bg-gray-100"}
      transition
    `}
    rightIcon={ArrowRight}
    iconClassName="text-[#A5A5A5]"
    iconContainerClassName="bg-[#F6F6F8]"
  >
    Prev
  </CustomButton>

  {/* Page Numbers */}
  <div className="flex gap-4">
    {[1, 2, 3].map(page => {
      const isActive = currentPage === page;
      return (
        <CustomButton
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`
            !w-12 !h-12 !rounded-full !p-0 flex items-center justify-center
            font-semibold text-base transition
            ${isActive 
              ? "bg-[#F3651B] text-white" 
              : "bg-white text-[#252B37] border border-[#F6F6F8]"}
          `}
        >
          {page.toString().padStart(2, '0')}
        </CustomButton>
      );
    })}
  </div>

  {/* Next Button (full orange, matches active page) */}
  <CustomButton
  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
  disabled={currentPage === totalPages}
  className={`
    flex items-center px-4 h-[44px] rounded-full !bg-[#F3651B] !border-[#F3651B] border-2
    text-white font-semibold text-base
    ${currentPage === totalPages ? "bg-[#F3651B]" : "bg-[#F3651B]"}
    
  `}
  rightIcon={ArrowRight}
  iconClassName="text-black"
  iconContainerClassName="bg-white"
>
  Next
</CustomButton>

</div>

    </Section>
  );
}
