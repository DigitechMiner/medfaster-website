import { NextResponse } from "next/server";
import { getCms } from "@/lib/cms/payload";

// Receives demo requests, newsletter sign-ups, contact enquiries and support
// requests. Each one is saved to the admin Inbox (Form Submissions) when the
// CMS is configured, and forwarded to LEADS_WEBHOOK_URL (e.g. a CRM,
// Zapier/Make, Slack or Google Apps Script hook) when that is set.

type LeadType = "demo" | "newsletter" | "contact" | "support";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 1000;

const REQUIRED_FIELDS: Record<LeadType, string[]> = {
  demo: ["name", "email", "organization"],
  newsletter: ["email"],
  contact: ["name", "email", "message"],
  support: ["issueType", "subject", "email", "description"],
};

const ALLOWED_FIELDS: Record<LeadType, string[]> = {
  demo: ["name", "email", "phone", "organization", "role", "organizationType", "province", "message"],
  newsletter: ["email", "audience"],
  contact: ["name", "email", "phone", "enquiryType", "message"],
  support: ["issueType", "subject", "email", "phone", "description"],
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "website" field
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ message: "Thank you." }, { status: 200 });
  }

  const type = body.type as LeadType;
  if (!(type in REQUIRED_FIELDS)) {
    return NextResponse.json({ message: "Invalid request type." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const key of ALLOWED_FIELDS[type]) {
    const value = body[key];
    if (typeof value === "string" && value.trim() !== "") {
      fields[key] = value.trim().slice(0, MAX_FIELD_LENGTH);
    }
  }

  const missing = REQUIRED_FIELDS[type].filter((key) => !fields[key]);
  if (missing.length > 0) {
    return NextResponse.json({ message: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(fields.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const source = request.headers.get("referer") ?? "";
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  const payload = await getCms();

  if (!webhookUrl && !payload) {
    return NextResponse.json(
      { message: "This form isn't connected yet. Please email support@keraeva.com." },
      { status: 503 }
    );
  }

  // 1. Admin Inbox
  let savedId: string | number | undefined;
  if (payload) {
    try {
      const doc = await payload.create({
        collection: "form-submissions",
        overrideAccess: true,
        data: {
          type,
          status: "new",
          name: fields.name || undefined,
          email: fields.email,
          summary: summarize(type, fields),
          fields,
          source,
          forwarded: false,
        },
      });
      savedId = doc.id;
    } catch (error) {
      console.error("Saving the submission to the Inbox failed:", error);
    }
  }

  // 2. Webhook
  let forwarded = false;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...fields, source, submittedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
      forwarded = true;
    } catch (error) {
      console.error("Lead webhook failed:", error);
    }
  }

  if (savedId !== undefined && forwarded && payload) {
    await payload.update({ collection: "form-submissions", id: savedId, data: { forwarded: true }, overrideAccess: true }).catch(() => undefined);
  }

  // Only report success when the submission actually reached the team
  if (savedId === undefined && !forwarded) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again or email support@keraeva.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thank you." }, { status: 200 });
}

// One-line preview shown in the Inbox list
function summarize(type: LeadType, fields: Record<string, string>) {
  const clip = (text = "", max = 140) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);
  switch (type) {
    case "support":
      return clip(`${fields.issueType ? `${fields.issueType}: ` : ""}${fields.subject}`);
    case "demo":
      return clip([fields.organization, fields.message].filter(Boolean).join(" · ") || "Demo request");
    case "newsletter":
      return fields.audience ? `Subscribed from ${fields.audience}` : "Subscribed to updates";
    default:
      return clip(fields.message);
  }
}
