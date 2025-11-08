import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <Section >

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                        <ArrowUpRight className="w-5 h-5 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                      </div>

                      {/* Bio text */}
                      <Paragraph size="xs" className="text-white/80 leading-relaxed">
                        {member.bio}
                      </Paragraph>

                      {/* Social Icons */}
                      <div className="flex gap-3 pt-2">
                        {/* Twitter/X */}
                        <Link
                          href={member.social?.twitter || "#"}
                          className="text-white hover:text-white/70 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-5 h-5" />
                        </Link>

                        {/* LinkedIn */}
                        <Link
                          href={member.social?.linkedin || "#"}
                          className="text-white hover:text-white/70 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    </Section>
  );
}
