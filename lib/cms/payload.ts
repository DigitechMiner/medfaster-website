import type { Payload } from "payload";

// The website works without the CMS: when it is not configured (or the
// database is unreachable) every loader falls back to the code defaults.
export const cmsConfigured = Boolean((process.env.DATABASE_URI || process.env.DATABASE_URL || process.env.POSTGRES_URL) && process.env.PAYLOAD_SECRET);

let warned = false;

export async function getCms(): Promise<Payload | null> {
  if (!cmsConfigured) return null;
  try {
    const [{ getPayload }, { default: config }] = await Promise.all([import("payload"), import("@payload-config")]);
    return await getPayload({ config });
  } catch (error) {
    if (!warned) {
      warned = true;
      console.error("[cms] unavailable, using built-in content:", error);
    }
    return null;
  }
}

// Runs a CMS query, falling back when the CMS is unavailable or the query fails
export async function fromCms<T>(fallback: T, query: (payload: Payload) => Promise<T>): Promise<T> {
  const payload = await getCms();
  if (!payload) return fallback;
  try {
    return await query(payload);
  } catch (error) {
    console.error("[cms] query failed, using built-in content:", error);
    return fallback;
  }
}

/** True while an admin is previewing drafts (Live Preview or a preview link). */
export async function isPreview() {
  try {
    const { draftMode } = await import("next/headers");
    return (await draftMode()).isEnabled;
  } catch {
    return false; // outside a request (build scripts, seeding)
  }
}
