"use client";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Card } from "@/components/ui/card";
import { HeartPulse, Hospital, Sparkles, UserRound } from "lucide-react";

// Core Goals Section - (Keep previous version)
export function CoreGoalsSection() {
  const CORE_GOALS = [
    {
      icon: UserRound,
      title: "Empowering Professionals",
      description:
        "We empower professionals to find meaningful, flexible work that fits their lives and skills.",
    },
    {
      icon: Hospital,
      title: "Fewer Staffing Gaps",
      description:
        "We help hospitals, clinics and care organizations fill open and urgent shifts faster with verified professionals.",
    },
    {
      icon: HeartPulse,
      title: "Supporting Patient Care",
      description:
        "When shifts are filled faster, care teams can focus on patients instead of staffing gaps.",
    },
    {
      icon: Sparkles,
      title: "Smarter Workforce Matching",
      description:
        "We use AI to match professionals to the right roles and help organizations respond quickly when staffing needs change.",
    },
  ];

  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37]">
          Our Core <span className="text-[#F3651B]">Goals</span>
        </Heading>
        <ResponsiveParagraph
          size="sm"
          className="text-[#717680] mt-4 max-w-full"
        >
          Our goal is to build the fastest and most reliable healthcare
          staffing network in Canada, supporting both the organizations that
          deliver care and the professionals who provide it.
        </ResponsiveParagraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {CORE_GOALS.map((goal, index) => (
          <Card
            key={index}
            icon={goal.icon}
            title={goal.title}
            description={goal.description}
          />
        ))}
      </div>
    </Section>
  );
}

// Why KeRaeva Section - Updated with numbered circles and connector line
export function WhyKeRaevaSection() {
  const WHY_KERAEVA = [
    {
      number: "01",
      title: "AI Matching",
      description:
        "Our platform intelligently connects hospitals with the right, available professionals, moving beyond keywords to find the perfect fit.",
    },
    {
      number: "02",
      title: "Credential Verification",
      description:
        "Professionals upload licences and credentials, which are reviewed so organizations can see verification status before they hire.",
    },
    {
      number: "03",
      title: "Shift Management",
      description:
        "Manage open shifts, urgent requirements and scheduled professionals in one platform.",
    },
    {
      number: "04",
      title: "Built for Healthcare",
      description:
        "We connect healthcare organizations and professionals so staffing gaps are filled faster and care isn't delayed.",
    },
  ];

  return (
    <Section className="bg-gray-50">
        <Heading as="h2" size="md" className="text-[#252B37] mb-12">
          Why <span className="text-[#F3651B]">KeRaeva?</span>
        </Heading>

        {/* Timeline with connector line */}
        <div className="relative">
          {/* Connector line - hidden on mobile, stops at last circle */}
          <div className="hidden lg:block absolute top-8 left-8 right-[calc(25%-2rem)] h-0.5 bg-gray-300 z-0"></div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WHY_KERAEVA.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                {/* Numbered circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg ${
                    index % 2 === 1
                      ? "bg-[#F3651B] text-white"
                      : "bg-gray-200 text-[#717680]"
                  }`}
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    size="lg"
                    weight="semibold"
                    className="text-[#252B37]"
                  >
                    {item.title}
                  </Paragraph>
                  <Paragraph
                    size="sm"
                    className="text-[#717680] leading-relaxed"
                  >
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
