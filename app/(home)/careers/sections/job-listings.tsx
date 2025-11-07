"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, ChevronRight } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Accountant",
    company: "University Health Network",
    location: "Toronto, ON",
    type: "Fulltime",
    mode: "Onsite",
    salary: "$80K - $95K CAD",
    experience: "3-5 Years",
    postedAt: "2 Hours Ago",
  },
  {
    id: 2,
    title: "Staff Manager",
    company: "Maple",
    location: "Remote, Canada",
    type: "Fulltime",
    mode: "Remote",
    salary: "$110K - $130K CAD",
    experience: "5-7 Years",
    postedAt: "4 Hours Ago",
  },
  {
    id: 3,
    title: "Staff Manager",
    company: "University Health Network",
    location: "Toronto, ON",
    type: "Fulltime",
    mode: "Onsite",
    salary: "$80K - $95K CAD",
    experience: "3-5 Years",
    postedAt: "2 Hours Ago",
  },
  {
    id: 4,
    title: "Staff Manager",
    company: "Maple",
    location: "Remote, Canada",
    type: "Fulltime",
    mode: "Remote",
    salary: "$110K - $130K CAD",
    experience: "5-7 Years",
    postedAt: "4 Hours Ago",
  },
  {
    id: 5,
    title: "Staff Manager",
    company: "University Health Network",
    location: "Toronto, ON",
    type: "Fulltime",
    mode: "Onsite",
    salary: "$80K - $95K CAD",
    experience: "3-5 Years",
    postedAt: "2 Hours Ago",
  },
  {
    id: 6,
    title: "Accountant",
    company: "Maple",
    location: "Remote, Canada",
    type: "Fulltime",
    mode: "Remote",
    salary: "$110K - $130K CAD",
    experience: "5-7 Years",
    postedAt: "4 Hours Ago",
  },
  {
    id: 7,
    title: "Accountant",
    company: "University Health Network",
    location: "Toronto, ON",
    type: "Fulltime",
    mode: "Onsite",
    salary: "$80K - $95K CAD",
    experience: "3-5 Years",
    postedAt: "2 Hours Ago",
  },
  {
    id: 8,
    title: "Staff Manager",
    company: "Maple",
    location: "Remote, Canada",
    type: "Fulltime",
    mode: "Remote",
    salary: "$110K - $130K CAD",
    experience: "5-7 Years",
    postedAt: "4 Hours Ago",
  },
];

const ITEMS_PER_PAGE = 8;

function JobCard({ job }: { job: (typeof JOBS)[0] }) {
  return (
    <div className="pb-6 border-b border-gray-200">
      {/* Top row - Title and Posted time */}
      <div className="flex justify-between items-start mb-2">
        <Paragraph size="base" weight="semibold" className="text-[#252B37]">
          {job.title}
        </Paragraph>
        <Paragraph size="xs" className="text-[#717680]">
          {job.postedAt}
        </Paragraph>
      </div>

      {/* Company and Location */}
      <Paragraph size="sm" className="text-[#717680] mb-4">
        {job.company} • {job.location}
      </Paragraph>

      {/* Middle row - Badges and Salary */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <span className="text-xs text-[#252B37] px-2 py-1">
            {job.type}
          </span>
          <span className="text-xs text-[#252B37] px-2 py-1">
            {job.mode}
          </span>
        </div>
        <Paragraph size="base" weight="semibold" className="text-[#252B37]">
          {job.salary}
        </Paragraph>
      </div>

      {/* Bottom row - Experience and Apply */}
      <div className="flex justify-between items-center">
        <Paragraph size="sm" weight="semibold" className="text-[#F4781B]">
          {job.experience}
        </Paragraph>
        <a
          href="#"
          className="text-[#F4781B] font-semibold hover:text-[#E85C0F] transition-colors inline-flex items-center gap-1 group text-sm"
        >
          Apply now
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function JobListingsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popular");

  const totalPages = Math.ceil(JOBS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedJobs = JOBS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
    <Section> <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
          <Paragraph size="sm" className="text-[#717680]">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, JOBS.length)} of {JOBS.length} results
          </Paragraph>
          <div className="flex items-center gap-3">
            <span className="text-[#717680] text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-0 bg-transparent text-sm text-[#252B37] focus:outline-none cursor-pointer"
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="salary-high">Salary: High to Low</option>
              <option value="salary-low">Salary: Low to High</option>
            </select>
          </div>
          </div></Section>
        <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Results header - As a separate pill/card */}
       

        {/* Job Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 pb-8">
          {/* Prev Button - Using CustomButton */}
          <CustomButton
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-white border border-gray-200 text-[#252B37] hover:border-gray-300"
            rightIcon={ChevronRight}
            iconClassName="text-[#252B37]"
            iconContainerClassName="bg-gray-200 rounded-full"
            size="sm"
          >
            Prev
          </CustomButton>

          {/* Page Numbers - Bubbles */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full font-semibold text-sm transition-colors ${
                currentPage === page
                  ? "bg-[#F4781B] text-white"
                  : "bg-white border border-gray-200 text-[#252B37] hover:border-gray-300"
              }`}
            >
              {String(page).padStart(2, '0')}
            </button>
          ))}

          {/* Next Button - Using CustomButton */}
         <CustomButton
                type="submit"
               
                rightIcon={ArrowRight}
                size="md"
                className="w-full sm:w-auto my-0 justify-center"
              >
                Next
              </CustomButton>
        </div>
      </div>
    </Section>
</>
  );
}
