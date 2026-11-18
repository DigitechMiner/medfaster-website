import type { ArrayField, Field } from "payload";

// A simple ordered list of lines (bullet points, paragraphs, tags)
export function textList(
  name: string,
  options: { label?: string; itemLabel?: string; long?: boolean; description?: string; dbName?: string } = {}
): ArrayField {
  return {
    name,
    label: options.label,
    type: "array",
    dbName: options.dbName,
    labels: { singular: options.itemLabel ?? "Item", plural: options.label ?? "Items" },
    admin: { description: options.description, initCollapsed: false, components: { RowLabel: "/components/admin/row-label#RowLabel" } },
    fields: [{ name: "text", label: options.itemLabel ?? "Text", type: options.long ? "textarea" : "text", required: true } as Field],
  };
}

export function slugField(from: string) {
  return {
    name: "slug",
    type: "text" as const,
    required: true,
    unique: true,
    index: true,
    admin: {
      position: "sidebar" as const,
      description: `Used in the page URL. Lowercase words separated by hyphens. Filled from the ${from} if left empty.`,
    },
    hooks: {
      beforeValidate: [
        ({ value, data }: { value?: string; data?: Record<string, unknown> }) => {
          const source = value || (data?.[from] as string | undefined) || "";
          return source
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/[\s_]+/g, "-")
            .replace(/-+/g, "-");
        },
      ],
    },
  };
}

export const orderField = {
  name: "order",
  type: "number" as const,
  defaultValue: 0,
  admin: { position: "sidebar" as const, description: "Lower numbers appear first." },
};
