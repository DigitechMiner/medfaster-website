import type { CollectionConfig } from "payload";
import { isAdmin, isAdminField, isAdminOrSelf } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "User", plural: "Users" },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "roles"],
    group: "Settings",
  },
  auth: {
    tokenExpiration: 60 * 60 * 8, // 8 hours
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
    admin: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    // The very first account becomes an admin
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== "create") return data;
        const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true });
        if (totalDocs === 0) return { ...data, roles: ["admin"] };
        return data;
      },
    ],
  },
  fields: [
    { name: "name", type: "text" },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: ["editor"],
      options: [
        { label: "Admin (content, form submissions and users)", value: "admin" },
        { label: "Editor (content and form submissions)", value: "editor" },
      ],
      access: { create: isAdminField, update: isAdminField },
      saveToJWT: true,
    },
  ],
};
