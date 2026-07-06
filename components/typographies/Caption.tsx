import React from "react";

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

/**
 * Caption Component
 *
 * A standardized component for small captions and labels (11px / 16px).
 * Commonly used for image captions, form labels, and supplementary text.
 *
 * @param className - Additional CSS classes
 * @param as - HTML element to render (p, span, div)
 *
 * @example
 * <Caption>Photo credit: John Doe</Caption>
 *
 * @example
 * <Caption className="text-con-custom-text-gray">*Required field</Caption>
 */
export const Caption: React.FC<CaptionProps> = ({
  children,
  className = "",
  as: Component = "p",
}) => {
  return (
    <Component
      className={`font-dm-sans text-caption tracking-body ${className}`}
    >
      {children}
    </Component>
  );
};
