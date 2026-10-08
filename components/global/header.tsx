"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState, ReactNode, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomButton } from "@/components/ui/custom-button";
import Image from "@/components/ui/image";
import { useModalStore } from "@/stores/modalStore";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; description?: string };
type NavLink = NavItem & { submenu?: NavItem[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Platforms",
    href: "/",
    submenu: [
      {
        label: "Healthcare Organizations",
        href: "/medical-organizations",
        description: "Hire, fill urgent shifts and manage your workforce",
      },
      {
        label: "Healthcare Professionals",
        href: "/medical-professionals",
        description: "Find jobs and shifts, get verified and get paid",
      },
      {
        label: "KeRaeva AI",
        href: "/keraeva-ai",
        description: "Every AI and smart feature across the platform",
      },
    ],
  },
  { label: "Why KeRaeva?", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

const RECRUITER_LOGIN_URL = "https://recruiter.keraeva.com";

// Shared motion: smooth, and disabled for people who prefer reduced motion
const motion = "transition-all duration-200 ease-out motion-reduce:transition-none";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const pathname = usePathname();
  const openModal = useModalStore((state) => state.openModal);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeAll = useCallback(() => {
    setOpenSubmenu(null);
    setMobileOpen(false);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Escape and outside click close the menus
  useEffect(() => {
    if (!openSubmenu && !mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSubmenu(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [openSubmenu, mobileOpen, closeAll]);

  // Lock page scroll behind the open mobile menu and move focus into it
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  // Hover intent for the desktop dropdown (small delay so it doesn't flicker)
  const openOnHover = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSubmenu(label);
  };
  const closeOnLeave = () => {
    closeTimer.current = setTimeout(() => setOpenSubmenu(null), 150);
  };

  const pillClass = (active: boolean) =>
    cn(
      "rounded-full font-medium px-4 py-2 text-sm xl:text-base whitespace-nowrap inline-flex items-center gap-1",
      motion,
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3651B]/50",
      active ? "bg-[#F3651B] text-white shadow-sm" : "text-gray-700 hover:bg-white hover:text-[#252B37]"
    );

  return (
    <>
      <div className="w-full bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
        <header className="relative z-50 w-full flex items-center justify-between p-2 md:p-4 lg:p-6 xl:p-8 px-4 md:px-8 lg:px-16 xl:px-16">
          {/* Left Side - Mobile Menu + Logo */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={cn(
                "xl:hidden relative w-10 h-10 rounded-full bg-[#F3651B] text-white flex items-center justify-center shadow hover:opacity-90 z-20",
                motion,
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3651B]/50 focus-visible:ring-offset-2"
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <Menu
                size={20}
                className={cn("absolute", motion, mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100")}
              />
              <X
                size={20}
                className={cn("absolute", motion, mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75")}
              />
            </button>

            <Link href="/" aria-label="KeRaeva home">
              <div className="flex-shrink-0 w-40 md:w-48 lg:w-[200px] flex items-center cursor-pointer">
                <Image
                  src="/images/ui/KeRaeva-logo.svg"
                  height={50}
                  width={200}
                  alt="KeRaeva"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            aria-label="Main"
            className="hidden xl:flex bg-gray-100 rounded-full p-1 items-center gap-1 relative h-[44px]"
          >
            {navLinks.map((link) => {
              const submenu = link.submenu;
              if (!submenu) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={pillClass(isActive(pathname, link.href))}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              }

              const isOpen = openSubmenu === link.label;
              const hasActiveChild = submenu.some((sub) => isActive(pathname, sub.href));

              return (
                <div
                  key={link.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => openOnHover(link.label)}
                  onMouseLeave={closeOnLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      pillClass(false),
                      (isOpen || hasActiveChild) && "bg-white text-[#252B37]"
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    // Mouse clicks keep it open (hover already opened it); keyboard toggles
                    onClick={(e) => setOpenSubmenu(e.detail === 0 && isOpen ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={cn(motion, isOpen && "rotate-180", hasActiveChild && "text-[#F3651B]")}
                    />
                  </button>

                  {/* Dropdown - always mounted so it can animate in and out */}
                  <div
                    className={cn(
                      "absolute left-0 top-[calc(100%+10px)] w-[320px] z-50 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 origin-top-left",
                      motion,
                      isOpen
                        ? "opacity-100 translate-y-0 scale-100 visible"
                        : "opacity-0 -translate-y-1 scale-95 invisible pointer-events-none"
                    )}
                  >
                    {submenu.map((sub) => {
                      const active = isActive(pathname, sub.href);
                      return (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "group block rounded-xl px-4 py-3",
                            motion,
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3651B]/50",
                            active ? "bg-[#FEF0E7]" : "hover:bg-gray-50"
                          )}
                        >
                          <span
                            className={cn(
                              "block text-sm font-medium",
                              motion,
                              active ? "text-[#F3651B]" : "text-[#252B37] group-hover:text-[#F3651B]"
                            )}
                          >
                            {sub.label}
                          </span>
                          {sub.description && (
                            <span className="block text-xs text-[#717680] mt-0.5">{sub.description}</span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right - CTAs */}
          <div className="flex items-center gap-2">
            <CustomButton
              variant="secondary"
              className="hidden lg:flex my-0"
              onClick={() => openModal("get-app")}
            >
              Get the App
            </CustomButton>
            <CustomButton
              className="hidden md:flex my-0"
              onClick={() => (window.location.href = RECRUITER_LOGIN_URL)}
            >
              Login as Recruiter
            </CustomButton>
          </div>

        </header>
        {children}
      </div>

      {/* Mobile Navigation - full-screen panel that slides in from the left */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "xl:hidden fixed inset-0 z-[60] bg-white flex flex-col",
          "transition-[translate,visibility] duration-300 ease-out motion-reduce:transition-none",
          mobileOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
        )}
      >
        {/* Panel top bar - mirrors the header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100">
          <Link href="/" aria-label="KeRaeva home" className="w-40 md:w-48">
            <Image src="/images/ui/KeRaeva-logo.svg" height={50} width={200} alt="KeRaeva" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className={cn(
              "w-10 h-10 rounded-full bg-[#F3651B] text-white flex items-center justify-center shadow hover:opacity-90",
              motion,
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3651B]/50 focus-visible:ring-offset-2"
            )}
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 md:px-8 py-4">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const submenu = link.submenu;
              // Staggered entrance for each row
              const rowClass = cn(
                "border-b border-gray-100",
                "transition-all duration-300 ease-out motion-reduce:transition-none",
                mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              );
              const rowStyle = { transitionDelay: mobileOpen ? `${100 + index * 50}ms` : "0ms" };

              if (!submenu) {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.label} className={rowClass} style={rowStyle}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4 text-xl font-medium",
                        motion,
                        active ? "text-[#F3651B]" : "text-[#252B37] hover:text-[#F3651B]"
                      )}
                    >
                      {link.label}
                      {active && <span className="w-2 h-2 rounded-full bg-[#F3651B]" aria-hidden="true" />}
                    </Link>
                  </li>
                );
              }

              const isOpen = mobileSubmenu === link.label;
              const hasActiveChild = submenu.some((sub) => isActive(pathname, sub.href));
              return (
                <li key={link.label} className={rowClass} style={rowStyle}>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center justify-between py-4 text-xl font-medium",
                      motion,
                      hasActiveChild ? "text-[#F3651B]" : "text-[#252B37] hover:text-[#F3651B]"
                    )}
                    aria-expanded={isOpen}
                    onClick={() => setMobileSubmenu(isOpen ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown size={22} className={cn(motion, isOpen && "rotate-180")} />
                  </button>

                  {/* Accordion - animates height via grid rows */}
                  <div
                    className={cn(
                      "grid",
                      motion,
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <ul className="overflow-hidden">
                      {submenu.map((sub) => {
                        const active = isActive(pathname, sub.href);
                        return (
                          <li key={sub.label} className="pb-2">
                            <Link
                              href={sub.href}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block rounded-xl px-4 py-3",
                                motion,
                                active ? "bg-[#FEF0E7]" : "bg-gray-50 hover:bg-[#FEF0E7]"
                              )}
                            >
                              <span className={cn("block font-medium", active ? "text-[#F3651B]" : "text-[#252B37]")}>
                                {sub.label}
                              </span>
                              {sub.description && (
                                <span className="block text-sm text-[#717680] mt-0.5">{sub.description}</span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div
          className={cn(
            "px-4 md:px-8 pt-4 pb-6 border-t border-gray-100 flex flex-col gap-3",
            "transition-all duration-300 ease-out motion-reduce:transition-none",
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: mobileOpen ? "300ms" : "0ms" }}
        >
          <CustomButton
            variant="secondary"
            className="w-full justify-center my-0"
            onClick={() => {
              setMobileOpen(false);
              openModal("get-app");
            }}
          >
            Get the App
          </CustomButton>
          <CustomButton
            className="w-full justify-center my-0"
            onClick={() => (window.location.href = RECRUITER_LOGIN_URL)}
          >
            Login as Recruiter
          </CustomButton>
          <a
            href="mailto:support@keraeva.com"
            className="text-center text-sm text-[#717680] hover:text-[#F3651B] py-1.5"
          >
            support@keraeva.com
          </a>
        </div>
      </div>
    </>
  );
}
