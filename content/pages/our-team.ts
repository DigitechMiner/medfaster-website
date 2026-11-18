// Our Team page content (Pages → Our Team). The people come from Content → Team.
// The page is only published when Site Settings → Pages → "Show Our Team page" is on.
export const OUR_TEAM_DEFAULTS = {
  seo: {
    title: "Our Team | KeRaeva",
    description: "Meet the team building KeRaeva, the AI-powered healthcare workforce platform for Canada.",
  },
  pageHeader: {
    title: "Our Team",
    parentLabel: "About KeRaeva",
    parentLink: "/about",
    breadcrumb: "Our Team",
  },
  intro: {
    eyebrow: "Our Tech minds",
    heading: "The Minds Behind Product Intelligence",
    body: "Meet the innovators blending Tech and AI to redefine recruitment in healthcare.",
    cta: { label: "View Open positions", link: "/careers" },
  },
  filters: {
    allLabel: "View All",
    boardLabel: "Board Members",
    devLabel: "Developers & Designers",
    marketingLabel: "Marketing & Advertising",
  },
};

export type OurTeamContent = typeof OUR_TEAM_DEFAULTS;
