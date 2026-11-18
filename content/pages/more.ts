// Editable pages added after Home, Healthcare Professionals and Healthcare Organizations.
// Spread into PAGE_REGISTRY in ./index.ts.
import { ABOUT_DEFAULTS } from "./about";
import { KERAEVA_AI_DEFAULTS } from "./keraeva-ai";
import { OUR_TEAM_DEFAULTS } from "./our-team";
import { COMING_SOON_DEFAULTS } from "./coming-soon";
import { POPUPS_DEFAULTS } from "./popups";

export const MORE_PAGES = {
  about: {
    slug: "page-about",
    label: "About",
    path: "/about",
    description: "Story, journey, mission, why KeRaeva, team preview and closing call to action on the About page.",
    defaults: ABOUT_DEFAULTS,
  },
  keraevaAi: {
    slug: "page-keraeva-ai",
    label: "KeRaeva AI",
    path: "/keraeva-ai",
    description: "Every AI and smart feature section on the KeRaeva AI page.",
    defaults: KERAEVA_AI_DEFAULTS,
  },
  ourTeam: {
    slug: "page-our-team",
    label: "Our Team",
    path: "/our-team",
    description: "Heading, intro and filter labels on the Our Team page. Turn the page on in Site Settings; people are edited under Content → Team.",
    defaults: OUR_TEAM_DEFAULTS,
  },
  comingSoon: {
    slug: "page-coming-soon",
    label: "Coming Soon",
    path: "/coming-soon",
    description: "Image, text and sign-up button on the Coming Soon page.",
    defaults: COMING_SOON_DEFAULTS,
  },
  popups: {
    slug: "page-popups",
    label: "Pop-ups",
    path: "/",
    description: "Text in the Get Started, Get the App and Request a Demo pop-ups. App store links are in Site Settings.",
    defaults: POPUPS_DEFAULTS,
  },
};
