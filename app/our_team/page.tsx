"use client";

import { useState } from "react";
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

const FILTER_TABS = [
  { id: "all", label: "View All" },
  { id: "board", label: "Board Members" },
  { id: "dev", label: "Developers & Designers" },
  { id: "marketing", label: "Marketing & Advertising" },
  { id: "management", label: "Management & Operations" },
];

const TEAM_MEMBERS = [
  // Board Members
  {
    id: 1,
    name: "Kewal Mangukia",
    role: "Founder & CEO",
    category: "board",
    image: "/images/team/kewal.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 2,
    name: "Rutvij Patel",
    role: "Director & CTO",
    category: "board",
    image: "/images/team/rutvij.png",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 3,
    name: "Yash Prajapati",
    role: "Director & CMO",
    category: "marketing",
    image: "/images/team/member-1.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 4,
    name: "Al Mawji",
    role: "COO & Finance Manager",
    category: "management",
    image: "/images/team/member-2.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  // Developers & Designers
  {
    id: 5,
    name: "Kevin Parmar",
    role: "Lead Fullstack Developer",
    category: "dev",
    image: "/images/team/kevin.png",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 6,
    name: "Vaibhav Rawal",
    role: "Lead AI Module Developer",
    category: "dev",
    image: "/images/team/vaibhav.png",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 7,
    name: "Jay Limbachiya",
    role: "Lead UI Designer",
    category: "dev",
    image: "/images/team/member-3.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 8,
    name: "Deep Desai",
    role: "Lead Backend Developer",
    category: "dev",
    image: "/images/team/member-4.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 9,
    name: "Sanket Patel",
    role: "Mobile App Developer",
    category: "dev",
    image: "/images/team/member-5.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 10,
    name: "Rahul Nishad",
    role: "Web Developer",
    category: "dev",
    image: "/images/team/member-6.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 11,
    name: "Srujan Hema",
    role: "Backend Developer",
    category: "dev",
    image: "/images/team/member-1.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: 12,
    name: "Hariprasad Thorve",
    role: "AI Module Developer",
    category: "dev",
    image: "/images/team/member-2.jpg",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMembers =
    activeTab === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeTab);

  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading as="h1" size="lg" weight="normal" className="text-[#252B37]">
              Our Team
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href="/about_us"
                className="text-[#252B37] hover:text-[#F3651B] transition-colors text-lg"
              >
                About Medfaster
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Our Team
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

      {/* Team Section */}
      <Section>
        {/* Section Header */}
        <div className="mb-8">
          <Paragraph size="lg" className="text-[#F3651B] font-semibold mb-2">
            Our Tech minds
          </Paragraph>
          <div className="flex justify-between items-start mb-8">
            <div>
              <Heading
                as="h2"
                size="sm"
                className="text-[#252B37] mb-3 font-semibold"
              >
                The Minds Behind Product Intelligence
              </Heading>
              <Paragraph size="base" className="text-[#717680] max-w-2xl">
                Meet the innovators blending Tech and AI to redefine recruitment
                in healthcare.
              </Paragraph>
            </div>
            <CustomButton
              className="bg-[#F3651B] text-white hover:bg-[#E85C0F] rounded-xl"
              size="lg"
            >
              View Open positions
            </CustomButton>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-0.5 mb-10 bg-[#F5F5F5] p-1 rounded-3xl w-fit ml-8">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-3xl text-sm font-light transition-all ${
                activeTab === tab.id
                  ? "bg-[#F3651B] text-white shadow-sm"
                  : "text-[#717680] hover:text-[#252B37] bg-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team Grid — 4 columns to match design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <TeamProfileCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </Section>

      {/* Career CTA */}
      <CareerCTASection />

      <Footer />
    </Screen>
  );
}
