import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getCms } from "@/lib/cms/payload";
import { adminUrl } from "@/components/admin/paths";

// Opens a page with its latest draft (Live Preview and "Preview" buttons).
// Only for people signed in to the admin panel.
//   /api/preview?path=/about      any page on the site
//   /api/preview?slug=my-page     a custom page (older links)
export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = (url.searchParams.get("slug") || "").replace(/[^a-z0-9-]/gi, "");
  const path = slug ? `/${slug}` : safePath(url.searchParams.get("path"));
  const payload = await getCms();
  if (!payload || !path) return new Response("Preview is not available.", { status: 404 });

  const { user } = await payload.auth({ headers: request.headers });
  if (!user) redirect(adminUrl(`/login?redirect=${encodeURIComponent(`${url.pathname}${url.search}`)}`));

  (await draftMode()).enable();
  redirect(path);
}

// A path on this site only (never another domain)
function safePath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return null;
  return value;
}
