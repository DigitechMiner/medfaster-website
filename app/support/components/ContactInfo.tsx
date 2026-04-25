import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Mail, Share2 } from "lucide-react";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import React from "react";

interface ContactInfoCardProps {
  icon: React.ComponentType<{ className: string }>;
  label: string;
  content: React.ReactNode;
}
const CONTACT_INFO = {
  location: {
    label: "Location",
    value: "Medfaster Canada Head Office",
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
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F3651B] flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
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
          Get <span className="text-[#F3651B] font-semibold">instant</span> support for jobs, shifts & <br />
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
