import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Share2, type LucideIcon } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { ACTIVE_SOCIAL_LINKS } from "@/utils/constant";
import { CONTACT_INFO } from "./constants";
import React from "react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  label: string;
  content: React.ReactNode;
}

function ContactInfoCard({
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

export function ContactInfoSection() {
  return (
    <div className="space-y-0">
      <div className="pb-8 mb-2">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Got a Question?<br />
          Let&apos;s <span className="text-[#F3651B] font-semibold">Talk</span>
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

      {/* Social Links Card - shown once social profile URLs are set */}
      {ACTIVE_SOCIAL_LINKS.length > 0 && (
        <div className="pt-8">
          <div className="flex items-start gap-4">
            <IconChip icon={Share2} variant="solid" />
            <div className="flex-1">
              <Paragraph size="sm" weight="medium" className="text-[#717680] mb-4">
                Follow Us
              </Paragraph>
              <div className="flex gap-4">
                {ACTIVE_SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#717680] hover:text-[#F3651B] transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
