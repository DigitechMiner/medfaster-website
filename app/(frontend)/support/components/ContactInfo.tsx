"use client";

import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { AccentText } from "@/components/ui/accent-text";
import { useSiteSettings } from "@/components/providers/site-settings";
import { telHref } from "@/lib/links";
import type { SUPPORT_DEFAULTS } from "@/content/pages/support";

import React from "react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  label: string;
  content: React.ReactNode;
}
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

export function ContactInfo({ content }: { content: (typeof SUPPORT_DEFAULTS)["intro"] }) {
  const { contact } = useSiteSettings();
  return (
    <div className="space-y-0">
      <div className="pb-8 mb-2">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <ResponsiveParagraph
          size="base"
          className="text-[#717680] leading-relaxed"
        >
          {content.body}
          {content.contactLinkLabel && (
            <>
              {" "}
              <Link href="/contact-us" className="text-[#C44408] font-medium underline underline-offset-2 hover:text-[#F3651B]">
                {content.contactLinkLabel}
              </Link>
              .
            </>
          )}
        </ResponsiveParagraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={MapPin}
            label={content.locationLabel}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                {contact.location}
              </Paragraph>
            }
          />
        </div>

        <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={Phone}
            label={content.phoneLabel}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                <a href={telHref(contact.phone)} className="hover:text-[#F3651B] transition-colors">
                  {contact.phone}
                </a>
              </Paragraph>
            }
          />
        </div>
         <div className="pb-8 md:pb-0 md:border-b-0 border-b border-[#E9EAEB]">
          <ContactInfoC
            icon={Mail}
            label={content.emailLabel}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                <a href={`mailto:${contact.email}`} className="hover:text-[#F3651B] transition-colors">
                  {contact.email}
                </a>
              </Paragraph>
            }
          />
        </div>
      </div>
    </div>
  );
}
