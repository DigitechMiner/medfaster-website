import type { Field } from "payload";
import { ICON_NAMES } from "../../lib/cms/icon-names";
import { CTA_LINK_HELP } from "../../lib/cms/cta-help";

// Builds admin form fields from a page's default content (content/pages/*.ts),
// so the defaults are the single source for both the form and the website.
//
// Conventions in the defaults:
// - `show: boolean`        -> "Show this section" toggle
// - `icon: "<LucideName>"` -> icon picker
// - keys ending in image/photo/logo/screenshot -> image upload (empty keeps the default image)
// - long strings or strings with line breaks -> multi-line text
// - string arrays -> a list of lines; object arrays -> repeatable items
// - nested objects -> a group of fields

const IMAGE_KEY = /(image|photo|logo|screenshot|avatar|portrait)$/i;
const HEADING_KEY = /heading$/i;

export const ROW_LABEL = "/components/admin/row-label#RowLabel";

const ACCENT_HELP = "Wrap words in **double asterisks** to show them in orange. Start a new line with Enter.";
const PLACEHOLDER_HELP = "Grey hint text shown inside the field until someone types.";

export function humanize(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/\bCtas\b/g, "CTAs")
    .replace(/\bCta\b/g, "CTA")
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bUrl\b/g, "URL")
    .replace(/\bAi\b/g, "AI");
}

// Short, stable database names keep Postgres identifiers under 63 characters
function shortName(path: string) {
  let hash = 5381;
  for (let i = 0; i < path.length; i++) hash = ((hash << 5) + hash + path.charCodeAt(i)) >>> 0;
  return hash.toString(36);
}

// Upload tips for the brand images in Site Settings → Branding
const IMAGE_TIPS: Record<string, string> = {
  logo: "Shown in the header, footer, pop-ups and loading screen. SVG works best; otherwise a wide transparent PNG.",
  whiteLogo: "White version for orange backgrounds and the share image. SVG or transparent PNG.",
  faviconImage: "Browser tab icon. Square SVG, PNG (at least 512×512) or ICO.",
  shareImage: "Shown when a page is shared on social media or in messages. 1200×630 pixels. When empty, an orange card with the white logo is generated.",
  appQrCodeImage: "QR code that opens the app listing, shown next to the app download buttons.",
  placeholderImage: "Faint mark shown while photos load or when one fails. A simple grey SVG works best.",
};

export function isImageKey(key: string) {
  return IMAGE_KEY.test(key);
}

function stringField(key: string, value: string, path: string): Field {
  if (key === "icon") {
    return {
      name: key,
      type: "select",
      defaultValue: value,
      enumName: `e_${shortName(path)}`,
      options: ICON_NAMES.map((name) => ({ label: name, value: name })),
      admin: { description: "Icon from the site's icon set." },
    };
  }
  if (isImageKey(key)) {
    return {
      name: key,
      label: humanize(key),
      type: "upload",
      relationTo: "media",
      admin: {
        description: IMAGE_TIPS[key]
          ? `${IMAGE_TIPS[key]} Leave empty to keep the current image.`
          : `Leave empty to keep the current image (${value}).`,
      },
    };
  }
  if (key === "link" || /(Url|Href)$/.test(key)) {
    return {
      name: key,
      label: humanize(key),
      type: "text",
      defaultValue: value,
      admin: { description: key === "link" ? CTA_LINK_HELP : "Full URL including https://. Leave empty to hide." },
    };
  }
  const long = value.length > 90 || value.includes("\n");
  const description = /Placeholder$/.test(key)
    ? PLACEHOLDER_HELP
    : HEADING_KEY.test(key) || value.includes("**")
      ? ACCENT_HELP
      : undefined;
  return {
    name: key,
    label: humanize(key),
    type: long ? "textarea" : "text",
    defaultValue: value,
    admin: description ? { description } : undefined,
  } as Field;
}

function rowDefault(value: unknown): unknown {
  if (typeof value === "string") return { text: value };
  return stripImages(value);
}

// Upload fields cannot hold a path as their default value
function stripImages(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripImages);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      if (typeof v === "string" && isImageKey(k)) continue;
      out[k] = Array.isArray(v) && v.every((item) => typeof item === "string") ? v.map((text) => ({ text })) : stripImages(v);
    }
    return out;
  }
  return value;
}

// Union of keys across items, so optional fields on later items are editable too
function mergeItemShapes(items: Record<string, unknown>[]) {
  const shape: Record<string, unknown> = {};
  for (const item of items) {
    for (const [k, v] of Object.entries(item)) {
      const current = shape[k];
      const empty = current === undefined || current === "" || (Array.isArray(current) && current.length === 0);
      if (!(k in shape) || empty) shape[k] = v;
    }
  }
  return shape;
}

export function fieldsFromDefaults(defaults: Record<string, unknown>, path = ""): Field[] {
  const fields: Field[] = [];

  for (const [key, value] of Object.entries(defaults)) {
    const fieldPath = `${path}.${key}`;

    if (key === "show" && typeof value === "boolean") {
      fields.push({
        name: key,
        label: "Show this section",
        type: "checkbox",
        defaultValue: value,
      });
    } else if (typeof value === "boolean") {
      fields.push({ name: key, label: humanize(key), type: "checkbox", defaultValue: value });
    } else if (typeof value === "number") {
      fields.push({ name: key, label: humanize(key), type: "number", defaultValue: value });
    } else if (typeof value === "string") {
      fields.push(stringField(key, value, fieldPath));
    } else if (Array.isArray(value)) {
      const strings = value.length === 0 || value.every((item) => typeof item === "string");
      const longText = strings && (value as string[]).some((item) => item.length > 90);
      fields.push({
        name: key,
        label: humanize(key),
        type: "array",
        dbName: `a_${shortName(fieldPath)}`,
        labels: { singular: "Item", plural: humanize(key) },
        defaultValue: value.map(rowDefault),
        admin: { initCollapsed: !strings, components: { RowLabel: ROW_LABEL } },
        fields: strings
          ? [{ name: "text", label: "Text", type: longText ? "textarea" : "text", required: true } as Field]
          : fieldsFromDefaults(mergeItemShapes(value as Record<string, unknown>[]), fieldPath),
      });
    } else if (value && typeof value === "object") {
      const nested = value as Record<string, unknown>;
      fields.push({
        name: key,
        label: humanize(key),
        type: "group",
        admin: typeof nested.show === "boolean" ? { description: undefined } : undefined,
        fields: fieldsFromDefaults(nested, fieldPath),
      });
    }
  }

  return fields;
}
