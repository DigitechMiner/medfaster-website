// Every page whose text and images are editable in the admin panel.
// Each entry's defaults are today's content; the admin form is built from them.
export type PageEntry = {
  slug: string;
  label: string;
  description: string;
  defaults: object;
};

import { HOME_DEFAULTS } from "./home";

export const PAGE_REGISTRY = {
  home: {
    slug: "page-home",
    label: "Home",
    description: "Text, images, buttons and section visibility on the home page.",
    defaults: HOME_DEFAULTS,
  },
} satisfies Record<string, PageEntry>;
