// Small formatting helpers shared by the admin views

const TZ = "America/Edmonton";

export function relativeTime(value?: string | Date | null) {
  if (!value) return "Never";
  const date = new Date(value);
  const diff = Date.now() - date.getTime();
  const minute = 60_000, hour = 60 * minute, day = 24 * hour;
  if (diff < minute) return "Just now";
  if (diff < hour) return `${Math.floor(diff / minute)} min ago`;
  if (diff < day) return `${Math.floor(diff / hour)} h ago`;
  if (diff < 2 * day) return "Yesterday";
  if (diff < 7 * day) return `${Math.floor(diff / day)} days ago`;
  return date.toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric", timeZone: TZ });
}

export function dateTime(value?: string | Date | null) {
  if (!value) return "";
  return new Date(value).toLocaleString("en-CA", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: TZ });
}

export function greeting() {
  const hour = Number(new Date().toLocaleString("en-CA", { hour: "numeric", hour12: false, timeZone: TZ }));
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function initials(name?: string | null) {
  const source = (name || "?").trim();
  if (source.includes("@")) return source[0].toUpperCase();
  return source.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

export function fileSize(bytes = 0) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const SUBMISSION_TYPES: Record<string, { label: string; tone: string }> = {
  contact: { label: "Contact", tone: "brand" },
  support: { label: "Support", tone: "warning" },
  demo: { label: "Demo request", tone: "info" },
  newsletter: { label: "Newsletter", tone: "neutral" },
};

export const SUBMISSION_STATUS: Record<string, { label: string; tone: string }> = {
  new: { label: "New", tone: "brand" },
  "in-progress": { label: "In progress", tone: "info" },
  done: { label: "Done", tone: "success" },
  spam: { label: "Spam", tone: "neutral" },
};

export function daysAgoISO(days: number) {
  return new Date(Date.now() - days * 24 * 3600 * 1000).toISOString();
}
