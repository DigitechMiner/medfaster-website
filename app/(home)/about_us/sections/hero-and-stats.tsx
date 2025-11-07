import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";

// Hero Section
export function AboutHeroSection() {
  return (

      <div className="w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 lg:gap-6 items-center">
          {/* Left Column - Image (65%) */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hero/hero-image-2.png"
              alt="MedFaster Team"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Right Column - Orange Card (35%) */}
 <div className="bg-[#F4781B] rounded-3xl p-6 text-white shadow-lg h-[400px] lg:h-[500px] flex flex-col justify-end">
  <div className="space-y-4">
    {/* Heading */}
    <h2 className="text-l font-bold leading-tight">
      The Future of Healthcare Staffing is Here.
    </h2>

    {/* Description */}
    <p className="text-sm font-light lg:text-sm leading-relaxed opacity-95">
      Welcome to Medfaster. We are Canada's AI-powered platform built
      to connect leading hospitals and clinics with verified,
      hire-ready healthcare professionals. We're rebuilding the
      foundation of healthcare staffing—making it faster, smarter, and
      more reliable.
    </p>
  </div>
</div>


        </div>
      </div>
  );
}

// Stats Section
export function StatsSection() {
  const STATS = [
    {
      number: "10,000+",
      label: "Verified Professionals",
      description: "A growing, active network of pre-screened, credentialed candidates.",
      icon: "/images/icons/people.svg",
    },
    {
      number: "90%",
      label: "Faster Time-to-Hire",
      description: "",
    },
    {
      number: "100%",
      label: "Verified Credentials",
      description: "",
    },
  ];

  return (
  <Section className="bg-white py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header Section */}
      <div className="mb-16 lg:mb-24">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#252B37] mb-6">
          Where <span className="text-[#F4781B]">AI-Powered</span> Hiring Meets Human-Centric Care.
        </h2>
        <p className="text-base lg:text-lg text-[#717680] max-w-3xl leading-relaxed">
          Medfaster was founded by healthcare and tech veterans to fix staffing friction. Our platform bridges the gap between hospitals needing staff and professionals seeking good-fit jobs by automating verification, matching, and scheduling.
        </p>
      </div>

      {/* Stats Grid with Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
        {/* Left Box */}
<div className="border border-gray-200 rounded-lg p-8 lg:p-10 flex flex-col justify-between">
  <div className="mb-6">
    <img 
      src={STATS[0].icon} 
      alt={STATS[0].label}
      className="w-12 h-12 lg:w-16 lg:h-16"
    />
  </div>
  <div>
    <h3 className="text-5xl lg:text-6xl font-bold text-[#252B37] mb-4">
      {STATS[0].number}
    </h3>
    <p className="text-base lg:text-lg font-semibold text-[#252B37] mb-6">
      {STATS[0].label}
    </p>
    <p className="text-sm lg:text-base text-[#717680] leading-relaxed">
      {STATS[0].description}
    </p>
  </div>
</div>


        {/* Right Column - Two Stacked Boxes */}
        <div className="flex flex-col space-y-6 w-full">
          {/* 90% Box */}
          <div className="border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#252B37] mb-2">
              {STATS[1].number}
            </h3>
            <p className="text-sm lg:text-base font-semibold text-[#252B37]">
              {STATS[1].label}
            </p>
          </div>

          {/* 100% Box */}
          <div className="border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#252B37] mb-2">
              {STATS[2].number}
            </h3>
            <p className="text-sm lg:text-base font-semibold text-[#252B37]">
              {STATS[2].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
}
