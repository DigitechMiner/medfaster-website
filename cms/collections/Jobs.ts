import type { CollectionConfig } from "payload";
import { isLoggedIn, publishedOrLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { orderField, slugField, textList } from "../fields/text-list";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  labels: { singular: "Job Opening", plural: "Job Openings" },
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "location", "type", "_status", "postedAt"],
    description: "Roles listed on the Careers page. Only published jobs appear on the website.",
    components: { beforeListTable: ["/components/admin/status-tabs#StatusTabs"] },
    preview: (doc) => `/careers/${doc.slug}`,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    slugField("title"),
    orderField,
    {
      type: "row",
      fields: [
        { name: "company", type: "text", required: true, defaultValue: "KeRaeva" },
        { name: "location", type: "text", required: true, admin: { placeholder: "Calgary, Alberta, Canada" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "type", label: "Employment type", type: "text", required: true, admin: { placeholder: "Full-time" } },
        { name: "mode", label: "Work mode", type: "text", required: true, admin: { placeholder: "On-site" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "experience", label: "Openings / experience", type: "text", required: true, admin: { placeholder: "25 openings" } },
        { name: "salary", type: "text", admin: { description: "Hidden when empty." } },
      ],
    },
    {
      name: "postedAt",
      label: "Posted on",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { date: { pickerAppearance: "dayOnly", displayFormat: "MMM d, yyyy" } },
    },
    {
      name: "applyUrl",
      label: "Apply link",
      type: "text",
      admin: { description: "Job board URL or mailto: link. The Apply button is hidden when empty." },
    },
    {
      name: "details",
      label: "Job page details",
      type: "group",
      admin: { description: "Shown on the job's own page. Leave the summary empty to list the job without a detail page." },
      fields: [
        textList("summary", { label: "Summary paragraphs", itemLabel: "Paragraph", long: true }),
        textList("whyJoin", { label: "Why join", itemLabel: "Point" }),
        { name: "whyKeRaevaIntro", label: "Why KeRaeva (intro)", type: "textarea" },
        textList("whyKeRaeva", { label: "Why KeRaeva (points)", itemLabel: "Point" }),
        textList("documents", { label: "Documents required", itemLabel: "Document" }),
        textList("skills", { label: "Skills", itemLabel: "Skill" }),
        textList("howToApply", { label: "How to apply (steps)", itemLabel: "Step" }),
      ],
    },
  ],
};
