"use client";

import { createContext, useContext } from "react";
import { HEADER_FOOTER_DEFAULTS, type HeaderFooter } from "@/content/header-footer";

const HeaderFooterContext = createContext<HeaderFooter>(HEADER_FOOTER_DEFAULTS);

export function HeaderFooterProvider({ value, children }: { value: HeaderFooter; children: React.ReactNode }) {
  return <HeaderFooterContext.Provider value={value}>{children}</HeaderFooterContext.Provider>;
}

export function useHeaderFooter() {
  return useContext(HeaderFooterContext);
}
