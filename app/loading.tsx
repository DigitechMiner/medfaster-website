import { LogoLoader } from "@/components/ui/logo-loader";

// Shown by Next.js while a route segment is loading
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="min-h-screen bg-neutral-100 flex items-center justify-center p-4"
    >
      <LogoLoader />
    </div>
  );
}
