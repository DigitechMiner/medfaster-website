import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { orderField } from "../fields/text-list";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: {
    group: "Content",
    useAsTitle: "question",
    defaultColumns: ["question", "active", "order"],
    description: "Questions on the Support page (also published to search engines as FAQ data).",
  },
  access: { read: anyone, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "order",
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "active", label: "Visible on the site", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};
