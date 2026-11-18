import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";

const CONTENT_HELP =
  'Separate paragraphs with a blank line. Start a line with "• " or "– " to make it a bullet point.';

export const LegalDocuments: CollectionConfig = {
  slug: "legal-documents",
  labels: { singular: "Legal Page", plural: "Legal Pages" },
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "document", "lastUpdated"],
    description: "Privacy Policy and Terms & Conditions (website and in-app versions use the same text). Have changes reviewed before publishing.",
  },
  versions: { maxPerDoc: 50 },
  access: { read: anyone, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  fields: [
    {
      name: "document",
      type: "select",
      required: true,
      unique: true,
      enumName: "enum_legal_document",
      options: [
        { label: "Privacy Policy", value: "privacy-policy" },
        { label: "Terms & Conditions", value: "terms-conditions" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "title", type: "text", required: true },
    {
      type: "row",
      fields: [
        { name: "effectiveDate", label: "Effective date", type: "text", required: true },
        { name: "lastUpdated", label: "Last updated", type: "text", required: true },
      ],
    },
    { name: "summary", label: "Summary box", type: "textarea", admin: { description: CONTENT_HELP } },
    {
      name: "parts",
      type: "array",
      dbName: "legal_parts",
      labels: { singular: "Part", plural: "Parts" },
      admin: { components: { RowLabel: "/components/admin/row-label#RowLabel" } },
      fields: [
        { name: "title", type: "text" },
        { name: "intro", type: "textarea" },
        {
          name: "sections",
          type: "array",
          dbName: "legal_sections",
          labels: { singular: "Section", plural: "Sections" },
          admin: { initCollapsed: true, components: { RowLabel: "/components/admin/row-label#RowLabel" } },
          fields: [
            { name: "anchor", label: "Anchor ID", type: "text", required: true, admin: { description: "Used for links to this section, e.g. privacy-policy#scope" } },
            { name: "title", type: "text", required: true },
            { name: "content", type: "textarea", required: true, admin: { description: CONTENT_HELP } },
          ],
        },
      ],
    },
  ],
};
