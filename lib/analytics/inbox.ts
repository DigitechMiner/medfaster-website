import type { BasePayload, TypedUser } from "payload";
import { errorMessage, fillDays, periodStart, type InboxReport, type RangeDays, type SourceResult } from "./types";

const TYPE_LABELS: Record<string, string> = {
  demo: "Demo requests",
  contact: "Contact enquiries",
  support: "Support requests",
  newsletter: "Newsletter sign-ups",
};

// Form submissions saved to the admin Inbox during the period
export async function inboxReport(days: RangeDays, payload: BasePayload, user: TypedUser | null): Promise<SourceResult<InboxReport>> {
  try {
    const result = await payload.find({
      collection: "form-submissions",
      where: { createdAt: { greater_than_equal: periodStart(days).toISOString() } },
      select: { type: true, createdAt: true },
      depth: 0,
      limit: 5000,
      pagination: false,
      user,
      overrideAccess: false,
    });
    const byType = new Map<string, number>();
    const byDay = new Map<string, number>();
    for (const doc of result.docs as { type?: string; createdAt: string }[]) {
      const type = doc.type ?? "other";
      byType.set(type, (byType.get(type) ?? 0) + 1);
      const day = doc.createdAt.slice(0, 10);
      byDay.set(day, (byDay.get(day) ?? 0) + 1);
    }
    return {
      status: "ok",
      data: {
        total: result.docs.length,
        byType: Object.keys(TYPE_LABELS).map((type) => ({ label: TYPE_LABELS[type], value: byType.get(type) ?? 0 })),
        daily: fillDays(days, byDay),
      },
    };
  } catch (error) {
    return { status: "error", message: errorMessage(error) };
  }
}
