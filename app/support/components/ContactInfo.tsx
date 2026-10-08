import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";

import React from "react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  label: string;
  content: React.ReactNode;
}
const CONTACT_INFO = {
  location: {
    label: "Location",
    value: "KeRaeva Canada Head Office",
    icon: MapPin,
  },
  phone: {
    label: "Phone Number",
    value: "(403) 919-6824",
    icon: Phone,
  },
  email : {
    label: "Email us",
    value: "support@keraeva.com",
    icon: Mail,
  },
};

function ContactInfoC({
  icon: Icon,
  label,
  content,
}: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <IconChip icon={Icon} variant="solid" />
      <div>
        <Paragraph size="sm" weight="medium" className="text-[#717680]">
          {label}
        </Paragraph>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}

export function ContactInfo() {
 return (
    <div className="space-y-0">
      <div className="pb-8 mb-2">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Get <span className="text-[#F3651B]">instant</span> support for jobs, shifts & <br />
        payment issues
        </Heading>
        <ResponsiveParagraph
          size="base"
          className="text-[#717680] leading-relaxed"
        >
          We&apos;re here to make your healthcare journey easier, whether
          you&apos;re seeking talent or a new role. Reach out and we&apos;ll
          get back to you with answers and support.
        </ResponsiveParagraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={CONTACT_INFO.location.icon}
            label={CONTACT_INFO.location.label}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                {CONTACT_INFO.location.value}
              </Paragraph>
            }
          />
        </div>

        <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={CONTACT_INFO.phone.icon}
            label={CONTACT_INFO.phone.label}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                {CONTACT_INFO.phone.value}
              </Paragraph>
            }
          />
        </div>
         <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={CONTACT_INFO.email.icon}
            label={CONTACT_INFO.email.label}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                {CONTACT_INFO.email.value}
              </Paragraph>
            }
          />
        </div>
      </div>
    </div>
  );
}
