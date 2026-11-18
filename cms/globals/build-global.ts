import type { GlobalConfig } from "payload";
import { anyone, isLoggedIn } from "../access";
import { revalidateGlobal } from "../hooks/revalidate";
import { fieldsFromDefaults, humanize } from "../fields/from-defaults";

// One admin screen per page, one tab per section, pre-filled with the current content
export function buildGlobal(options: {
  slug: string;
  label: string;
  group: string;
  description: string;
  defaults: Record<string, Record<string, unknown>>;
}): GlobalConfig {
  return {
    slug: options.slug,
    label: options.label,
    admin: { group: options.group, description: options.description },
    access: { read: anyone, update: isLoggedIn },
    versions: { max: 20 },
    hooks: { afterChange: [revalidateGlobal] },
    fields: [
      {
        type: "tabs",
        tabs: Object.entries(options.defaults).map(([name, section]) => ({
          name,
          label: humanize(name),
          fields: fieldsFromDefaults(section, `${options.slug}.${name}`),
        })),
      },
    ],
  };
}
