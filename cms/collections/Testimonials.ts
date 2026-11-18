import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { orderField } from "../fields/text-list";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Testimonials" },
  admin: {
    group: "Content",
    useAsTitle: "name",
    defaultColumns: ["name", "role", "pages", "active"],
    description: "Only publish testimonials you have permission to use.",
  },
  access: { read: anyone, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "order",
  fields: [
    { type: "row", fields: [{ name: "name", type: "text", required: true }, { name: "role", type: "text", required: true }] },
    { name: "review", label: "Quote", type: "textarea", required: true },
    { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5, required: true },
    {
      name: "pages",
      label: "Show on",
      type: "select",
      hasMany: true,
      required: true,
      enumName: "enum_testimonial_pages",
      options: [
        { label: "Home", value: "home" },
        { label: "Healthcare Professionals", value: "professionals" },
        { label: "Healthcare Organizations", value: "organizations" },
      ],
    },
    { name: "active", label: "Visible on the site", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};
