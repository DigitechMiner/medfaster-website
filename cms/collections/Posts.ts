import type { CollectionConfig } from "payload";
import { isLoggedIn, publishedOrLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { slugField, textList } from "../fields/text-list";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Blog Post", plural: "Blog Posts" },
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "author", "_status", "publishedDate"],
    description: "Articles on the Blog page. Only published posts appear on the website.",
    components: { beforeListTable: ["/components/admin/status-tabs#StatusTabs"] },
    preview: (doc) => `/blog/${doc.slug}`,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "-publishedDate",
  fields: [
    { name: "title", type: "text", required: true },
    slugField("title"),
    {
      type: "row",
      fields: [
        { name: "author", type: "text", required: true, defaultValue: "KeRaeva Team" },
        {
          name: "publishedDate",
          label: "Publish date",
          type: "date",
          required: true,
          defaultValue: () => new Date().toISOString(),
          admin: { date: { pickerAppearance: "dayOnly", displayFormat: "MMM d, yyyy" } },
        },
      ],
    },
    { name: "excerpt", type: "textarea", required: true, admin: { description: "One or two sentences shown on the blog list." } },
    { name: "coverImage", label: "Cover image", type: "upload", relationTo: "media", required: true },
    textList("tags", { label: "Tags", itemLabel: "Tag" }),
    { name: "featured", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    { name: "content", type: "richText", required: true },
  ],
};
