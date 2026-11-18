import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin, Briefcase, Building2, Users } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Paragraph } from "@/components/ui/paragraph";
import { IconChip } from "@/components/ui/icon-chip";
import Image from "@/components/ui/image";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { CareerCTASection } from "@/components/section/career";
import { APP_STORE_LINKS } from "@/utils/constant";
import { JOBS, getJobBySlug } from "../components/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return JOBS.filter((job) => job.details).map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | KeRaeva`,
    description: job.details?.summary[0],
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#F3651B] flex-shrink-0" aria-hidden="true" />
          <Paragraph className="text-[#717680] leading-relaxed">{item}</Paragraph>
        </li>
      ))}
    </ul>
  );
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job || !job.details) notFound();
  const details = job.details;

  const facts = [
    { icon: MapPin, label: job.location },
    { icon: Briefcase, label: job.type },
    { icon: Building2, label: job.mode },
    { icon: Users, label: job.experience },
  ];

  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading as="h1" size="lg" className="text-[#252B37]" weight="normal">
              {job.title}
            </Heading>

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/about"
                className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                About KeRaeva
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Link
                href="/careers"
                className="inline-block py-1 text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                Careers
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                CDSW, Calgary
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto py-4 md:py-8 space-y-10">
          {/* Key facts */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-3">
                <IconChip icon={fact.icon} size="sm" />
                <Paragraph size="sm" weight="semibold" className="text-[#252B37]">
                  {fact.label}
                </Paragraph>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-[#FDF3EC] rounded-2xl p-6 md:p-8 space-y-3">
            {details.summary.map((line) => (
              <Paragraph key={line} className="text-[#252B37] leading-relaxed">
                {line}
              </Paragraph>
            ))}
          </div>

          <div className="space-y-4">
            <Heading as="h2" size="xs" weight="semibold" className="text-[#252B37]">
              Why join
            </Heading>
            <BulletList items={details.whyJoin} />
          </div>

          <div className="space-y-4">
            <Heading as="h2" size="xs" weight="semibold" className="text-[#252B37]">
              Why KeRaeva
            </Heading>
            <Paragraph className="text-[#717680] leading-relaxed">{details.whyKeRaevaIntro}</Paragraph>
            <BulletList items={details.whyKeRaeva} />
          </div>

          <div className="space-y-4">
            <Heading as="h2" size="xs" weight="semibold" className="text-[#252B37]">
              What you&apos;ll need
            </Heading>
            <Paragraph className="text-[#717680] leading-relaxed">
              Documents to upload in the KeRaeva app:
            </Paragraph>
            <BulletList items={details.documents} />
          </div>

          <div className="space-y-4">
            <Heading as="h2" size="xs" weight="semibold" className="text-[#252B37]">
              Skills
            </Heading>
            <ul className="flex flex-wrap gap-2">
              {details.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-[#C44408] bg-[#FEF0E7] rounded-full px-3 py-1.5"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* How to apply */}
          <div className="border border-[#E9EAEB] rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <Heading as="h2" size="xs" weight="semibold" className="text-[#252B37]">
                How to apply
              </Heading>
              <Paragraph className="text-[#717680] leading-relaxed">
                Register on the KeRaeva app and complete your pre-verification to get hired faster.
              </Paragraph>
            </div>

            <ol className="space-y-4">
              {details.howToApply.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3651B] text-white text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <Paragraph className="text-[#252B37] leading-relaxed pt-0.5">{step}</Paragraph>
                </li>
              ))}
            </ol>

            <div className="flex items-start gap-4 md:gap-6 pt-2">
              {/* Google Play - scannable QR linking to the live listing */}
              <a
                href={APP_STORE_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[130px] md:w-[150px] flex items-center"
                aria-label="Get KeRaeva on Google Play"
              >
                <Image
                  src="/images/ui/qr-google-play.png"
                  alt="QR code to download KeRaeva on Google Play"
                  width={186}
                  height={223}
                  className="object-contain w-full h-auto"
                />
              </a>

              {/* App Store - link once the iOS app is published */}
              {APP_STORE_LINKS.appStore ? (
                <a
                  href={APP_STORE_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[130px] md:w-[150px] self-end"
                  aria-label="Download KeRaeva on the App Store"
                >
                  <Image
                    src="/images/ui/badge-app-store.png"
                    alt="Download on the App Store"
                    width={169}
                    height={55}
                    className="object-contain w-full h-auto"
                  />
                </a>
              ) : (
                <div className="w-[130px] md:w-[150px] self-end flex flex-col items-center gap-1">
                  <Image
                    src="/images/ui/badge-app-store.png"
                    alt="App Store (coming soon)"
                    width={169}
                    height={55}
                    className="object-contain w-full h-auto opacity-40"
                  />
                  <span className="text-xs text-[#717680]">Coming soon on iOS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <CareerCTASection />

      <Footer />
    </Screen>
  );
}
