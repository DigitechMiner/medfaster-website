"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState, ReactNode, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomButton } from "@/components/ui/custom-button";
import Image from "next/image";
import LoginModal from "@/components/global/otpModal";
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Lock page scroll behind the open mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
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
                  quality={100}
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
              className="hidden lg:flex my-0 py-2"
              onClick={() => openModal("get-app")}
            >
              Get the App
            </CustomButton>
            <CustomButton
              className="hidden md:flex my-0 py-2"
              onClick={() => (window.location.href = RECRUITER_LOGIN_URL)}
            >
              Login as Recruiter
            </CustomButton>
          </div>

          {/* Mobile Navigation - always mounted so it can animate */}
          <div
            id="mobile-navigation"
            className={cn(
              "xl:hidden absolute top-[calc(100%+8px)] left-0 right-0 z-50 mx-2 md:mx-4 origin-top",
              motion,
              mobileOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible pointer-events-none"
            )}
          >
            <nav
              aria-label="Mobile"
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-3 max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const submenu = link.submenu;
                  if (!submenu) {
                    const active = isActive(pathname, link.href);
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-4 py-3 font-medium",
                            motion,
                            active ? "bg-[#F3651B] text-white" : "text-gray-700 hover:bg-gray-100"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  }

                  const isOpen = mobileSubmenu === link.label;
                  return (
                    <li key={link.label}>
                      <button
                        type="button"
                        className={cn(
                          "w-full flex items-center justify-between rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100",
                          motion
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setMobileSubmenu(isOpen ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown size={18} className={cn(motion, isOpen && "rotate-180")} />
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
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  tabIndex={isOpen ? undefined : -1}
                                  aria-current={active ? "page" : undefined}
                                  className={cn(
                                    "block rounded-xl ml-3 px-4 py-2.5 mt-1",
                                    motion,
                                    active ? "bg-[#FEF0E7]" : "hover:bg-gray-50"
                                  )}
                                >
                                  <span className={cn("block text-sm font-medium", active ? "text-[#F3651B]" : "text-[#252B37]")}>
                                    {sub.label}
                                  </span>
                                  {sub.description && (
                                    <span className="block text-xs text-[#717680] mt-0.5">{sub.description}</span>
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

              <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-2">
                <CustomButton
                  variant="secondary"
                  className="w-full justify-center my-0 py-2.5"
                  onClick={() => {
                    setMobileOpen(false);
                    openModal("get-app");
                  }}
                >
                  Get the App
                </CustomButton>
                <CustomButton
                  className="w-full justify-center my-0 py-2.5"
                  onClick={() => (window.location.href = RECRUITER_LOGIN_URL)}
                >
                  Login as Recruiter
                </CustomButton>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </div>

      {/* Dim the page behind the open mobile menu */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={cn(
          "xl:hidden fixed inset-0 z-40 bg-black/20",
          motion,
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
