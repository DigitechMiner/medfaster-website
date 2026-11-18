// Every page whose text and images are editable in the admin panel.
// Each entry's defaults are today's content; the admin form is built from them.
export type PageEntry = {
  slug: string;
  label: string;
  // Where the page lives on the website
  path: string;
  description: string;
  defaults: object;
};

import { HOME_DEFAULTS } from "./home";
import { MORE_PAGES } from "./more";
import { PROFESSIONALS_DEFAULTS } from "./professionals";
import { ORGANIZATIONS_DEFAULTS } from "./organizations";
import { CONTACT_DEFAULTS } from "./contact";
import { SUPPORT_DEFAULTS } from "./support";
import { PRICING_DEFAULTS } from "./pricing";
import { CAREERS_DEFAULTS } from "./careers";
import { BLOG_DEFAULTS } from "./blog";

export const PAGE_REGISTRY = {
  home: {
    slug: "page-home",
    label: "Home",
    path: "/",
    description: "Text, images, buttons and section visibility on the home page.",
    defaults: HOME_DEFAULTS,
  },
  professionals: {
    slug: "page-professionals",
    label: "Healthcare Professionals",
    path: "/medical-professionals",
    description: "Text, images, buttons and section visibility on the Healthcare Professionals page.",
    defaults: PROFESSIONALS_DEFAULTS,
  },
  organizations: {
    slug: "page-organizations",
    label: "Healthcare Organizations",
    path: "/medical-organizations",
    description: "Text, images, buttons and section visibility on the Healthcare Organizations page.",
    defaults: ORGANIZATIONS_DEFAULTS,
  },
  contact: {
    slug: "page-contact",
    label: "Contact Us",
    path: "/contact-us",
    description: "Title, introduction and labels on the Contact Us page. The phone number and location are in Site Settings.",
    defaults: CONTACT_DEFAULTS,
  },
  support: {
    slug: "page-support",
    label: "Support",
    path: "/support",
    description: "Title, introduction, form heading and FAQ heading on the Support page. Questions are under Content → FAQs.",
    defaults: SUPPORT_DEFAULTS,
  },
  pricing: {
    slug: "page-pricing",
    label: "Pricing",
    path: "/subscriptions",
    description: "Heading and plan cards on the Pricing page.",
    defaults: PRICING_DEFAULTS,
  },
  careers: {
    slug: "page-careers",
    label: "Careers",
    path: "/careers",
    description: "Title, empty state, job page headings and closing banner on Careers. Openings are under Content → Job Openings.",
    defaults: CAREERS_DEFAULTS,
  },
  blog: {
    slug: "page-blog",
    label: "Blog",
    path: "/blog",
    description: "Title and section text on the Blog page. Articles are under Content → Blog Posts.",
    defaults: BLOG_DEFAULTS,
  },
  ...MORE_PAGES,
} satisfies Record<string, PageEntry>;
