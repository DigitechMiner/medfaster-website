import Link from "next/link";
import { ExternalLink, Globe, LogOut } from "lucide-react";
import { NavHamburger, NavWrapper } from "@payloadcms/next/client";
import type { ServerProps } from "payload";
import { KeRaevaLogo } from "./logo";
import { NavLinks, type NavGroup } from "./nav-links";
import { adminUrl } from "./paths";

type NavProps = ServerProps & {
  visibleEntities?: { collections: string[]; globals: string[] };
};

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com").replace(/\/$/, "");

function initials(name?: string | null, email?: string | null) {
  const source = (name || email || "?").trim();
  const parts = source.includes("@") ? [source[0]] : source.split(/\s+/).slice(0, 2).map((part) => part[0]);
  return parts.join("").toUpperCase();
}

// KeRaeva admin sidebar: grouped links with icons, the inbox count, a link to
// the live site and the signed-in user. Wraps Payload's NavWrapper so the
// mobile open/close behaviour stays the same.
export async function AdminNav({ payload, user, visibleEntities }: NavProps) {
  const collections = new Set(visibleEntities?.collections ?? []);
  const globals = new Set(visibleEntities?.globals ?? []);
  const roles = ((user as { roles?: string[] } | undefined)?.roles ?? []) as string[];

  let newSubmissions = 0;
  if (user && collections.has("form-submissions")) {
    try {
      const { totalDocs } = await payload.count({ collection: "form-submissions", where: { status: { equals: "new" } }, user, overrideAccess: false });
      newSubmissions = totalDocs;
    } catch {
      // the badge is optional
    }
  }

  const collection = (slug: string) => collections.has(slug);
  const groups = ([
    {
      label: "Overview",
      items: [
        { label: "Dashboard", href: adminUrl(), icon: "dashboard" as const, exact: true },
        { label: "Analytics", href: adminUrl("/analytics"), icon: "analytics" as const },
        ...(collection("form-submissions") ? [{ label: "Inbox", href: adminUrl("/collections/form-submissions"), icon: "inbox" as const, count: newSubmissions }] : []),
      ],
    },
    {
      label: "Website",
      items: [
        ...([...globals].some((slug) => slug.startsWith("page-")) || collection("pages") ? [{ label: "Pages", href: adminUrl("/pages"), icon: "pages" as const, matches: [adminUrl("/globals/page-"), adminUrl("/collections/pages")] }] : []),
        ...(globals.has("header-footer") ? [{ label: "Header & Footer", href: adminUrl("/globals/header-footer"), icon: "layout" as const }] : []),
        ...(collection("jobs") ? [{ label: "Job Openings", href: adminUrl("/collections/jobs"), icon: "jobs" as const }] : []),
        ...(collection("posts") ? [{ label: "Blog Posts", href: adminUrl("/collections/posts"), icon: "posts" as const }] : []),
        ...(collection("testimonials") ? [{ label: "Testimonials", href: adminUrl("/collections/testimonials"), icon: "testimonials" as const }] : []),
        ...(collection("team-members") ? [{ label: "Team", href: adminUrl("/collections/team-members"), icon: "team" as const }] : []),
        ...(collection("faqs") ? [{ label: "FAQs", href: adminUrl("/collections/faqs"), icon: "faqs" as const }] : []),
        ...(collection("legal-documents") ? [{ label: "Legal Pages", href: adminUrl("/collections/legal-documents"), icon: "legal" as const }] : []),
        ...(collection("media") ? [{ label: "Media Library", href: adminUrl("/collections/media"), icon: "media" as const }] : []),
      ],
    },
    {
      label: "Settings",
      items: [
        ...(globals.has("site-settings") ? [{ label: "Site Settings", href: adminUrl("/globals/site-settings"), icon: "settings" as const }] : []),
        ...(collection("users") && roles.includes("admin") ? [{ label: "Users", href: adminUrl("/collections/users"), icon: "users" as const }] : []),
      ],
    },
  ] as NavGroup[]).filter((group) => group.items.length > 0);

  const name = (user as { name?: string } | undefined)?.name;
  const email = (user as { email?: string } | undefined)?.email;

  return (
    <NavWrapper baseClass="nav">
      <nav className="nav__wrap kr-nav">
        <div className="kr-nav__brand">
          <Link href={adminUrl()} className="kr-nav__logo" aria-label="KeRaeva admin dashboard" prefetch={false}>
            <KeRaevaLogo className="kr-logo" />
          </Link>
          <span className="kr-nav__badge">Admin</span>
        </div>
        <NavLinks groups={groups} />
        <div className="kr-nav__footer">
          <a className="kr-nav__site" href={SITE_URL} target="_blank" rel="noopener noreferrer">
            <Globe className="kr-nav__icon" strokeWidth={1.75} aria-hidden="true" />
            <span>{SITE_URL.replace(/^https?:\/\//, "")}</span>
            <ExternalLink className="kr-nav__site-arrow" strokeWidth={1.75} aria-hidden="true" />
          </a>
          <div className="kr-nav__user">
            <Link href={adminUrl("/account")} className="kr-nav__avatar" aria-label="Your account" prefetch={false}>
              {initials(name, email)}
            </Link>
            <div className="kr-nav__who">
              <span className="kr-nav__name">{name || email}</span>
              <span className="kr-nav__role">{roles.includes("admin") ? "Admin" : "Editor"}</span>
            </div>
            <a href={adminUrl("/logout")} className="kr-nav__logout" aria-label="Log out" title="Log out">
              <LogOut strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
      <div className="nav__header">
        <div className="nav__header-content">
          <NavHamburger baseClass="nav" />
        </div>
      </div>
    </NavWrapper>
  );
}
