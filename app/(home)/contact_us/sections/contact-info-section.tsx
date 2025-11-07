import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { ContactInfoCard } from "./contact-info-card";
import { MapPin, Phone, Share2 } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const CONTACT_INFO = {
  location: {
    label: "Location",
    value: "MedFaster Canada Head Office",
    icon: MapPin,
  },
  phone: {
    label: "Phone Number",
    value: "(416) 555-0123",
    icon: Phone,
  },
  social: {
    label: "Follow Us",
    links: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
        label: "Facebook",
        color: "#1877F2",
      },
      {
        icon: FaLinkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
        color: "#0A66C2",
      },
      {
        icon: FaInstagram,
        href: "https://instagram.com",
        label: "Instagram",
        color: "#E4405F",
      },
    ],
  },
};

export function ContactInfoSection() {
  return (
    <div className="space-y-0">
      <div className="pb-8 mb-2">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Got a Question?<br />
          Let's <span className="text-[#F4781B] font-bold">Talk</span>
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

      {/* Location Card */}
      <div className="pb-8 border-b border-[#E9EAEB]">
        <ContactInfoCard
          icon={CONTACT_INFO.location.icon}
          label={CONTACT_INFO.location.label}
          content={
            <Paragraph size="base" weight="medium" className="text-[#252B37]">
              {CONTACT_INFO.location.value}
            </Paragraph>
          }
        />
      </div>

      {/* Phone Card */}
      <div className="py-8 border-b border-[#E9EAEB]">
        <ContactInfoCard
          icon={CONTACT_INFO.phone.icon}
          label={CONTACT_INFO.phone.label}
          content={
            <Paragraph size="base" weight="medium" className="text-[#252B37]">
              {CONTACT_INFO.phone.value}
            </Paragraph>
          }
        />
      </div>

      {/* Social Links Card */}
      <div className="pt-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4781B] flex items-center justify-center">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <Paragraph size="sm" weight="medium" className="text-[#717680] mb-4">
              {CONTACT_INFO.social.label}
            </Paragraph>
            <div className="flex gap-4">
              {CONTACT_INFO.social.links.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.label}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
