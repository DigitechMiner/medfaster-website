import { cn } from "@/lib/utils";

// Neutral initials avatar (used until real, approved photos are available)
const sizeClasses = {
  sm: "w-10 h-10 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-14 h-14 text-lg",
};

export function InitialsAvatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  const initials = name
    .replace(/[^A-Za-z\s]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex-shrink-0 rounded-full bg-[#FEF0E7] text-[#C44408] font-semibold flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </span>
  );
}
