"use client";

import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  Briefcase,
  CalendarCheck,
  CalendarClock,
  CircleCheck,
  ClipboardList,
  Inbox,
  Siren,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { IconChip } from "@/components/ui/icon-chip";
import { useModalStore } from "@/stores/modalStore";
import { RECRUITER_REGISTRATION_URL, URGENT_STAFFING_STEPS } from "@/utils/constant";

const STEP_ICONS: Record<Audience, LucideIcon[]> = {
  everyone: [Siren, BrainCircuit, UserCheck, CalendarCheck],
  organizations: [Siren, BrainCircuit, BellRing, Inbox, CalendarCheck],
  professionals: [CalendarClock, BellRing, ClipboardList, CircleCheck, Briefcase],
};

type Audience = "everyone" | "organizations" | "professionals";

interface UrgentStaffingSectionProps {
  // Adjusts the copy and CTAs; the palette is the same everywhere
  audience?: Audience;
}

const COPY = {
  // Home: a short teaser, the detail lives on the audience pages
  everyone: {
    heading: { before: "When a Shift Can\u2019t Wait,", accent: "KeRaeva", after: "Finds Who Can Work" },
    body: [
      "When a facility needs cover fast, KeRaeva matches the shift to verified professionals who are available nearby, and they respond from their phone.",
    ],
  },
  organizations: {
    heading: { before: "Cover Last-Minute Gaps with", accent: "Urgent Staffing", after: "" },
    body: [
      "Create an urgent requirement and KeRaeva notifies professionals whose role, qualifications and availability fit the shift. You follow responses as they arrive and confirm who\u2019s covering it.",
      "Because professionals set their own availability, the people you reach are ready to work. How quickly a shift fills depends on who is available nearby.",
    ],
  },
  professionals: {
    heading: { before: "Urgent Shifts,", accent: "On Your Terms", after: "" },
    body: [
      "Turn on your availability and KeRaeva can send you urgent shifts nearby that match your role. You see the location, timing and pay before you decide.",
      "Accept the shifts that work for you and decline the ones that don\u2019t. Accepted shifts go straight to your upcoming work.",
    ],
  },
};

export function UrgentStaffingSection({ audience = "everyone" }: UrgentStaffingSectionProps) {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  const copy = COPY[audience];
  const steps = URGENT_STAFFING_STEPS[audience];
  const icons = STEP_ICONS[audience];

  return (
    <Section
      id="urgent-staffing"
      padding={false}
      backgroundColor="bg-neutral-100"
      className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
    >
      {/* Left - Copy */}
      <Section className="flex flex-col justify-center">
        <div className="space-y-4 md:space-y-6">
          <Paragraph size="sm" className="text-[#C44408] font-semibold uppercase tracking-wider">
            {audience === "professionals" ? "Urgent Shifts" : "Urgent Staffing"}
          </Paragraph>
          <Heading as="h2" size="md" className="text-[#252B37]">
            {copy.heading.before}{" "}
            <span className="text-[#F3651B]">{copy.heading.accent}</span>
            {copy.heading.after && ` ${copy.heading.after}`}
          </Heading>
          {copy.body.map((paragraph) => (
            <ResponsiveParagraph key={paragraph} size="sm" className="text-[#717680] leading-relaxed">
              {paragraph}
            </ResponsiveParagraph>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {audience === "professionals" && (
              <CustomButton
                className="w-full sm:w-auto justify-between"
                rightIcon={ArrowRight}
                onClick={() => openModal("get-app")}
              >
                Get the App
              </CustomButton>
            )}
            {audience === "organizations" && (
              <>
                <CustomButton
                  className="w-full sm:w-auto justify-between"
                  rightIcon={ArrowRight}
                  onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
                >
                  Start Hiring
                </CustomButton>
                <CustomButton
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                  onClick={() => openModal("request-demo")}
                >
                  Request Demo
                </CustomButton>
              </>
            )}
            {audience === "everyone" && (
              <>
                <CustomButton
                  className="w-full sm:w-auto justify-between"
                  rightIcon={ArrowRight}
                  onClick={() => router.push("/medical-organizations#urgent-staffing")}
                >
                  Explore Urgent Staffing
                </CustomButton>
                <CustomButton
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                  onClick={() => openModal("get-app")}
                >
                  Get the App
                </CustomButton>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Right - Flow */}
      <Section
        backgroundColor="bg-[#F3651B]"
        style={{
          backgroundImage: "url(/images/patterns/orange-pattern-1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ol className="space-y-6 text-white">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? CalendarCheck;
            return (
              <li
                key={step.title}
                className="flex items-start gap-4 border-b border-white/20 pb-6 last:border-b-0 last:pb-0"
              >
                <IconChip icon={Icon} variant="white" />
                <div>
                  <Heading as="h3" size="xs" weight="medium" className="text-white mb-1">
                    {step.title}
                  </Heading>
                  <ResponsiveParagraph size="sm" className="text-white/90 leading-relaxed">
                    {step.description}
                  </ResponsiveParagraph>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>
    </Section>
  );
}
