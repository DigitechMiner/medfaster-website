import type { Block, Field } from "payload";
import { ICON_NAMES } from "../../lib/cms/icon-names";
import { CTA_LINK_HELP } from "../../lib/cms/cta-help";
import { textList } from "../fields/text-list";

// Sections an editor can stack to build a custom page (cms/collections/Pages.ts).
// Each one is drawn on the website by components/blocks/*.

const ACCENT_HELP = "Wrap words in **double asterisks** to show them in orange. Start a new line with Enter.";
const ROW_LABEL = "/components/admin/row-label#RowLabel";

const heading = (required = false): Field => ({ name: "heading", type: "text", required, admin: { description: ACCENT_HELP } });
const intro: Field = { name: "intro", label: "Intro text", type: "textarea" };

function button(name: string, label: string): Field {
  return {
    name,
    label,
    type: "group",
    admin: { description: "Leave the label empty to hide this button." },
    fields: [
      {
        type: "row",
        fields: [
          { name: "label", type: "text" },
          { name: "link", type: "text", admin: { description: CTA_LINK_HELP } },
        ],
      },
    ],
  };
}

const icon = (name = "icon"): Field => ({
  name,
  type: "select",
  defaultValue: "CheckCircle2",
  options: ICON_NAMES.map((value) => ({ label: value, value })),
  admin: { description: "Icon from the site's icon set." },
});

const background = (defaultValue: "white" | "grey" | "orange"): Field => ({
  name: "background",
  type: "select",
  defaultValue,
  options: [
    { label: "White", value: "white" },
    { label: "Light grey", value: "grey" },
    { label: "Orange pattern", value: "orange" },
  ],
  admin: { description: "Section background." },
});

export const HeroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero", plural: "Heroes" },
  imageAltText: "Page title with text, buttons and an optional image",
  fields: [
    heading(true),
    { name: "body", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media", admin: { description: "Optional. Shown beside the text." } },
    button("primaryButton", "Main button"),
    button("secondaryButton", "Second button"),
    background("white"),
  ],
};

export const TextBlock: Block = {
  slug: "text",
  labels: { singular: "Text", plural: "Text sections" },
  imageAltText: "Heading and formatted text",
  fields: [heading(), { name: "content", type: "richText", required: true }, background("white")],
};

export const ImageTextBlock: Block = {
  slug: "imageText",
  labels: { singular: "Image + text", plural: "Image + text sections" },
  imageAltText: "Image beside a heading, text and bullet points",
  fields: [
    heading(true),
    { name: "body", type: "textarea" },
    textList("bullets", { label: "Bullet points", itemLabel: "Point" }),
    { name: "image", type: "upload", relationTo: "media", required: true },
    {
      name: "imagePosition",
      label: "Image side",
      type: "select",
      defaultValue: "right",
      options: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
    },
    button("button", "Button"),
    background("white"),
  ],
};

export const FeatureCardsBlock: Block = {
  slug: "featureCards",
  labels: { singular: "Feature cards", plural: "Feature card sections" },
  imageAltText: "A grid of cards with an icon, title and text",
  fields: [
    heading(true),
    intro,
    {
      name: "columns",
      label: "Cards per row",
      type: "select",
      defaultValue: "3",
      options: [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
    },
    {
      name: "cards",
      type: "array",
      minRows: 1,
      labels: { singular: "Card", plural: "Cards" },
      admin: { components: { RowLabel: ROW_LABEL } },
      fields: [icon(), { name: "title", type: "text", required: true }, { name: "description", type: "textarea" }],
    },
    background("white"),
  ],
};

export const StepsBlock: Block = {
  slug: "steps",
  labels: { singular: "Steps", plural: "Steps sections" },
  imageAltText: "Numbered steps on the orange background",
  fields: [
    heading(true),
    intro,
    {
      name: "steps",
      type: "array",
      minRows: 1,
      labels: { singular: "Step", plural: "Steps" },
      admin: { components: { RowLabel: ROW_LABEL } },
      fields: [icon(), { name: "title", type: "text", required: true }, { name: "description", type: "textarea" }],
    },
    button("button", "Button"),
    background("orange"),
  ],
};

export const FaqBlock: Block = {
  slug: "faq",
  labels: { singular: "FAQs", plural: "FAQ sections" },
  imageAltText: "Questions that open to show their answers",
  fields: [
    { ...heading(), defaultValue: "Frequently Asked **Questions**" } as Field,
    intro,
    {
      name: "items",
      label: "Questions",
      type: "array",
      minRows: 1,
      labels: { singular: "Question", plural: "Questions" },
      admin: { components: { RowLabel: ROW_LABEL } },
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    background("grey"),
  ],
};

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  labels: { singular: "Testimonials", plural: "Testimonial sections" },
  imageAltText: "Quotes from the Testimonials list",
  fields: [
    { ...heading(), defaultValue: "**Real Results,** Real Partnerships" } as Field,
    intro,
    {
      name: "limit",
      label: "How many",
      type: "number",
      defaultValue: 4,
      min: 1,
      max: 12,
      admin: { description: "Visible testimonials from Content → Testimonials, in their set order." },
    },
  ],
};

export const JobOpeningsBlock: Block = {
  slug: "jobOpenings",
  labels: { singular: "Job openings", plural: "Job opening sections" },
  imageAltText: "Cards for the published job openings",
  fields: [
    { ...heading(), defaultValue: "Open **Positions**" } as Field,
    intro,
    {
      name: "limit",
      label: "How many",
      type: "number",
      defaultValue: 6,
      min: 1,
      max: 24,
      admin: { description: "Published jobs from Content → Job Openings, in their set order." },
    },
    button("button", "Button"),
  ],
};

export const CtaBlock: Block = {
  slug: "cta",
  labels: { singular: "Call to action", plural: "Calls to action" },
  imageAltText: "Heading, text and a button on the orange background",
  fields: [heading(true), { name: "body", type: "textarea" }, button("button", "Button"), background("orange")],
};

export const PAGE_BLOCKS: Block[] = [
  HeroBlock,
  TextBlock,
  ImageTextBlock,
  FeatureCardsBlock,
  StepsBlock,
  FaqBlock,
  TestimonialsBlock,
  JobOpeningsBlock,
  CtaBlock,
];
