"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

type AnimationVariant = "fade-up" | "fade-in" | "fade-down" | "slide-in-left" | "slide-in-right";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Animation type. Default: "fade-up" */
  variant?: AnimationVariant;
  /** Delay in ms (applied as transition-delay). Default: 0 */
  delay?: number;
  /** Duration in ms. Default: 600 */
  duration?: number;
  /** Additional className */
  className?: string;
  /** HTML tag to render. Default: "div" */
  as?: keyof React.JSX.IntrinsicElements;
  /** Intersection observer threshold. Default: 0.1 */
  threshold?: number;
}

const VARIANT_STYLES: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "slide-in-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "slide-in-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
};

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  as: Tag = "div",
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold });
  const styles = VARIANT_STYLES[variant];

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${inView ? styles.visible : styles.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};
