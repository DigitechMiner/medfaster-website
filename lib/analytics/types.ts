// Shared shapes for the admin Analytics page (components/admin/analytics-view.tsx)

export const RANGES = [7, 30, 90] as const;
export type RangeDays = (typeof RANGES)[number];

export type Row = { label: string; value: number };
export type DayPoint = { date: string; value: number };

export type WebReport = {
  totals: { visitors: number; pageviews: number; sessions?: number };
  daily: DayPoint[]; // visitors per day
  pages: Row[];
  sources: Row[];
  countries: Row[];
  devices: Row[];
};

export type MetaReport = {
  events: Row[]; // event name → count
  daily: DayPoint[]; // PageView per day
  partial: boolean; // true when only part of the period could be read
};

export type InboxReport = {
  total: number;
  byType: Row[];
  daily: DayPoint[];
};

export type SourceResult<T> =
  | { status: "ok"; data: T }
  | { status: "not-connected"; missing: string[] }
  | { status: "error"; message: string };

export function periodStart(days: RangeDays) {
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  return start;
}

/** One entry per day in the period, so days with no visits still show as 0. */
export function fillDays(days: RangeDays, values: Map<string, number>): DayPoint[] {
  const start = periodStart(days);
  return Array.from({ length: days }, (_, i) => {
    const day = new Date(start);
    day.setUTCDate(start.getUTCDate() + i);
    const date = day.toISOString().slice(0, 10);
    return { date, value: values.get(date) ?? 0 };
  });
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
export function countryName(code: string) {
  if (!code) return "Unknown";
  if (code.length !== 2) return code;
  try {
    return regionNames.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

export function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
