import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { TeamMemberCard } from "@/components/card/team-member-card";
import { CareerCTASection } from "@/components/section/career";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-1.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-3.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-4.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-5.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Alisa Hester",
    role: "PM, Hourglass",
    bio: "AI-powered task management tools tailored for effective collaboration within teams.",
    image: "/images/team/member-6.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export default function TeamPage() {
  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              Our Team
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 ">
              <Link
                href="/about_us"
                className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
              >
                About MedFaster
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
        <div className="mb-12">
          <Paragraph size="sm" className="text-[#F4781B] font-semibold mb-2">
            Our Tech minds
          </Paragraph>
          <div className="flex justify-between items-start mb-8">
            <div>
              <Heading as="h2" size="sm" className="text-[#252B37] mb-3 font-semibold">
                The Minds Behind Health Intelligence
              </Heading>
              <Paragraph size="base" className="text-[#717680] max-w-2xl">
                Meet the innovators blending Tech and AI to redefine personal health.
              </Paragraph>
            </div>
            <CustomButton
              className="bg-[#F4781B] text-white hover:bg-[#E85C0F]"
              size="lg"
            >
              Open positions
            </CustomButton>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              social={member.social}
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
