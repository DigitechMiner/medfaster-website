import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";
import { orderField } from "../fields/text-list";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: { singular: "Team Member", plural: "Team" },
  admin: {
    group: "Content",
    useAsTitle: "name",
    defaultColumns: ["name", "role", "showOnAbout", "active"],
    description: "People on the Our Team page and the About page team preview. Use genuine photos only.",
  },
  access: { read: anyone, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  defaultSort: "order",
  fields: [
    { type: "row", fields: [{ name: "name", type: "text", required: true }, { name: "role", type: "text", required: true }] },
    {
      name: "department",
      label: "Team (filter tab)",
      type: "select",
      required: true,
      defaultValue: "dev",
      enumName: "enum_team_department",
      options: [
        { label: "Board Members", value: "board" },
        { label: "Developers & Designers", value: "dev" },
        { label: "Marketing & Advertising", value: "marketing" },
      ],
    },
    { name: "photo", type: "upload", relationTo: "media", admin: { description: "Leave empty to show initials." } },
    { name: "bio", type: "textarea" },
    {
      type: "row",
      fields: [
        { name: "linkedin", label: "LinkedIn profile URL", type: "text" },
        { name: "twitter", label: "X / Twitter profile URL", type: "text" },
      ],
    },
    { name: "showOnAbout", label: "Show on About page", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    { name: "active", label: "Visible on the site", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};
