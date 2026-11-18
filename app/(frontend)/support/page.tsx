"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ReportIssueForm } from "./components/form";

import { FreqAskQuest } from "./components/FreqAskQuest";
import { ContactInfo } from "./components/ContactInfo";

export default function ReportAnIssuePage() {
  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
              Support
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Support
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>
      <Section>
        <ContactInfo />
      </Section>

      {/* Form */}
      <Section>
        <div className="space-y-4 mb-8">
          <Heading as="h2" size="md" className="text-[#252B37]">
            Send a Support Request
          </Heading>
          <Paragraph size="lg" className="text-[#717680]">
            Tell us what&apos;s happening and include the job or shift it relates to.
            Our support team will reply by email.
          </Paragraph>
        </div>
        <ReportIssueForm />
      </Section>

      <Section id="faq" className="scroll-mt-24">
        <FreqAskQuest />
      </Section>
      <Footer />
    </Screen>
  );
}
