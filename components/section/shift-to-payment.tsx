"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import { useModalStore } from "@/stores/modalStore";
import { DEMO_VIDEO_URL, WORKFORCE_STEPS } from "@/utils/constant";

type Audience = "everyone" | "organizations" | "professionals";

interface ShiftToPaymentSectionProps {
  // Adjusts the copy and CTA; the layout is the same everywhere
  audience?: Audience;
}

const COPY: Record<Audience, { heading: React.ReactNode; body: string }> = {
  // Home: a concise overview of the flow
  everyone: {
    heading: "From Opportunity to Completed Work",
    body: "KeRaeva doesn’t stop at the hire. Accepted shifts, check-ins and earnings stay connected in one flow.",
  },
  organizations: {
    heading: (
      <>
        From Shift to <span>Payment</span>, Seamlessly
      </>
    ),
    body: "Assigned shifts, attendance and payment status stay connected in the recruiter platform, so your team knows what was worked and what’s been paid.",
  },
  professionals: {
    heading: "From Accepted Shift to Your Wallet",
    body: "Your shifts, check-ins and earnings live in one place in the app, so you always know what you’ve worked and what you’ve earned.",
  },
};

// Decorative portraits around the sample payment card
const PEOPLE = [
  { src: "/images/hero/doctor.webp", position: "-right-6 sm:-right-10 md:-right-14 lg:-right-16 -top-6 sm:-top-10 md:-top-14 lg:-top-16" },
  { src: "/images/hero/nurse.webp", position: "-right-6 sm:-right-10 md:-right-14 lg:-right-16 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16" },
  { src: "/images/team/girl-with-specs.webp", position: "-left-6 sm:-left-10 md:-left-14 lg:-left-16 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16" },
];

export function ShiftToPaymentSection({ audience = "everyone" }: ShiftToPaymentSectionProps) {
  const openModal = useModalStore((state) => state.openModal);
  const copy = COPY[audience];
  const steps = WORKFORCE_STEPS[audience];

  return (
    <Section
      backgroundColor="bg-[#F3651B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="p-4 md:p-8 lg:p-16 py-8 space-y-8">
          {/* Logo */}
          <div className="flex-shrink-0 w-56 md:w-64 lg:w-80 flex items-center">
            <Image
              src="/images/company/white-logo.svg"
              height={50}
              width={300}
              alt="KeRaeva"
              objectFit="contain"
            />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <Heading as="h2" size="md" className="text-white">
              {copy.heading}
            </Heading>
            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl">
              {copy.body}
            </ResponsiveParagraph>
          </div>

          {/* Shift-to-payment steps */}
          <ol className="space-y-3 max-w-md">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 border-b border-white/20 pb-3 last:border-b-0 text-white"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white text-[#C44408] text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <Paragraph className="text-white">{step}</Paragraph>
              </li>
            ))}
          </ol>

          {/* CTA Button */}
          {audience === "professionals" ? (
            <CustomButton variant="inverse" size="lg" rightIcon={ArrowRight} onClick={() => openModal("get-app")}>
              Get the App
            </CustomButton>
          ) : (
            <CustomButton
              variant="inverse"
              size="lg"
              rightIcon={ArrowRight}
              onClick={() => window.open(DEMO_VIDEO_URL, "_blank")}
            >
              Show Demo
            </CustomButton>
          )}
        </div>

        {/* Right Content - Sample payment card with professionals */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square overflow-visible flex items-center justify-center">
            {/* Central White Circle */}
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] bg-white rounded-full shadow-xl flex flex-col items-center justify-center">
              {/* Sample label: illustrative figures, not a real payment */}
              <span className="mb-3 rounded-full bg-[#FEF0E7] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C44408]">
                Sample
              </span>

              {/* Amount */}
              <ResponsiveParagraph size="lg" weight="bold" className="text-[#F3651B] mb-2">
                $480
              </ResponsiveParagraph>

              {/* Shift */}
              <Paragraph size="sm" className="md:text-base text-[#252B37] mb-1 text-center">
                RN Night Shift
              </Paragraph>

              {/* Status */}
              <Paragraph size="xs" className="md:text-sm text-[#717680]">
                Paid
              </Paragraph>

              {PEOPLE.map((person) => (
                <div
                  key={person.src}
                  className={`absolute ${person.position} w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden shadow-xl`}
                >
                  <div className="absolute inset-0">
                    <Image src={person.src} alt="" fill sizes="160px" className="object-cover p-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
