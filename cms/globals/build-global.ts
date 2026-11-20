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
  /** Draft → Publish with autosave, used by Live Preview */
  drafts?: boolean;
}): GlobalConfig {
  return {
    slug: options.slug,
    label: options.label,
    admin: {
      group: options.group,
      description: options.description,
      // Click text or images in Live Preview to jump to their field
      ...(options.drafts ? { components: { elements: { beforeDocumentControls: ["/components/admin/click-to-edit#ClickToEdit", "/components/admin/visual-editor#VisualEditor"] } } } : {}),
    },
    access: { read: anyone, update: isLoggedIn },
    versions: options.drafts ? { max: 20, drafts: { autosave: { interval: 1000 } } } : { max: 20 },
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
