import type { CollectionConfig } from "payload";
import { isAdmin, isLoggedIn } from "../access";

// Written by /api/leads (server side). Nobody can create entries through the admin or REST API.
export const FormSubmissions: CollectionConfig = {
  slug: "form-submissions",
  labels: { singular: "Form Submission", plural: "Form Submissions" },
  admin: {
    group: "Inbox",
    useAsTitle: "summary",
    defaultColumns: ["summary", "type", "email", "status", "createdAt"],
    description: "Contact, Support, Request a Demo and newsletter submissions from the website.",
    listSearchableFields: ["email", "name", "summary"],
    components: { views: { list: { Component: "/components/admin/inbox-view#InboxView" } } },
  },
  access: { read: isLoggedIn, create: () => false, update: isLoggedIn, delete: isAdmin },
  defaultSort: "-createdAt",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "type",
          type: "select",
          required: true,
          enumName: "enum_submission_type",
          options: [
            { label: "Contact", value: "contact" },
            { label: "Support", value: "support" },
            { label: "Demo request", value: "demo" },
            { label: "Newsletter", value: "newsletter" },
          ],
          admin: { readOnly: true },
        },
        {
          name: "status",
          type: "select",
          required: true,
          defaultValue: "new",
          enumName: "enum_submission_status",
          options: [
            { label: "New", value: "new" },
            { label: "In progress", value: "in-progress" },
            { label: "Done", value: "done" },
            { label: "Spam", value: "spam" },
          ],
        },
      ],
    },
    { name: "summary", type: "text", admin: { readOnly: true } },
    { type: "row", fields: [{ name: "name", type: "text", admin: { readOnly: true } }, { name: "email", type: "email", admin: { readOnly: true } }] },
    { name: "fields", label: "Submitted fields", type: "json", admin: { readOnly: true } },
    { type: "row", fields: [{ name: "source", label: "Page", type: "text", admin: { readOnly: true } }, { name: "forwarded", label: "Sent to webhook", type: "checkbox", admin: { readOnly: true } }] },
    { name: "notes", label: "Internal notes", type: "textarea" },
  ],
};
