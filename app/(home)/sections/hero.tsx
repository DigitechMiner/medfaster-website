"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { useModalStore } from "@/stores/modalStore";
import { RECRUITER_REGISTRATION_URL } from "@/utils/constant";

export default function HeroSection() {
  const openModal = useModalStore((state) => state.openModal);

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
            Healthcare Workforce, Powered by{" "}
            <span className="text-[#F3651B] font-medium">Intelligence</span>
          </Heading>
        </div>

        {/* Sub-text */}
        <div className="max-w-2xl">
          <ResponsiveParagraph size="base" className="text-[#252B37]">
            KeRaeva connects healthcare organizations and professionals across
            Canada to hire, verify, match, fill urgent shifts and get paid, all
            in one AI-powered platform.
          </ResponsiveParagraph>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomButton
            className="py-1"
            rightIcon={ArrowRight}
            size="lg"
            iconClassName="text-black"
            iconContainerClassName="bg-white border-0"
            onClick={() => openModal("get-app")}
          >
            Find Opportunities
          </CustomButton>

          <CustomButton
            size="lg"
            variant="secondary"
            className="text-[#252B37] border-none bg-gray-100 py-3"
            onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
          >
            Start Hiring
          </CustomButton>
        </div>

        {/* Hero Image (photo without baked-in statistics) */}
        <div className="relative w-full mt-6">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/hero/card-photo.png"
              alt="A healthcare professional walking with an older patient in a hospital"
              width={2400}
              height={2000}
              className="w-full h-auto aspect-[4/3] sm:aspect-[1264/640] object-cover object-[center_30%] rounded-lg"
              sizes="(max-width: 1440px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
