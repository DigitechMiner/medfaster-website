import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getCms } from "@/lib/cms/payload";
import { importWebsiteContent } from "@/lib/cms/import-content";
import { hasRole } from "@/cms/access";

// Imports the website's built-in content into the CMS (admin dashboard button).
// Admins only; never overwrites what editors have already saved.
export const maxDuration = 300;

export async function POST(request: Request) {
  const payload = await getCms();
  if (!payload) return NextResponse.json({ error: "The CMS is not configured." }, { status: 503 });

  const { user } = await payload.auth({ headers: request.headers });
  if (!hasRole(user as { roles?: string[] | null } | null, "admin")) {
    return NextResponse.json({ error: "Only admins can import content." }, { status: 403 });
  }

  try {
    const result = await importWebsiteContent(payload, { origin: new URL(request.url).origin });
    revalidatePath("/", "layout");
    return NextResponse.json(result);
  } catch (error) {
    payload.logger.error({ err: error, msg: "[cms] content import failed" });
    return NextResponse.json({ error: "The import stopped part-way. Check the server logs, then try again." }, { status: 500 });
  }
}
