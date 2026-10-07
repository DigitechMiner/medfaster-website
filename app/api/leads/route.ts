import { NextResponse } from "next/server";

// Receives demo requests and newsletter sign-ups and forwards them to
// LEADS_WEBHOOK_URL (e.g. a CRM, Zapier/Make, Slack or Google Apps Script hook).

type LeadType = "demo" | "newsletter";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 1000;

const REQUIRED_FIELDS: Record<LeadType, string[]> = {
  demo: ["name", "email", "organization"],
  newsletter: ["email"],
};

const ALLOWED_FIELDS: Record<LeadType, string[]> = {
  demo: ["name", "email", "phone", "organization", "role", "organizationType", "province", "message"],
  newsletter: ["email", "audience"],
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

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { message: "This form isn't connected yet. Please email support@keraeva.com." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        ...fields,
        source: request.headers.get("referer") ?? "",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
  } catch (error) {
    console.error("Lead webhook failed:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again or email support@keraeva.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thank you." }, { status: 200 });
}
