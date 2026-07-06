"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { LOGOS } from "../constants";
import Image from "next/image";

const CARD_WIDTH_MOBILE = 100;
const CARD_WIDTH_DESKTOP = 160;
const CARD_GAP_MOBILE = 16;
const CARD_GAP_DESKTOP = 24;

export default function LogoBrandSlider() {
  const BASE_LOGOS = LOGOS;
  const nextLogoIndex = useRef(0);

  const [visibleLogos, setVisibleLogos] = useState([...BASE_LOGOS]);
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;

        setVisibleLogos((logos) => {
          if (next + 2 >= logos.length) {
            const logo = BASE_LOGOS[nextLogoIndex.current % BASE_LOGOS.length];

            nextLogoIndex.current += 1;
            return [...logos, logo];
          }

          return logos;
        });

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [BASE_LOGOS]);

  const CARD_WIDTH = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const CARD_GAP = isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP;
  const TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="w-full px-[20px] md:px-[50px] overflow-hidden">
        <div
          className={clsx(
            "flex items-end transition-transform duration-700 ease-in-out"
          )}
          style={{
            transform: `translateX(calc(50vw - ${CARD_WIDTH / 2}px - ${
              index * TOTAL_WIDTH + (isMobile ? 40 : 80)
            }px))`,
          }}
        >
          {visibleLogos.map((Logo, i) => {
            const distance = Math.abs(index - i);
            let scale = isMobile ? 0.7 : 0.8;
            let opacity = 0;
            if (distance === 0) {
              scale = isMobile ? 0.85 : 1;
              opacity = 1;
            } else if (distance === 1) {
              scale = isMobile ? 0.75 : 0.9;
              opacity = isMobile ? 0.5 : 0.6;
            } else if (distance === 2) {
              opacity = 0.2;
            }

            return (
              <div
                key={i}
                className="flex items-center justify-center mx-[8px] md:mx-[12px] shrink-0 w-[100px] md:w-[160px] h-[30px] md:h-[40px] transition-all duration-500"
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                }}
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  fill
                  sizes="(max-width: 768px) 100px, 160px"
                  className="object-contain"
                  priority={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
