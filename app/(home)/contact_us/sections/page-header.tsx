import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function PageHeader() {
  return (
    <div className="space-y-4">
      {/* Title */}
      <Heading as="h1" size="lg"weight="normal" className="text-[#252B37]">
        Contact Us
      </Heading>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 ">
        <Link 
          href="/" 
          className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
        >
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-[#717680]" />
        <Paragraph size="lg" className="text-[#717680]">
          Contact Us
        </Paragraph>
      </div>
    </div>
  );
}
