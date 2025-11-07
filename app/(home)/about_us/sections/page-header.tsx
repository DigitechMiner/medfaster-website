import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function AboutUsPageHeader() {
  return (
    <div className="space-y-4">
      <Heading as="h1" size="lg" className="text-[#252B37]">
        About MedFaster
      </Heading>

      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-[#252B37] hover:text-[#F4781B] transition-colors text-sm"
        >
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-[#717680]" />
        <Paragraph size="sm" className="text-[#717680]">
          About Us
        </Paragraph>
      </div>
    </div>
  );
}
