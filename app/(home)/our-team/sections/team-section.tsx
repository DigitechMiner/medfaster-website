import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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

export function TeamSection() {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <Paragraph size="sm" className="text-[#F4781B] font-semibold mb-2">
            Our Tech minds
          </Paragraph>
          <div className="flex justify-between items-start mb-8">
            <div>
              <Heading as="h2" size="lg" className="text-[#252B37] mb-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-3xl">
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-3xl"
                  quality={100}
                />

                {/* Floating Frosted Glass Card */}
                <div className="absolute inset-0 flex items-end justify-center p-6 rounded-3xl">
                  <div className="w-full bg-white/20 backdrop-blur-md bg-gradient-to-b from-white/30 to-white/10 rounded-3xl p-6 border border-white/40 shadow-lg">
                    {/* Content Inside Card */}
                    <div className="space-y-4">
                      {/* Name and Arrow */}
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <Paragraph
                            size="base"
                            weight="bold"
                            className="text-white leading-tight"
                          >
                            {member.name}
                          </Paragraph>
                          <Paragraph size="sm" weight="semibold" className="text-white/90 mt-1">
                            {member.role}
                          </Paragraph>
                        </div>

                        {/* Arrow icon */}
                        <svg
                          className="w-5 h-5 text-white flex-shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 7h10v10M7 17L17 7"
                          />
                        </svg>
                      </div>

                      {/* Bio text */}
                      <Paragraph size="xs" className="text-white/80 leading-relaxed">
                        {member.bio}
                      </Paragraph>

                      {/* Social Icons */}
                      <div className="flex gap-3 pt-2">
                        {/* Twitter/X */}
                        <a
                          href={member.social?.twitter || "#"}
                          className="text-white hover:text-white/70 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href={member.social?.linkedin || "#"}
                          className="text-white hover:text-white/70 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
