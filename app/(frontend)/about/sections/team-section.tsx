import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import { TeamMemberCard } from "@/components/card/team-member-card";
import type { TeamMember } from "@/lib/cms/team";
import type { AboutContent } from "@/content/pages/about";

// Team preview: members marked "Show on About page" in Content → Team
export function TeamSection({ content, members }: { content: AboutContent["team"]; members: TeamMember[] }) {
  if (members.length === 0) return null;
  return (
    <Section>
      <div className="mb-12">
        <div>
          <Heading as="h2" size="md" className="text-[#252B37] mb-3">
            <AccentText text={content.heading} />
          </Heading>
          <Paragraph size="sm" className="text-[#717680] max-w-2xl">
            {content.body}
          </Paragraph>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            id={Number(member.id)}
            name={member.name}
            role={member.role}
            image={member.image}
            social={{ linkedin: member.linkedin, twitter: member.twitter }}
          />
        ))}
      </div>
    </Section>
  );
}
