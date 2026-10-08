export type LeadPayload =
  | {
      type: "demo";
      name: string;
      email: string;
      organization: string;
      phone?: string;
      role?: string;
      organizationType?: string;
      province?: string;
      message?: string;
      website?: string;
    }
  | { type: "newsletter"; email: string; audience?: string; website?: string }
  | {
      type: "contact";
      name: string;
      email: string;
      message: string;
      phone?: string;
      enquiryType?: string;
      website?: string;
    }
  | {
      type: "support";
      issueType: string;
      subject: string;
      email: string;
      description: string;
      phone?: string;
      website?: string;
    };

export interface LeadResult {
  ok: boolean;
  message: string;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      message: data.message ?? (response.ok ? "Thank you." : "Something went wrong. Please try again."),
    };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}
