import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export type Crumb = { label: string; href?: string };

// Page title with a breadcrumb, shown inside the header card on inner pages
export function PageTitle({ title, crumbs }: { title: string; crumbs: Crumb[] }) {
  return (
    <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
      <div className="space-y-4">
        <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
          {title}
        </Heading>
        <div className="flex items-center gap-2 ">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} className="contents">
              {index > 0 && <ChevronRight className="w-4 h-4 text-[#717680]" />}
              {crumb.href ? (
                <Link href={crumb.href} className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg">
                  {crumb.label}
                </Link>
              ) : (
                <Paragraph size="lg" className="text-[#717680]">
                  {crumb.label}
                </Paragraph>
              )}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
