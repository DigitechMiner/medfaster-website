import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { JobCard, type Job } from "@/app/(frontend)/careers/components/job-card";
import type { SectionOf } from "@/lib/cms/pages";
import { BlockSection } from "./shell";
import { BlockButton } from "./block-button";

export function JobOpeningsBlock({ block, jobs }: { block: SectionOf<"jobOpenings">; jobs: Job[] }) {
  const items = jobs.slice(0, block.limit ?? 6);
  return (
    <BlockSection background="white">
      <div className="space-y-4 mb-8">
        {block.heading && (
          <Heading as="h2" size="md" className="text-[#252B37]">
            <AccentText text={block.heading} />
          </Heading>
        )}
        {block.intro && (
          <ResponsiveParagraph size="sm" className="text-[#717680] max-w-3xl whitespace-pre-line">
            {block.intro}
          </ResponsiveParagraph>
        )}
      </div>
      {items.length === 0 ? (
        <ResponsiveParagraph size="sm" className="text-[#717680]">
          There are no open positions right now. Please check back soon.
        </ResponsiveParagraph>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {items.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
      {block.button?.label && (
        <div className="mt-8">
          <BlockButton button={block.button} />
        </div>
      )}
    </BlockSection>
  );
}
