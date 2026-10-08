"use client";

import Image from "@/components/ui/image";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import {
  Bell,
  Bookmark,
  Building2,
  CalendarCheck,
  CircleCheck,
  CircleSlash,
  Download,
  Gift,
  Mail,
  MessageSquare,
  Mic,
  Send,
  Users,
} from "lucide-react";
import { IconChip } from "@/components/ui/icon-chip";
import { AI_FEATURES, APP_FEATURES } from "@/lib/constants";
import { APP_STORE_LINKS } from "@/utils/constant";
import { useModalStore } from "@/stores/modalStore";

// AI Helps Section
export function AIHelpsSection() {
  const features = AI_FEATURES;

  return (
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          How{" "}
          <span className="text-[#F3651B]">AI Helps You</span>{" "}
          Get the Right Job Faster
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Our intelligent platform works behind the scenes to help you get the right job, faster. Here&apos;s how:
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            visual={{
              type: "icon",
              content: feature.icon
            }}
          />
        ))}
      </div>
    </Section>
  );
}

// All In One App Section
export function AllInOneSection() {
  const features = APP_FEATURES;

  return (
    <Section>
      <div className=" mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Your{" "}
          <span className="text-[#F3651B]">All-in-One</span>{" "}
          Healthcare career App
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          From building a verified profile to managing your payments, everything you need is right here
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageFullWidth={true}
            imageCenter={true}
            visual={{
              type: "image",
              content: feature.screen,
              alt: feature.title
            }}
          />
        ))}
      </div>
    </Section>
  );
}

// Verified Section
export function VerifiedSection() {
  return (
    <Section padding={false} backgroundColor="bg-neutral-100" className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
      <Section className="flex items-start w-full">
        <div className="space-y-4">
          <Heading as="h2" size="md" className="text-[#252B37]">
            Earn a{" "}
            <span className="text-[#F3651B]">Verified</span>{" "}
            Score.
            <br />
            Get Hired Faster.
          </Heading>
          
          <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
            Once you complete onboarding and pre-screening, you&apos;ll receive an 
            AI-generated scorecard. A verified profile with a completed AI
            interview helps you stand out to recruiters.
          </ResponsiveParagraph>
        </div>
      </Section>
      
      <Section padding={false} className="flex overflow-hidden items-center justify-end">
        <div className="relative mx-auto max-w-2xl">
          <Image 
            src="/images/ui/verified-card.webp" 
            alt="Sample verified AI interview scorecard on a KeRaeva professional profile"
            width={500}
            height={1000}
            className="object-contain"
          />
        </div>
      </Section>
    </Section>
  );
}

// Career On The Go Section
export function CareerOnTheGo() {
  return (
    <Section
      backgroundColor="bg-neutral-100"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8"
      padding={false}
    >
      <Section>
        <div className="space-y-4">
          <Heading as="h2" size="md" className="text-[#252B37]">
            Your Career, Your Control{" "}
            <span className="text-[#F3651B]">On the Go.</span>{" "}
          </Heading>

          <ResponsiveParagraph
            size="base"
            className="text-[#717680] leading-relaxed"
          >
            Get instant job alerts, apply with a single tap, and manage your
            entire job search — anytime, anywhere.
          </ResponsiveParagraph>
        </div>

        <div className="relative w-full max-w-2xl mx-auto flex justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-10 overflow-hidden">
          {/* Google Play - scannable QR linking to the live listing */}
          <a
            href={APP_STORE_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[150px] md:w-[180px] flex items-center"
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
              className="w-[150px] md:w-[180px] self-end"
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
            <div className="w-[150px] md:w-[180px] self-end flex flex-col items-center gap-1">
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
      </Section>

      <Section
        padding={false}
        className="flex overflow-hidden items-end justify-end"
      >
        <div className="relative mt-10 max-w-2xl mx-auto">
          <Image
            src="/images/ui/mobile-screen.webp"
            alt="Mobile app showing job search interface"
            width={500}
            height={900}
            className="object-contain"
          />
        </div>
      </Section>
    </Section>
  );
}

// Next Career Section
export function NextCareer() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Section 
      backgroundColor="bg-[#F3651B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className="p-4 md:p-8 lg:p-16 flex flex-col justify-center">
          <div className="space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8">
            <Heading as="h2" size="md" className="text-white">
              Your Next Career Move Starts Here.
            </Heading>

            <ResponsiveParagraph size="base" className="text-white/90 max-w-xl leading-relaxed">
              Join now to get access to verified listings, instant matches, and
              a network that&apos;s invested in your success
            </ResponsiveParagraph>

            <div className="flex flex-col sm:flex-row sm:gap-4">
              <CustomButton
            variant="inverse"
                rightIcon={Download}
                onClick={() => openModal("get-app")}
              >
                Download app
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden md:block">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-full">
            <Image
              src="/images/hero/nurse.webp"
              alt="Healthcare professional"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}


// Application Status Section - real statuses from the KeRaeva app
export function ApplicationStatusSection() {
  const statuses = [
    { icon: Send, title: "Applied", description: "Your application is with the organization." },
    { icon: Mail, title: "Invited", description: "An organization invited you to apply for a role." },
    { icon: Mic, title: "Interview", description: "You're in the interview stage, including any AI interview the organization requests." },
    { icon: CircleCheck, title: "Accepted", description: "You've been accepted, and your shifts appear in your upcoming work." },
    { icon: CircleSlash, title: "Not Selected / Withdrawn", description: "The role went another way or you withdrew. Either way, you'll know." },
  ];

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Know Where You <span className="text-[#F3651B]">Stand</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          No more wondering. Every application shows its current status in the
          app, and you get notified as it moves forward.
        </Paragraph>
      </div>

      <ol className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {statuses.map((status, index) => (
          <li
            key={status.title}
            className="bg-[#FAFAFA] border border-[#E9EAEB] rounded-2xl p-6 flex flex-col gap-3 flex-shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start"
          >
            <div className="flex items-center justify-between">
              <IconChip icon={status.icon} />
              <span className="text-sm font-semibold text-[#C44408]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <Heading as="h3" size="xs" weight="medium" className="text-[#252B37]">
              {status.title}
            </Heading>
            <ResponsiveParagraph size="sm" className="text-[#717680] leading-relaxed">
              {status.description}
            </ResponsiveParagraph>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// More In The App Section - verified Candidate App features
export function MoreInTheApp() {
  const features = [
    { icon: Bookmark, title: "Saved Jobs", description: "Save roles you like and come back to them when you're ready to apply." },
    { icon: Send, title: "Job Invites", description: "Organizations can invite you directly to apply for their open roles." },
    { icon: Building2, title: "Hiring Organizations", description: "Browse the organizations hiring on KeRaeva and see their open roles." },
    { icon: Users, title: "In-House Requests", description: "Accept an organization's request to join its in-house staff pool." },
    { icon: MessageSquare, title: "Chat with Hiring Teams", description: "Message recruiters directly in the app about roles and shifts." },
    { icon: Gift, title: "Referral Rewards", description: "Invite other professionals with your code and earn rewards in your wallet." },
    { icon: CalendarCheck, title: "Shift Check-In", description: "Check in and out of shifts from the app so your attendance is recorded." },
    { icon: Bell, title: "Instant Notifications", description: "Get alerts for urgent shifts, interview requests and application updates." },
  ];

  return (
    <Section>
      <div className="mb-8 md:mb-12">
        <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          More Ways KeRaeva <span className="text-[#F3651B]">Works for You</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Everything you need to manage your healthcare career, from the first
          application to your next shift.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            visual={{ type: "icon", content: feature.icon }}
          />
        ))}
      </div>
    </Section>
  );
}
