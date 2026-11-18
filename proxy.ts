import { NextResponse, type NextRequest } from "next/server";

// Optional admin subdomain.
// Set ADMIN_HOST in the Vercel project settings (for example "manage.keraeva.com")
// to serve the admin panel from its own subdomain:
// - every page on that host opens the admin (its "/" is the admin dashboard),
// - keraeva.com/website redirects there,
// - the whole host is kept out of search engines.
// Without ADMIN_HOST the admin stays at keraeva.com/website.

const ADMIN_PATH = "/website";
const ADMIN_HOST = (process.env.ADMIN_HOST || "").trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");

// Requests that must reach the app unchanged on the admin host
const PASSTHROUGH = /^\/(api|_next|website)(\/|$)|\.[a-z0-9]+$/i;

export function proxy(request: NextRequest) {
  if (!ADMIN_HOST) return NextResponse.next();

  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const { pathname, search } = request.nextUrl;

  if (host === ADMIN_HOST) {
    if (pathname === "/robots.txt") {
      return new NextResponse("User-agent: *\nDisallow: /\n", { headers: { "Content-Type": "text/plain", "X-Robots-Tag": "noindex, nofollow" } });
    }
    const response = PASSTHROUGH.test(pathname)
      ? NextResponse.next()
      : NextResponse.rewrite(new URL(`${ADMIN_PATH}${pathname === "/" ? "" : pathname}${search}`, request.url));
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  // On the main site the admin lives only on its subdomain
  if (pathname === ADMIN_PATH || pathname.startsWith(`${ADMIN_PATH}/`)) {
    const target = new URL(`${pathname}${search}`, `https://${ADMIN_HOST}`);
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets and image optimisation
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
