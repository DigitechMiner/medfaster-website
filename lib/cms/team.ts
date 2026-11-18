import { cache } from "react";
import { TEAM } from "@/content/team";
import { mediaUrl } from "./merge";
import { fromCms } from "./payload";

export type TeamMember = {
  id: number | string;
  name: string;
  role: string;
  category: "board" | "dev" | "marketing";
  image: string | null;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  showOnAbout: boolean;
};

const FALLBACK: TeamMember[] = TEAM.map((member, index) => ({ id: index + 1, ...member }));

// Visible team members from Content → Team, or the built-in list until it has entries
export const getTeam = cache(
  async (): Promise<TeamMember[]> =>
    fromCms(FALLBACK, async (payload) => {
      const { totalDocs } = await payload.count({ collection: "team-members", overrideAccess: true });
      if (totalDocs === 0) return FALLBACK;
      const result = await payload.find({ collection: "team-members", where: { active: { equals: true } }, sort: "order", depth: 1, limit: 100 });
      return result.docs.map((doc) => ({
        id: doc.id,
        name: doc.name,
        role: doc.role,
        category: doc.department,
        image: mediaUrl(doc.photo) ?? null,
        bio: doc.bio || undefined,
        linkedin: doc.linkedin || undefined,
        twitter: doc.twitter || undefined,
        showOnAbout: Boolean(doc.showOnAbout),
      }));
    })
);
