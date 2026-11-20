import type { CollectionConfig, TextFieldSingleValidation } from "payload";
import { isLoggedIn, publishedOrLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { slugField } from "../fields/text-list";
import { PAGE_BLOCKS } from "../blocks";

// Addresses already used by the website's own pages and system routes
export const RESERVED_SLUGS = [
  "about",
  "blog",
  "careers",
  "coming-soon",
  "contact-us",
  "keraeva-ai",
  "medical-organizations",
  "medical-professionals",
  "mobile-about-us",
  "mobile-privacy-policy",
  "mobile-terms-conditions",
  "our-team",
  "privacy-policy",
  "subscriptions",
  "support",
  "terms-conditions",
  "website",
  "admin",
  "api",
  "_next",
  "images",
  "img",
  "fonts",
  "robots.txt",
  "sitemap.xml",
  "opengraph-image",
  "favicon.ico",
];

const validateSlug: TextFieldSingleValidation = (value) => {
  if (!value) return "Enter the page address.";
  if (RESERVED_SLUGS.includes(value)) return `"/${value}" is already used by the website. Choose another address.`;
  return true;
};

const slug = slugField("title");

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Custom page", plural: "Custom pages" },
  admin: {
    group: "Pages",
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    description: "Pages built from sections. Only published pages appear on the website.",
    preview: (doc) => `/api/preview?slug=${encodeURIComponent(String(doc.slug ?? ""))}`,
    components: {
      views: { list: { Component: "/components/admin/redirect-to-pages#RedirectToPages" } },
      // Click text or images in Live Preview to jump to their field
      edit: { beforeDocumentControls: ["/components/admin/click-to-edit#ClickToEdit", "/components/admin/visual-editor#VisualEditor"] },
    },
  },
  versions: { drafts: { autosave: { interval: 1000 } }, maxPerDoc: 25 },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "title",
  fields: [
    { name: "title", type: "text", required: true, admin: { description: "Shown in the admin panel and used for the address when it is left empty." } },
    {
      ...slug,
      validate: validateSlug,
      admin: { ...slug.admin, description: "The page address: keraeva.com/<address>. Lowercase words separated by hyphens. Filled from the title if left empty." },
    },
    {
      name: "showInFooter",
      label: "Link in footer",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Adds this page to a “More” column in the footer." },
    },
    {
      name: "sections",
      type: "blocks",
      blocks: PAGE_BLOCKS,
      labels: { singular: "Section", plural: "Sections" },
      admin: { initCollapsed: true, description: "Add sections and drag them into order. Each one is drawn with the website's own design." },
    },
    {
      name: "seo",
      label: "Search & sharing",
      type: "group",
      fields: [
        { name: "title", label: "Page title", type: "text", admin: { description: "Browser tab and search result title. Uses the page title when empty." } },
        { name: "description", type: "textarea", admin: { description: "One or two sentences for search results and link previews." } },
        { name: "noindex", label: "Hide from search engines", type: "checkbox", defaultValue: false },
      ],
    },
  ],
};
