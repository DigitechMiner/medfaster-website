"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { Stethoscope, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Main Heading */}
        <div className="max-w-4xl">
          <Heading
            as="h1"
            size="lg"
            weight="normal"
            className="text-[#252B37] mb-6"
          >
            Find Your Next Healthcare Role, Or Your Next{" "}
            <span className="text-[#F4781B] font-medium">Great Hire</span>
          </Heading>
        </div>

        {/* Sub-text */}
        <div className="max-w-2xl">
          <ResponsiveParagraph size="base" className="text-[#252B37]">
            MedFaster connects top-tier talent with leading healthcare
            institutions across Canada, powered by smart AI.
          </ResponsiveParagraph>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomButton
            className="py-1"
            rightIcon={ChevronRight}
            size="lg"
            iconClassName="text-black"
            iconContainerClassName="bg-white border-0"
          >
            Get Started Now
          </CustomButton>

          <CustomButton
            size="lg"
            variant="secondary"
            className="text-[#252B37] border-none bg-gray-100 py-3"
          >
            Post a Job
          </CustomButton>
        </div>

        {/* Image Section with Overlay Cards */}
        <div className="relative w-full mt-6">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/hero/healthCare.png"
              alt="Healthcare professionals"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              quality={100}
              priority
            />

            {/* Left Overlay Card */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[180px] md:min-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="bg-yellow-100 rounded-lg p-2 md:p-3 mb-3">
                  <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#252B37] mb-1">
                  40k +
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Open Healthcare Roles
                </div>
              </div>
            </div>

            {/* Right Overlay Card */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[180px] md:min-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="bg-green-100 rounded-lg p-2 md:p-3 mb-3">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#252B37] mb-1">
                  340k +
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Active Professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
