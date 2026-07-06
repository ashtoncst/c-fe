import React from "react";

export type BodyTextSize = "xs" | "sm" | "base" | "md" | "lg";
export type BodyTextWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: BodyTextSize;
  weight?: BodyTextWeight;
  as?: "p" | "span" | "div";
  responsive?: boolean;
}

const sizeClasses: Record<BodyTextSize, string> = {
  xs: "text-body-xs", // 12px / 20px
  sm: "text-body-sm", // 14px / 22px
  base: "text-body-base", // 15px / 25px - Default
  md: "text-body-md", // 16px / 26px
  lg: "text-body-lg", // 18px / 28px
};

const responsiveSizeClasses: Record<BodyTextSize, string> = {
  xs: "text-body-xs md:text-body-xs lg:text-body-sm",
  sm: "text-body-xs md:text-body-sm lg:text-body-base",
  base: "text-body-sm md:text-body-base lg:text-body-base",
  md: "text-body-sm md:text-body-base lg:text-body-md",
  lg: "text-body-base md:text-body-md lg:text-body-lg",
};

const weightClasses: Record<BodyTextWeight, string> = {
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
};

/**
 * BodyText Component
 *
 * A standardized component for body copy text across the application.
 *
 * @param size - Text size variant (xs: 12px, sm: 14px, base: 15px, md: 16px, lg: 18px)
 * @param weight - Font weight (light: 300, normal: 400, medium: 500, semibold: 600, bold: 700)
 * @param responsive - If true, text size adapts across breakpoints
 * @param as - HTML element to render (p, span, div)
 * @param className - Additional CSS classes
 *
 * @example
 * // Standard body text (15px)
 * <BodyText>This is standard body text</BodyText>
 *
 * @example
 * // Small text with responsive sizing
 * <BodyText size="sm" responsive>This text adapts to screen size</BodyText>
 *
 * @example
 * // Medium text with custom styling
 * <BodyText size="md" weight="medium" className="text-con-custom-green">
 *   Custom styled text
 * </BodyText>
 */
export const BodyText: React.FC<BodyTextProps> = ({
  children,
  className = "",
  size = "base",
  weight = "light",
  as: Component = "p",
  responsive = false,
}) => {
  const sizeClass = responsive
    ? responsiveSizeClasses[size]
    : sizeClasses[size];
  const weightClass = weightClasses[weight];

  return (
    <Component
      className={`font-dm-sans ${sizeClass} ${weightClass} tracking-body ${className}`}
    >
      {children}
    </Component>
  );
};
