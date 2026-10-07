import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

// Title + breadcrumb used at the top of legal pages
export function LegalPageHeader({ title, showBreadcrumb = true }: { title: string; showBreadcrumb?: boolean }) {
  return (
    <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
      <div className="space-y-4">
        <Heading as="h1" size="lg" weight="normal" className="text-[#252B37]">
          {title}
        </Heading>
        {showBreadcrumb && (
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#717680]" />
            <Paragraph size="lg" className="text-[#717680]">
              {title}
            </Paragraph>
          </div>
        )}
      </div>
    </Section>
  );
}
