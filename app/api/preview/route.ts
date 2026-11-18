import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getCms } from "@/lib/cms/payload";
import { adminUrl } from "@/components/admin/paths";

// Opens a custom page with its latest draft. Only for people signed in to the admin panel.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = (url.searchParams.get("slug") || "").replace(/[^a-z0-9-]/gi, "");
  const payload = await getCms();
  if (!payload || !slug) return new Response("Preview is not available.", { status: 404 });

  const { user } = await payload.auth({ headers: request.headers });
  if (!user) redirect(adminUrl(`/login?redirect=${encodeURIComponent(`/api/preview?slug=${slug}`)}`));

  (await draftMode()).enable();
  redirect(`/${slug}`);
}
