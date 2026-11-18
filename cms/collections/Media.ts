import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Image", plural: "Media Library" },
  admin: { group: "Content", defaultColumns: ["filename", "alt", "updatedAt"] },
  access: { read: anyone, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: revalidateHooks,
  fields: [
    {
      name: "alt",
      label: "Alt text",
      type: "text",
      admin: {
        description:
          "Describe the image for screen readers. Leave empty only for purely decorative images.",
      },
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
    focalPoint: true,
    // A web-sized WebP copy keeps pages fast
    formatOptions: { format: "webp", options: { quality: 82 } },
    resizeOptions: { width: 2400, withoutEnlargement: true },
  },
};
