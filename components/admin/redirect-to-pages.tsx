import { redirect } from "next/navigation";
import { adminUrl } from "./paths";

// Custom pages are listed with the main pages on the Pages screen
export function RedirectToPages() {
  redirect(adminUrl("/pages?tab=custom"));
}
