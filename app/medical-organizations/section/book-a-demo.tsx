"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { Calendar } from "lucide-react";
import { orgWorkforceSteps } from "@/utils/constant/landingPage";
import { DEMO_VIDEO_URL } from "@/utils/constant";

export default function BookADemo() {
  return (
    <Section
      backgroundColor="bg-[#F3651B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="p-4 md:p-8 lg:p-16 py-8 space-y-8">
          {/* Logo */}
          <div className="flex-shrink-0 w-56 md:w-64 lg:w-80 flex items-center">
            <Image
              src="/img/brand/new_logo.svg"
              height={50}
              width={300}
              alt="KeRaeva"
              objectFit="contain"
            />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <Heading as="h2" size="md" className="text-white">
              From Shift to <span>Payment</span>, Seamlessly
            </Heading>
            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl">
              KeRaeva doesn&apos;t stop at the hire. Shifts, attendance and
              payments stay connected, so your team always knows what was
              worked and what&apos;s been paid.
            </ResponsiveParagraph>
          </div>

          {/* Shift-to-payment steps */}
          <ol className="space-y-3 max-w-md">
            {orgWorkforceSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 border-b border-white/20 pb-3 last:border-b-0 text-white"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white text-[#F3651B] text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <Paragraph className="text-white">{step}</Paragraph>
              </li>
            ))}
          </ol>

          {/* CTA Button */}
          <CustomButton
            variant="inverse"
            size="lg"
            rightIcon={Calendar}
            onClick={() => window.open(DEMO_VIDEO_URL, "_blank")}
          >
            Show Demo
          </CustomButton>
        </div>

        {/* Right Content - Payment Card with Doctors */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square overflow-visible flex items-center justify-center">
            {/* Central White Circle */}
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] bg-white rounded-full shadow-xl flex flex-col items-center justify-center ">
              {/* Logo */}
              <div className="mb-3 flex flex-col items-center">
                <Image
                  src="/img/company/canadian-health-logo.webp"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mb-2 object-contain"
                />
              </div>

              {/* Price */}
              <ResponsiveParagraph
                size="lg"
                weight="bold"
                className=" text-[#F3651B] mb-2"
              >
                $12,500
              </ResponsiveParagraph>

              {/* Role */}
              <Paragraph
                size="sm"
                className="md:text-base text-[#252B37] mb-1 text-center"
              >
                Registered Nurse
              </Paragraph>

              {/* Status */}
              <Paragraph size="xs" className="md:text-sm text-[#717680]">
                Paid
              </Paragraph>

              {/* Top Right Doctor */}
              <div className="absolute -right-6 sm:-right-10 md:-right-14 lg:-right-16 -top-6 sm:-top-10 md:-top-14 lg:-top-16 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="/img/hero/doctor.webp"
                    alt="Doctor"
                    fill
                    sizes="160px"
                    className="object-cover p-2"
                  />
                </div>
              </div>

              {/* Bottom Right Doctor */}
              <div className="absolute -right-6 sm:-right-10 md:-right-14 lg:-right-16 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="/img/people/nurse-01.webp"
                    alt="Doctor"
                    fill
                    sizes="160px"
                    className="object-cover p-2"
                  />
                </div>
              </div>

              {/* Bottom Left Doctor */}
              <div className="absolute -left-6 sm:-left-10 md:-left-14 lg:-left-16 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="/img/people/nurse-02.webp"
                    alt="Doctor"
                    fill
                    sizes="160px"
                    className="object-cover p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
