import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    bio: "Former healthcare executive with 10+ years experience transforming patient care through technology.",
    image: "/images/team/member-1.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO & Co-founder",
    bio: "Tech leader who previously scaled infrastructure at major health-tech companies.",
    image: "/images/team/member-2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Operations",
    bio: "Operations expert driving efficiency and scalability across all departments.",
    image: "/images/team/member-3.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Head of Product",
    bio: "Product strategist committed to building intuitive solutions for complex problems.",
    image: "/images/team/member-4.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Head of Healthcare Partnerships",
    bio: "Healthcare partnerships specialist with deep relationships across the industry.",
    image: "/images/team/member-5.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 6,
    name: "James O'Brien",
    role: "Head of AI & Machine Learning",
    bio: "AI researcher and engineer building intelligent systems for real-world healthcare challenges.",
    image: "/images/team/member-6.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
];

export function TeamSection() {
 return (
  <Section>

      {/* Header with "We're hiring" button */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <Heading as="h2" size="md" className="text-[#252B37] mb-3">
            Meet our <span className="text-[#F4781B]">Team</span>
          </Heading>
          <Paragraph size="sm" className="text-[#717680] max-w-2xl">
            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </Paragraph>
        </div>
        <button className="bg-[#F4781B] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#e56a0f] transition-colors whitespace-nowrap">
          We&apos;re hiring!
        </button>
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

      {/* View All Team Button */}
      <div className="flex justify-center">
        <button className="px-8 py-3 border-2 border-gray-300 rounded-lg text-[#252B37] font-semibold hover:border-[#F4781B] hover:text-[#F4781B] transition-colors">
          View All Team
        </button>
      </div>

  </Section>
);
}