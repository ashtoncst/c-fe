"use client";
import { Header } from "@/components/layouts/Header";
import { LightHeader } from "@/components/layouts/LightHeader";
import React from "react";

type Props = {
  className?: string;
  isDarkLogo?: boolean;
};

export const HeaderContactUs = (props: Props) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [, setScrollDirection] = React.useState<"up" | "down" | null>(null);
  const lastScrollY = React.useRef(0);
  React.useEffect(() => {
    const SCROLL_THRESHOLD = 5; // Minimum scroll difference to trigger direction change

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      const isScrolled = currentScrollY > 10;

      // Determine scroll direction with threshold
      if (currentScrollY > lastScrollY.current + SCROLL_THRESHOLD) {
        setScrollDirection("down");
        lastScrollY.current = currentScrollY;
      } else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
        setScrollDirection("up");
        lastScrollY.current = currentScrollY;
      }

      // Update scroll state
      setScrolled(isScrolled);
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`relative w-full ${props.className}`}>
      <div
        className={`top-0 z-[9999999] ${
          scrolled
            ? "bg-white h-[94px] transition-all duration-300 shadow-md fixed w-full "
            : "bg-transparent transition-all duration-300 pt-[37px] w-full"
        }`}
      >
        {!scrolled ? <Header darkLogo={props.isDarkLogo} /> : <LightHeader isDisplayBanner={false} />}
      </div>
    </div>
  );
};
