"use client";
import Image from "next/image";
import React from "react";
import { Header } from "../layouts/Header";
import { LightHeader } from "../layouts/LightHeader";

type Props = {
  image: string;
  className?: string;
};

export const HeaderBaseResponsive = (props: Props) => {
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
    <div
      className={`relative w-full lg:h-[728px] md:h-[447px] h-[539px] ${props.className}`}
    >
      <Image
        src={props.image}
        alt="banner"
        className={`w-full h-full  object-cover ${props.className}`}
        layout="fill"
        priority={true}
        fetchPriority="high"
      />
      <div
        className={`top-0 z-[9999999] ${
          scrolled
            ? "bg-white h-[94px] transition-all duration-300 shadow-md fixed w-full "
            : "bg-transparent transition-all duration-300 pt-[37px] w-full"
        }`}
      >
        {!scrolled ? <Header /> : <LightHeader isDisplayBanner={false} />}
      </div>
    </div>
  );
};
