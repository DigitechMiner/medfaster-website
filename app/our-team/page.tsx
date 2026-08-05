"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { TeamProfileCard } from "@/components/card/team-profile-card";
import { CareerCTASection } from "@/components/section/career";
import { TeamMemberCard } from "@/components/card/team-member-card";
const FILTER_TABS = [
  { id: "all", label: "View All" },
  { id: "board", label: "Board Members" },
  { id: "dev", label: "Developers & Designers" },
  { id: "marketing", label: "Marketing & Advertising" },
  { id: "management", label: "Management & Operations" },
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Kewal Mangukia",
    role: "Founder & CEO",
    category: "board",
    image: "/images/team/kewal.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Rutvij Patel",
    role: "CTO & Director",
    category: "board",
    image: "/images/team/rutvij.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Yash Prajapati",
    role: "BDE",
    category: "marketing",
    image: "/images/team/member-4.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Kevin Parmar",
    role: "Lead Fullstack Developer",
    category: "dev",
    image: "/images/team/kevin.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "Vaibhav Rawal",
    role: "Lead AI Module Developer",
    category: "dev",
    image: "/images/team/vaibhav.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Deep Desai",
    role: "Lead Backend Developer",
    category: "dev",
    image: "/images/team/member-2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 7,
    name: "Sanket Patel",
    role: "Mobile App Developer",
    category: "dev",
    image: "/images/team/member-6.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 8,
    name: "Rahul Nishad",
    role: "Web Developer",
    category: "dev",
    image: "/images/team/member-3.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 9,
    name: "Srujan K",
    role: "Backend Developer",
    category: "dev",
    image: "/images/team/srujan.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  /*  {
    id: 12,
    name: "Hariprasad Thorve",
    role: "AI Module Developer",
    category: "dev",
    image: null,
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },*/
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMembers = useMemo(() => {
    return activeTab === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((member) => member.category === activeTab);
  }, [activeTab]);

  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-3 md:space-y-4">
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              Our Team
            </Heading>

            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base lg:text-lg">
              <Link
                href="/about_us"
                className="text-[#252B37] transition-colors hover:text-[#F3651B]"
              >
                About Medfaster
              </Link>
              <ChevronRight className="h-4 w-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Our Team
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      <Section className="pb-10 sm:pb-12 lg:pb-16">
        <div className="mb-8 sm:mb-10">
          <Paragraph size="lg" className="mb-2 font-semibold text-[#F3651B]">
            Our Tech minds
          </Paragraph>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Heading
                as="h2"
                size="sm"
                className="mb-3 font-semibold text-[#252B37]"
              >
                The Minds Behind Product Intelligence
              </Heading>

              <Paragraph size="base" className="text-[#717680]">
                Meet the innovators blending Tech and AI to redefine recruitment
                in healthcare.
              </Paragraph>
            </div>

            <CustomButton
              className="w-full rounded-xl bg-[#F3651B] text-white hover:bg-[#E85C0F] sm:w-fit"
              size="lg"
            >
              View Open positions
            </CustomButton>
          </div>
        </div>

        <div className="mb-8 sm:mb-10 overflow-x-auto">
          <div className="flex min-w-max gap-1 rounded-3xl bg-[#F5F5F5] p-1">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-3xl px-4 py-2 text-sm font-normal whitespace-nowrap transition-all sm:px-5 sm:py-2.5 ${
                  activeTab === tab.id
                    ? "bg-[#F3651B] text-white shadow-sm"
                    : "bg-transparent text-[#717680] hover:text-[#252B37]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <TeamProfileCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
            />
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              //bio={member.bio}
              image={member.image ?? "/images/icons/people.svg"}
              social={member.social}
            />
          ))}
        </div>
      </Section>

      <CareerCTASection />
      <Footer />
    </Screen>
  );
}
