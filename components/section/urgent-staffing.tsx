"use client";

import { CSSProperties } from "react";
import { ArrowRight, BellRing, BrainCircuit, CalendarCheck, Siren, UserCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { useModalStore } from "@/stores/modalStore";
import { RECRUITER_REGISTRATION_URL, URGENT_STAFFING_STEPS } from "@/utils/constant";

const STEP_ICONS = [Siren, BrainCircuit, BellRing, UserCheck, CalendarCheck];

// "home" matches the #F3651B home palette; "organizations" matches the
// #F4781B + gradient treatment used on the Healthcare Organizations page.
const VARIANTS = {
  home: {
    accentText: "text-[#F3651B]",
    primaryButton: "",
    secondaryButton: "",
    panelBackground: "bg-[#F3651B]",
    panelStyle: {
      backgroundImage: "url(/images/patterns/orange-pattern-1.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
    } as CSSProperties,
  },
  organizations: {
    accentText: "text-[#F4781B]",
    primaryButton: "bg-[#F4781B]",
    secondaryButton: "border-[#F4781B] text-[#F4781B] hover:bg-[#F4781B]",
    panelBackground: "bg-transparent",
    panelStyle: {
      background: 'linear-gradient(225deg, #EB001B 0%, #F79E1B 100%), url("/images/patterns/orange-pattern-1.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
    } as CSSProperties,
  },
};

interface UrgentStaffingSectionProps {
  variant?: keyof typeof VARIANTS;
}

export function UrgentStaffingSection({ variant = "home" }: UrgentStaffingSectionProps) {
  const openModal = useModalStore((state) => state.openModal);
  const styles = VARIANTS[variant];
  const isOrganizations = variant === "organizations";

  return (
    <Section
      padding={false}
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
    >
      {/* Left - Copy */}
      <Section className="flex flex-col justify-center">
        <div className="space-y-4 md:space-y-6">
          <Paragraph size="sm" className={`${styles.accentText} font-semibold uppercase tracking-wider`}>
            Urgent Staffing
          </Paragraph>
          <Heading
            as="h2"
            size="md"
            className="text-[#252B37] leading-snug text-2xl md:text-3xl lg:text-4xl"
          >
            When a Shift Can&apos;t Wait,{" "}
            <span className={`${styles.accentText} font-bold`}>KeRaeva</span> Finds
            Who Can Work
          </Heading>
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            Post an urgent requirement and KeRaeva sends it to verified,
            available professionals nearby. They see the details, accept or
            decline, and you know right away who&apos;s coming.
          </ResponsiveParagraph>
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            {isOrganizations
              ? "Professionals choose when they're available, so the people you reach are ready to work."
              : "Professionals stay in control: they choose when they're available and only take the shifts that work for them."}
          </ResponsiveParagraph>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <CustomButton
              className={`w-full sm:w-auto justify-between ${styles.primaryButton}`}
              rightIcon={ArrowRight}
              onClick={() => window.open(RECRUITER_REGISTRATION_URL, "_blank")}
            >
              Start Hiring
            </CustomButton>
            <CustomButton
              variant="secondary"
              className={`w-full sm:w-auto justify-center py-2.5 ${styles.secondaryButton}`}
              onClick={() => openModal(isOrganizations ? "request-demo" : "get-app")}
            >
              {isOrganizations ? "Request Demo" : "Get the App"}
            </CustomButton>
          </div>
        </div>
      </Section>

      {/* Right - Flow */}
      <Section backgroundColor={styles.panelBackground} style={styles.panelStyle}>
        <ol className="space-y-6 text-white">
          {URGENT_STAFFING_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? CalendarCheck;
            return (
              <li
                key={step.title}
                className="flex items-start gap-4 border-b border-white/20 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${styles.accentText}`} aria-hidden="true" />
                </div>
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
