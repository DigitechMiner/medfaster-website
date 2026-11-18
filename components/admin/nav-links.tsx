"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  CircleHelp,
  FileText,
  Image as ImageIcon,
  Inbox,
  LayoutDashboard,
  Newspaper,
  Quote,
  Scale,
  Settings,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: keyof typeof ICONS;
  exact?: boolean;
  // Other URL prefixes that also count as this item (e.g. each page editor)
  matches?: string[];
  count?: number;
};

export type NavGroup = { label: string; items: NavItem[] };

const ICONS = {
  dashboard: LayoutDashboard,
  inbox: Inbox,
  pages: FileText,
  jobs: Briefcase,
  posts: Newspaper,
  testimonials: Quote,
  team: Users,
  faqs: CircleHelp,
  legal: Scale,
  media: ImageIcon,
  settings: Settings,
  users: UserCog,
} satisfies Record<string, LucideIcon>;

function isActive(pathname: string, item: NavItem) {
  if (item.exact) return pathname === item.href || pathname === `${item.href}/`;
  return [item.href, ...(item.matches ?? [])].some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`) || (prefix.endsWith("-") && pathname.startsWith(prefix)));
}

export function NavLinks({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname() ?? "";
  return (
    <div className="kr-nav__groups">
      {groups.map((group) => (
        <div className="kr-nav__group" key={group.label}>
          <div className="kr-nav__group-label">{group.label}</div>
          <ul className="kr-nav__list">
            {group.items.map((item) => {
              const Icon = ICONS[item.icon];
              const active = isActive(pathname, item);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`kr-nav__link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined} prefetch={false}>
                    <Icon className="kr-nav__icon" strokeWidth={1.75} aria-hidden="true" />
                    <span className="kr-nav__label">{item.label}</span>
                    {item.count ? <span className="kr-nav__count">{item.count > 99 ? "99+" : item.count}</span> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
