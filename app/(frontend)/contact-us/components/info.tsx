"use client";

import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Share2, type LucideIcon } from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { AccentText } from "@/components/ui/accent-text";
import { useSiteSettings } from "@/components/providers/site-settings";
import { telHref } from "@/lib/links";
import type { CONTACT_DEFAULTS } from "@/content/pages/contact";
import React from "react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  label: string;
  content: React.ReactNode;
}

function ContactInfoCard({ icon: Icon, label, content }: ContactInfoCardProps) {
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

export function ContactInfoSection({ content }: { content: (typeof CONTACT_DEFAULTS)["intro"] }) {
  const { contact, social } = useSiteSettings();
  // A social icon is shown only once its URL is set in Site Settings
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: social.linkedinUrl },
    { label: "Facebook", icon: Facebook, href: social.facebookUrl },
    { label: "Instagram", icon: Instagram, href: social.instagramUrl },
  ].filter((link) => Boolean(link.href));

  return (
    <div className="space-y-0">
      <div className="pb-8 mb-2">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          <AccentText text={content.heading} />
        </Heading>
        <ResponsiveParagraph size="base" className="text-[#717680] leading-relaxed">
          {content.body}
        </ResponsiveParagraph>
        {content.supportLinkLabel && (
          <Paragraph size="sm" className="text-[#717680] mt-4">
            {content.supportNote}{" "}
            <Link href="/support" className="text-[#C44408] font-medium underline underline-offset-2 hover:text-[#F3651B]">
              {content.supportLinkLabel}
            </Link>
            .
          </Paragraph>
        )}
      </div>

      {/* Location Card */}
      {contact.location && (
        <div className="pb-8 border-b border-[#E9EAEB]">
          <ContactInfoCard
            icon={MapPin}
            label={content.locationLabel}
            content={
              <Paragraph size="base" weight="medium" className="text-[#252B37]">
                {contact.location}
              </Paragraph>
            }
          />
        </div>
      )}

      {/* Phone Card */}
      {contact.phone && (
        <div className="py-8 border-b border-[#E9EAEB]">
          <ContactInfoCard
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
      )}

      {/* Social Links Card - shown once social profile URLs are set */}
      {socials.length > 0 && (
        <div className="pt-8">
          <div className="flex items-start gap-4">
            <IconChip icon={Share2} variant="solid" />
            <div className="flex-1">
              <Paragraph size="sm" weight="medium" className="text-[#717680] mb-4">
                {content.followLabel}
              </Paragraph>
              <div className="flex gap-4">
                {socials.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#717680] hover:text-[#F3651B] transition-colors"
                      aria-label={link.label}
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
