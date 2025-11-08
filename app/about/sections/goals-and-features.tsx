"use client";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Card } from "@/components/ui/card";

// Core Goals Section - (Keep previous version)
export function CoreGoalsSection() {
  const CORE_GOALS = [
    {
      icon: "/images/icons/professionals.svg",
      title: "Empowering Professionals",
      description:
        "We empower professionals to find meaningful, flexible work that fits their lives and skills.",
    },
    {
      icon: "/images/icons/hospital.svg",
      title: "Zero Downtime for Hospitals",
      description:
        "We help hospitals and clinics operate with zero downtime by providing instant access to verified staff.",
    },
    {
      icon: "/images/icons/patient-care.svg",
      title: "Accelerating Patient Care",
      description:
        "Our network helps deliver healthcare to patients within minutes — anytime, anywhere.",
    },
    {
      icon: "/images/icons/ai-powered.svg",
      title: "Empowering Professionals",
      description:
        "We use AI to predict, not just react — creating proactive healthcare systems that anticipate staffing needs before they become emergencies.",
    },
  ];

  return (
    <Section>
      <div className="mb-12">
        <Heading as="h2" size="md" className="text-[#252B37]">
          Our Core <span className="text-[#F4781B]">Goals</span>
        </Heading>
        <ResponsiveParagraph
          size="sm"
          className="text-[#717680] mt-4 max-w-3xl"
        >
          Our main goal is to build the fastest and most reliable medical
          staffing network in India and beyond, supporting every part of the
          healthcare ecosystem.
        </ResponsiveParagraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {CORE_GOALS.map((goal, index) => (
          <Card
            key={index}
            icon={goal.icon}
            iconAlt={goal.title}
            title={goal.title}
            description={goal.description}
          />
        ))}
      </div>
    </Section>
  );
}

// Why MedFaster Section - Updated with numbered circles and connector line
export function WhyMedFasterSection() {
  const WHY_MEDFASTER = [
    {
      number: "01",
      title: "AI Matching",
      description:
        "Our platform intelligently connects hospitals with the right, available professionals, moving beyond keywords to find the perfect fit.",
    },
    {
      number: "02",
      title: "Instant Credential Verification",
      description:
        "We automatically verify licenses and credentials, so hospitals can hire with 100% confidence and speed.",
    },
    {
      number: "03",
      title: "Smart Scheduling",
      description:
        "A dynamic, all-in-one platform to manage open shifts, coordinate staff, and fill gaps in your schedule instantly.",
    },
    {
      number: "04",
      title: "We Accelerate Care",
      description:
        "We don't just automate—we coordinate all three sides of healthcare to reduce shortages and accelerate patient care.",
    },
  ];

  return (
    <Section className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Heading as="h2" size="md" className="text-[#252B37] mb-12">
          Why <span className="text-[#F4781B]">MedFaster</span>?
        </Heading>

        {/* Timeline with connector line */}
        <div className="relative">
          {/* Connector line - hidden on mobile, stops at last circle */}
          <div className="hidden lg:block absolute top-8 left-8 right-[calc(25%-2rem)] h-1 bg-gray-300 z-0"></div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WHY_MEDFASTER.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                {/* Numbered circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg ${
                    index % 2 === 1
                      ? "bg-[#F4781B] text-white"
                      : "bg-gray-200 text-[#717680]"
                  }`}
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    size="base"
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
      </div>
    </Section>
  );
}
