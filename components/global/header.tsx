"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState, ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import Image from "next/image";
import LoginModal from "@/components/global/otpModal";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Our Platforms",
    href: "/",
    submenu: [
      { label: "Medical Organizations", href: "/medical-organizations" },
      { label: "Medical Professionals", href: "/medical-professionals" },
    ],
  },
  { label: "Why KeRaeva?", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const matchingLink = navLinks.find((link) => {
      if (link.href === pathname) return true;
      if (link.href !== "/" && pathname.startsWith(link.href)) return true;
      if (link.submenu) {
        return link.submenu.some((sub) => pathname === sub.href);
      }
      return false;
    });

    if (matchingLink) {
      if (matchingLink.submenu) {
        const matchedSub = matchingLink.submenu.find(
          (sub) => pathname === sub.href
        );
        setActive(matchedSub ? matchedSub.label : matchingLink.label);
      } else {
        setActive(matchingLink.label);
      }
    } else {
      setActive("Home");
    }
  }, [pathname]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenSubmenu(null);
    if (openSubmenu) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openSubmenu]);

  return (
    <>
      <div className="w-full bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
        <header className="relative w-full flex items-center justify-between p-2 md:p-4 lg:p-6 xl:p-8 px-4 md:px-8 lg:px-16 xl:px-16">

          {/* Left Side - Mobile Menu + Logo */}
          <div className="flex items-center gap-2">
            <Button
              className="xl:hidden rounded p-2 z-20"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>

           <Link href="/">
              <div className="flex-shrink-0 w-40 md:w-48 lg:w-[200px] flex items-center cursor-pointer">
                <Image
                  src="/images/ui/KeRaeva-logo.svg"
                  height={50}
                  width={200}
                  alt="KeRaeva"
                  objectFit="contain"
                  quality={100}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation — fixed height prevents layout shift on submenu open */}
          <nav className="hidden xl:flex bg-gray-100 rounded-full p-1 items-center gap-1 relative h-[44px]">
            {navLinks.map((link) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isSubmenuOpen = openSubmenu === link.label;

              return (
                <div key={link.label} className="relative h-full flex items-center">
                  <Button
                    className={`rounded-full font-medium px-3 py-2 whitespace-nowrap inline-flex items-center gap-1 ${
                      active === link.label && !hasSubmenu
                        ? "bg-[#F3651B] text-white"
                        : "bg-transparent text-gray-700"
                    }`}
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent outside-click handler firing
                      if (hasSubmenu) {
                        toggleSubmenu(link.label);
                      } else {
                        setActive(link.label);
                        setOpenSubmenu(null);
                      }
                    }}
                  >
                    {hasSubmenu ? (
                      <span className="inline-flex items-center gap-1">
                        {link.label}
                        <ChevronDown
                          className={`${
                            isSubmenuOpen ? "rotate-180" : ""
                          } transition-transform`}
                          size={18}
                        />
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1"
                      >
                        {link.label}
                      </Link>
                    )}
                  </Button>

                  {/* Desktop Submenu Dropdown — absolutely positioned, doesn't affect nav height */}
                  {hasSubmenu && isSubmenuOpen && (
                    <div
                      className="absolute left-0 top-[calc(100%+8px)] bg-white rounded-lg shadow-lg p-1.5 min-w-[180px] z-50 flex gap-1 flex-col border border-gray-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.submenu!.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => {
                            setActive(subLink.label);
                            setOpenSubmenu(null);
                          }}
                          className={`px-3 py-1.5 text-gray-700 text-sm rounded-md whitespace-nowrap font-medium transition-colors ${
                            active === subLink.label
                              ? "bg-[#F3651B] text-white"
                              : "hover:bg-[#F3651B] hover:text-white"
                          }`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Login/Register Button - Desktop Only */}
          <div className="flex items-center gap-2">
            <CustomButton
              className="hidden md:flex my-0 py-2"
              onClick={() =>
                (window.location.href = "https://recruiter.keraeva.com")
              }
            >
              Login as Recruiter
            </CustomButton>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileOpen && (
            <div className="absolute top-[calc(100%+10px)] left-0 w-full max-w-sm min-h-[calc(100vh-100%-30px)] z-50 flex flex-col items-center bg-white border-b rounded-lg shadow-lg xl:hidden justify-between">
              <div className="w-full max-w-sm py-4 px-4">
                {navLinks.map((link) => {
                  const hasSubmenu = link.submenu && link.submenu.length > 0;
                  const isSubmenuOpen = openSubmenu === link.label;

                  return (
                    <div key={link.label} className="mb-2">
                      <Button
                        className={`rounded-full font-medium w-full my-1 ${
                          active === link.label && !hasSubmenu
                            ? "bg-[#F3651B] text-white"
                            : "bg-transparent text-gray-700"
                        }`}
                        variant="ghost"
                        onClick={() => {
                          if (hasSubmenu) {
                            toggleSubmenu(link.label);
                          } else {
                            setActive(link.label);
                            setMobileOpen(false);
                            setOpenSubmenu(null);
                          }
                        }}
                      >
                        {hasSubmenu ? (
                          <span className="inline-flex items-center gap-1 w-full justify-between">
                            {link.label}
                            <ChevronDown
                              className={`${
                                isSubmenuOpen ? "rotate-180" : ""
                              } transition-transform`}
                              size={18}
                            />
                          </span>
                        ) : (
                          <Link href={link.href} className="w-full text-left">
                            {link.label}
                          </Link>
                        )}
                      </Button>

                      {/* Mobile Submenu Items */}
                      {hasSubmenu && isSubmenuOpen && (
                        <div className="flex flex-col ml-4 mt-1">
                          {link.submenu!.map((subLink) => (
                            <Button
                              key={subLink.label}
                              className={`rounded-full font-medium w-full my-0.5 h-8 text-sm ${
                                active === subLink.label
                                  ? "bg-[#F3651B] text-white"
                                  : "bg-transparent text-gray-700"
                              }`}
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setActive(subLink.label);
                                setMobileOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              <Link
                                href={subLink.href}
                                className="w-full text-left"
                              >
                                {subLink.label}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="w-full max-w-sm py-4 px-4 flex flex-col gap-2">
                <CustomButton
                  className="w-full justify-center my-1"
                  onClick={() =>
                    (window.location.href = "https://recruiter.keraeva.com")
                  }
                >
                  Login as Recruiter
                </CustomButton>
              </div>
            </div>
          )}
        </header>
        {children}
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
