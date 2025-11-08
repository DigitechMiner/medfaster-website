import { Paragraph } from "@/components/ui/paragraph";
import { ArrowUpRight } from "lucide-react";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  mode: string;
  salary: string;
  experience: string;
  postedAt: string;
};

export function JobCard({ job }: { job: Job }) {
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
          <span className="text-xs text-[#252B37] px-2 py-1">{job.type}</span>
          <span className="text-xs text-[#252B37] px-2 py-1">{job.mode}</span>
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
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

