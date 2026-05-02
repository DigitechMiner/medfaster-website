import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { TeamMemberCard } from "@/components/card/team-member-card";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Kewal Mangukia",
    role: "CEO & Founder",
    image: "/images/team/kewal.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Rutvij Patel",
    role: "CTO , Director & Co-founder",
    image: "/images/team/rutvij.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Yash Prajapati",
    role: "Director & CMO",
    bio: "",
    image: "/images/team/member-3.jpg",
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
            Meet our Team
          </Heading>
          <Paragraph size="sm" className="text-[#717680] max-w-2xl">
            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </Paragraph>
        </div>
        <button className="bg-[#F3651B] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#e56a0f] transition-colors whitespace-nowrap">
          We&apos;re hiring!
        </button>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {/* View All Team Button */}
      <div className="flex justify-center">
        <button className="px-8 py-3 border-2 border-gray-300 rounded-lg text-[#252B37] font-semibold hover:border-[#F3651B] hover:text-[#F3651B] transition-colors"
        
        
        >
          View All Team
        </button>
      </div>

  </Section>
);
}