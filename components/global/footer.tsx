"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone, Smartphone } from "lucide-react";
import { submitLead } from "@/utils/leads";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { CustomButton } from "@/components/ui/custom-button";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { useModalStore } from "@/stores/modalStore";
import Image from "@/components/ui/image";
import { AccentText } from "@/components/ui/accent-text";
import { resolveLink, telHref } from "@/lib/links";
import { useHeaderFooter } from "@/components/providers/header-footer";
import { useSiteSettings } from "@/components/providers/site-settings";

const linkClass = "text-sm text-[#717680] hover:text-[#F3651B] transition-colors text-left";

export function Footer() {
  const openModal = useModalStore((state) => state.openModal);
  const { footer } = useHeaderFooter();
  const { contact, apps, social, branding, forms } = useSiteSettings();
  const socialLinks = [
    { label: "LinkedIn", icon: Linkedin, href: social.linkedinUrl },
    { label: "Facebook", icon: Facebook, href: social.facebookUrl },
    { label: "Instagram", icon: Instagram, href: social.instagramUrl },
  ].filter((link) => link.href);
  // Footer buttons and links: popups open in place, other links open in this tab
  const runLink = (link: string) => {
    const resolved = resolveLink(link);
    if (resolved.kind === "modal") openModal(resolved.modal);
    else if (resolved.kind === "recruiter") window.location.href = apps.recruiterRegistrationUrl;
    else if (resolved.kind === "external" || resolved.kind === "internal") window.location.href = resolved.href;
  };
  const year = String(new Date().getFullYear());
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage(footer.newsletter.invalidEmailMessage);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const result = await submitLead({ type: "newsletter", email }, forms);

    if (result.ok) {
      setMessage(`✓ ${footer.newsletter.successMessage.replace("{email}", email)}`);
      setEmail("");
    } else {
      setMessage(`✗ ${result.message}`);
    }
    setIsSubmitting(false);
  };

  return (
    <Section as="footer" className="border-t bg-card">
      <div className="w-full">
        {/* Newsletter */}
        {footer.newsletter.show && (
        <div className="flex flex-col gap-6 border-b pb-8 mb-8 sm:pb-12 sm:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-2">
            <Heading as="h2" size="md">
              <AccentText text={footer.newsletter.heading} />
            </Heading>
            {footer.newsletter.body && (
              <ResponsiveParagraph size="sm" className="text-[#717680]">
                {footer.newsletter.body}
              </ResponsiveParagraph>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-2 lg:min-w-[420px]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.emailPlaceholder}
                aria-label="Email address"
                className="rounded-full h-12 lg:w-[420px] px-5 text-sm sm:text-base sm:flex-1"
                disabled={isSubmitting}
                required
              />
              <CustomButton
                type="submit"
                disabled={isSubmitting}
                rightIcon={ArrowRight}
                size="md"
                className="w-full sm:w-auto my-0 justify-center"
              >
                {isSubmitting ? footer.newsletter.sendingLabel : footer.newsletter.buttonLabel}
              </CustomButton>
            </form>
            {message && (
              <ResponsiveParagraph
                size="xs"
                className={`px-2 ${
                  message.includes("✓")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                <span role="status">{message}</span>
              </ResponsiveParagraph>
            )}
          </div>
        </div>
        )}

        {/* Brand + contact | link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" aria-label="KeRaeva home" className="inline-block">
              <div className="relative w-40 md:w-48 lg:w-[200px] h-8 sm:h-10">
                <Image
                  src={branding.logo}
                  alt="KeRaeva"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {footer.tagline && (
              <ResponsiveParagraph size="sm" className="text-[#717680] max-w-sm leading-relaxed">
                {footer.tagline}
              </ResponsiveParagraph>
            )}

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-8 lg:gap-3">
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 py-1.5 text-sm text-[#252B37] hover:text-[#F3651B] transition-colors">
                  <Mail className="w-4 h-4 text-[#F3651B]" strokeWidth={1.5} aria-hidden="true" />
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <a href={telHref(contact.phone)} className="inline-flex items-center gap-2 py-1.5 text-sm text-[#252B37] hover:text-[#F3651B] transition-colors">
                  <Phone className="w-4 h-4 text-[#F3651B]" strokeWidth={1.5} aria-hidden="true" />
                  {contact.phone}
                </a>
              )}
            </div>

            {footer.appButton.label && (
              <CustomButton
                variant="secondary"
                size="sm"
                className="my-0"
                onClick={() => runLink(footer.appButton.link)}
              >
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  {footer.appButton.label}
                </span>
              </CustomButton>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {footer.columns.filter((column) => column.title || column.links.length).map((column) => (
              <nav key={column.title} aria-label={column.title} className="space-y-4">
                <ResponsiveParagraph
                  size="sm"
                  className="font-semibold text-[#252B37]"
                >
                  {column.title}
                </ResponsiveParagraph>
                <ul className="flex flex-col gap-3">
                  {column.links.filter((link) => link.label).map((link) => {
                    const resolved = resolveLink(link.link);
                    return (
                      <li key={link.label}>
                        {resolved.kind === "modal" || resolved.kind === "recruiter" ? (
                          <button
                            type="button"
                            className={linkClass}
                            onClick={() => runLink(link.link)}
                          >
                            {link.label}
                          </button>
                        ) : resolved.kind === "external" ? (
                          <a href={resolved.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={resolved.kind === "internal" ? resolved.href : "/"} className={linkClass}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-10 pt-6 sm:mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 order-2 sm:order-1">
            {footer.copyright && (
              <ResponsiveParagraph size="xs" className="text-muted-foreground">
                {footer.copyright.replace(/\{year\}/g, year)}
              </ResponsiveParagraph>
            )}
            {footer.creditLabel && (
              <ResponsiveParagraph size="xs" className="text-muted-foreground">
                {footer.creditPrefix}{footer.creditPrefix ? " " : ""}
                {footer.creditUrl ? (
                  <a
                    href={footer.creditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#252B37] hover:text-[#F3651B] transition-colors"
                  >
                    {footer.creditLabel}
                  </a>
                ) : (
                  <span className="font-medium text-[#252B37]">{footer.creditLabel}</span>
                )}
              </ResponsiveParagraph>
            )}
          </div>

          {socialLinks.length > 0 && (
            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#717680] hover:text-[#F3651B] hover:-translate-y-1 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Footer;
