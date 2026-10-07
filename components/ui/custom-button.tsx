import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: LucideIcon;
  iconClassName?: string;
  iconContainerClassName?: string;
  size?: "sm" | "md" | "lg";
  // primary   - orange pill (default)
  // secondary - orange outline pill
  // inverse   - white pill for orange panels
  // muted     - soft grey pill for a quieter secondary action
  variant?: "primary" | "secondary" | "inverse" | "muted";
}

const sizeClasses = {
  sm: {
    button: "px-3 py-1",
    buttonWithIcon: "px-3 py-1 pr-1",
    text: "text-sm",
    gap: "gap-2",
    minHeight: "min-h-8",
  },
  md: {
    button: "px-4 py-1.5",
    buttonWithIcon: "px-4 py-1.5 pr-1",
    text: "text-base",
    gap: "gap-2.5",
    minHeight: "min-h-11",
  },
  lg: {
    button: "px-6 py-2",
    buttonWithIcon: "px-6 py-2 pr-1",
    text: "text-lg",
    gap: "gap-3",
    minHeight: "min-h-14",
  },
};

const iconSizeClasses = {
  sm: {
    container: "p-1.5",
    icon: "w-3 h-3",
  },
  md: {
    container: "p-2",
    icon: "w-4 h-4",
  },
  lg: {
    container: "p-2.5",
    icon: "w-5 h-5",
  },
};

// Button surface + the matching icon chip for each variant
const variantClasses = {
  primary: {
    button: "bg-[#F3651B] text-white shadow hover:opacity-90",
    chip: "bg-white",
    icon: "text-[#252B37]",
  },
  secondary: {
    button: "bg-white border border-[#F3651B] text-[#F3651B] hover:bg-[#FEF0E7]",
    chip: "bg-[#F3651B]",
    icon: "text-white",
  },
  inverse: {
    button: "bg-white text-[#252B37] shadow-sm hover:shadow-md",
    chip: "bg-[#F3651B]",
    icon: "text-white",
  },
  muted: {
    button: "bg-gray-100 text-[#252B37] hover:bg-gray-200",
    chip: "bg-white",
    icon: "text-[#252B37]",
  },
};

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, rightIcon: RightIcon, iconClassName, iconContainerClassName, size = "md", variant = "primary", children, ...props }, ref) => {
    const sizeConfig = sizeClasses[size];
    const iconConfig = iconSizeClasses[size];
    const variantConfig = variantClasses[variant];

    // Use buttonWithIcon class when icon is present, otherwise use button class
    const buttonPaddingClass = RightIcon ? sizeConfig.buttonWithIcon : sizeConfig.button;

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "flex items-center relative overflow-hidden w-fit my-2 rounded-full",
          "font-normal transition-all duration-200 motion-reduce:transition-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3651B]/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variant-based styles
          variantConfig.button,
          // Size-based styles (min height keeps buttons with and without icons aligned)
          buttonPaddingClass,
          sizeConfig.minHeight,
          sizeConfig.text,
          sizeConfig.gap,
          className
        )}
        {...props}
      >
        <span>{children}</span>

        {RightIcon && (
          <div className={cn("rounded-full flex items-center justify-center", variantConfig.chip, iconConfig.container, iconContainerClassName)}>
            <RightIcon className={cn(variantConfig.icon, iconConfig.icon, iconClassName)} aria-hidden="true" />
          </div>
        )}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
