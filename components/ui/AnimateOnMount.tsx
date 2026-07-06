"use client";

import React, { useEffect, useState } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "fade-down"
  | "slide-in-left"
  | "slide-in-right";

interface AnimateOnMountProps {
  children: React.ReactNode;
  /** Animation type. Default: "fade-up" */
  variant?: AnimationVariant;
  /** Delay in ms (applied as transition-delay). Default: 0 */
  delay?: number;
  /** Duration in ms. Default: 500 */
  duration?: number;
  /** Additional className */
  className?: string;
  /** HTML tag to render. Default: "div" */
  as?: keyof React.JSX.IntrinsicElements;
}

const VARIANT_STYLES: Record<
  AnimationVariant,
  { hidden: string; visible: string }
> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
  "slide-in-left": {
    hidden: "opacity-0 -translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  "slide-in-right": {
    hidden: "opacity-0 translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
};

export const AnimateOnMount: React.FC<AnimateOnMountProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 500,
  className = "",
  as: Tag = "div",
}) => {
  const [mounted, setMounted] = useState(false);
  const styles = VARIANT_STYLES[variant];

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      className={`transition-[opacity,transform] ease-out ${
        mounted ? styles.visible : styles.hidden
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};
