import type { CollectionConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateHooks } from "../hooks/revalidate";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Image", plural: "Media Library" },
  admin: {
    group: "Content",
    defaultColumns: ["filename", "alt", "updatedAt"],
    components: { views: { list: { Component: "/components/admin/media-view#MediaView" } } },
  },
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
    // Files keep their own format (a PNG favicon or share image must stay PNG);
    // the website serves optimised copies of photos when it displays them.
    // Very large photos are scaled down to 2400px wide.
    resizeOptions: { width: 2400, withoutEnlargement: true },
  },
};
