import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { JobListingsSection } from "./job-listings";
import { CareerCTASection } from "./career-cta";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export function CareersPageHeader() {
  return (
    <div className="space-y-4">
      <Heading as="h1" size="lg" className="text-[#252B37]">
        Careers
      </Heading>

      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-[#252B37] hover:text-[#F4781B] transition-colors text-sm"
        >
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-[#717680]" />
        <Link
          href="/about"
          className="text-[#252B37] hover:text-[#F4781B] transition-colors text-sm"
        >
          About MedFaster
        </Link>
        <ChevronRight className="w-4 h-4 text-[#717680]" />
        <Paragraph size="sm" className="text-[#717680]">
          Careers
        </Paragraph>
      </div>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Page Header Section */}
        <Section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <CareersPageHeader />
          </div>
        </Section>

        {/* Job Listings */}
        <JobListingsSection />

        {/* Career CTA */}
        <CareerCTASection />

      </main>

      <Footer />
    </>
  );
}
