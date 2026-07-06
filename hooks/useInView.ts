"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseInViewOptions {
  /** Intersection threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for early/late triggering. Default: "0px 0px -40px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default: true */
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView && triggerOnce) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, inView]);

  return [ref, inView];
}
