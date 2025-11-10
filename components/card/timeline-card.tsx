import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  title: string;
  year: string;
  description: string;
  variant?: "desktop" | "mobile";
  showConnector?: boolean;
  connectorHeight?: string;
  className?: string;
}

export function TimelineCard({
  title,
  year,
  description,
  variant = "desktop",
  showConnector = false,
  connectorHeight,
  className,
}: TimelineCardProps) {
  const isDesktop = variant === "desktop";

  return (
    <div
      className={cn(
        isDesktop ? " w-48 lg:w-56 xl:w-64" : "w-full",
        "relative ",
        className
      )}
    >
      <div className="relative p-5 rounded-lg bg-white border border-gray-200 z-10">
        <Paragraph size="sm" weight="semibold" className="text-[#252B37] mb-2">
          {title} ({year})
        </Paragraph>
        <Paragraph
          size="xs"
          className={cn(
            "text-[#717680] leading-relaxed",
            isDesktop ? "overflow-hidden" : ""
          )}
        >
          {description}
        </Paragraph>
      </div>
      {showConnector && (
        <div
          className="absolute top-full left-1/2 z-0"
          style={{
            width: connectorHeight || "2rem",
            height: "1rem",
            transform: "translate(-50%, 0) rotate(90deg)",
            transformOrigin: "top center",
            backgroundImage: "url(/images/patterns/lifeline.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        ></div>
      )}
    </div>
  );
}
