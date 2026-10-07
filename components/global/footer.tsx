"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, Smartphone } from "lucide-react";
import { submitLead } from "@/utils/leads";
import { ACTIVE_SOCIAL_LINKS } from "@/utils/constant";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { CustomButton } from "@/components/ui/custom-button";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { useModalStore, type ModalId } from "@/stores/modalStore";
import Image from "next/image";

// A footer link either navigates (href) or opens a site-wide modal (modal)
export type FooterLink = { label: string; href?: string; modal?: ModalId };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Healthcare Organizations", href: "/medical-organizations" },
      { label: "Healthcare Professionals", href: "/medical-professionals" },
      { label: "KeRaeva AI", href: "/coming-soon" },
      { label: "Subscription Plans", href: "/subscriptions" },
      { label: "Request a Demo", modal: "request-demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About KeRaeva", href: "/about" },
      { label: "Our Team", href: "/our-team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help_center" },
      { label: "Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

const CONTACT_EMAIL = "support@keraeva.com";
const CONTACT_PHONE = "(403) 919-6824";

const linkClass = "text-sm text-[#717680] hover:text-[#F3651B] transition-colors text-left";

export function Footer() {
  const openModal = useModalStore((state) => state.openModal);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const result = await submitLead({ type: "newsletter", email });

    if (result.ok) {
      setMessage(`✓ Subscribed with ${email}. Thank you!`);
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
        <div className="flex flex-col gap-6 border-b pb-8 mb-8 sm:pb-12 sm:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-2">
            <Heading as="h2" size="md" className="leading-tight">
              Healthcare Hiring Insights &{" "}
              <span className="text-[#F3651B]">Job Alerts</span>
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680]">
              Product updates, hiring insights and new opportunities. No spam.
            </ResponsiveParagraph>
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
                placeholder="Enter your email address"
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
                {isSubmitting ? "Subscribing..." : "Subscribe"}
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

        {/* Brand + contact | link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" aria-label="KeRaeva home" className="inline-block">
              <div className="relative w-40 md:w-48 lg:w-[200px] h-8 sm:h-10">
                <Image
                  src="/images/ui/KeRaeva-logo.svg"
                  alt="KeRaeva"
                  fill
                  className="object-contain object-left"
                  quality={100}
                />
              </div>
            </Link>

            <ResponsiveParagraph size="sm" className="text-[#717680] max-w-sm leading-relaxed">
              The AI-powered healthcare workforce platform connecting
              organizations and professionals across Canada.
            </ResponsiveParagraph>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-8 lg:gap-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 py-1.5 text-sm text-[#252B37] hover:text-[#F3651B] transition-colors">
                <Mail className="w-4 h-4 text-[#F3651B]" strokeWidth={1.5} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <a href="tel:+14039196824" className="inline-flex items-center gap-2 py-1.5 text-sm text-[#252B37] hover:text-[#F3651B] transition-colors">
                <Phone className="w-4 h-4 text-[#F3651B]" strokeWidth={1.5} aria-hidden="true" />
                {CONTACT_PHONE}
              </a>
            </div>

            <CustomButton
              variant="secondary"
              size="sm"
              className="my-0 px-4 py-2"
              onClick={() => openModal("get-app")}
            >
              <span className="inline-flex items-center gap-2">
                <Smartphone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                Get the App
              </span>
            </CustomButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="space-y-4">
                <ResponsiveParagraph
                  size="sm"
                  className="font-semibold text-[#252B37]"
                >
                  {column.title}
                </ResponsiveParagraph>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.modal ? (
                        <button
                          type="button"
                          className={linkClass}
                          onClick={() => openModal(link.modal!)}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link href={link.href!} className={linkClass}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-10 pt-6 sm:mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 order-2 sm:order-1">
            <ResponsiveParagraph size="xs" className="text-muted-foreground">
              Copyright © {new Date().getFullYear()} KeRaeva, All Rights Reserved.
              KeRaeva is operated by MedFaster Health Tech Inc.
            </ResponsiveParagraph>
            <ResponsiveParagraph size="xs" className="text-muted-foreground">
              Designed & Developed by{" "}
              <a
                href="https://digitechminer.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#252B37] hover:text-[#F3651B] transition-colors"
              >
                Digitech Miner
              </a>
            </ResponsiveParagraph>
          </div>

          {ACTIVE_SOCIAL_LINKS.length > 0 && (
            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2">
              {ACTIVE_SOCIAL_LINKS.map((social) => {
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
