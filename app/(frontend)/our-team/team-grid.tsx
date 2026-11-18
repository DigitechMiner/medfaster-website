"use client";

import { useState } from "react";
import { TeamMemberCard } from "@/components/card/team-member-card";
import type { TeamMember } from "@/lib/cms/team";
import type { OurTeamContent } from "@/content/pages/our-team";

// Filter tabs and the grid of team members
export function TeamGrid({ members, filters }: { members: TeamMember[]; filters: OurTeamContent["filters"] }) {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { id: "all", label: filters.allLabel },
    { id: "board", label: filters.boardLabel },
    { id: "dev", label: filters.devLabel },
    { id: "marketing", label: filters.marketingLabel },
  ].filter((tab) => tab.id === "all" || members.some((member) => member.category === tab.id));
  const filteredMembers = activeTab === "all" ? members : members.filter((member) => member.category === activeTab);

  return (
    <>
      <div className="mb-8 sm:mb-10 overflow-x-auto">
        <div className="flex min-w-max gap-1 rounded-3xl bg-[#F5F5F5] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-3xl px-4 py-2 text-sm font-normal whitespace-nowrap transition-all sm:px-5 sm:py-2.5 ${
                activeTab === tab.id ? "bg-[#F3651B] text-white shadow-sm" : "bg-transparent text-[#717680] hover:text-[#252B37]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            id={Number(member.id)}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
            social={{ linkedin: member.linkedin, twitter: member.twitter }}
          />
        ))}
      </div>
    </>
  );
}
