"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { GENERIC_AVATAR } from "@/config/constants";

export const TESTIMONIAL_CARDS = [
  {
    id: 1,
    name: 'Alexander Francis "Alfie" Deato',
    designation: "SVP and Head of IT",
    companyName: "LBC Express",
    img: "/images/Male1.jpg",
    quote:
      "Converge\u2019s full fiber connectivity allowed us to expand our branches all the way to Visayas and Mindanao, giving us the ability to offer more online services to our customers and become less reliant on offline solutions.",
  },
  {
    id: 2,
    name: "Mikel Arriet",
    designation: "General Manager",
    companyName: "Anya Resort Tagaytay",
    img: "/images/Male3.png",
    quote:
      "Since our transition to Converge, I have not received a single negative comment about Wi-Fi from our guests. We sent a clear message that we acknowledged and quickly addressed their essential need for fast and dependable connectivity.",
  },
  {
    id: 3,
    name: "Nayer Raymundo-Lagmay",
    designation: "ICT Manager",
    companyName: "Kubota Philippines",
    img: "/images/Male2.png",
    quote:
      "Most of our communications and applications are cloud-based, so reliability and connectivity are a must. Because of Converge, our communication with branches, satellite offices, and customers has become far more effective.",
  },
  {
    id: 4,
    name: "Kenneth Canlas",
    designation: "President & CEO",
    companyName: "Increment Technologies",
    img: GENERIC_AVATAR,
    quote:
      "Fiber is not just the future of connectivity\u2014it\u2019s the right choice for the demands of today, delivering superior speed, reliability, and low latency.",
  },
  {
    id: 5,
    name: "Faith Dimaano",
    designation: "Marketing & Communications Manager",
    companyName: "Dusit Hotel & Resort",
    img: GENERIC_AVATAR,
    quote:
      "We didn\u2019t just build a network\u2014we built a game changer, disrupting the status quo to bring the future of connectivity to everyone.",
  },
];

const CARD_WIDTH = 328;
const CARD_GAP = 24;
const TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;

const BASE_CARDS = [...TESTIMONIAL_CARDS];

// Smooth scale arc: center 100%, d1 ~80%, d2 ~60%
const SCALE_BY_DISTANCE: Record<number, number> = { 0: 1, 1: 0.82, 2: 0.65 };
const OPACITY_BY_DISTANCE: Record<number, number> = { 0: 1, 1: 0.5, 2: 0.3 };

export const TestimonialSection = ({ dark = false }: { dark?: boolean }) => {
  const [visibleCards, setVisibleCards] = useState([...BASE_CARDS]);
  const [index, setIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );
  const isClient = useIsClient();

  // Responsive check via matchMedia
  useEffect(() => {
    if (!isClient) return;
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent): void => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [isClient]);

  const advance = useCallback(() => {
    setIndex((prev) => {
      const next = prev + 1;
      setVisibleCards((currentCards) => {
        if (next + 2 >= currentCards.length) {
          const card = BASE_CARDS[(next + 2) % BASE_CARDS.length];
          return [...currentCards, card];
        }
        return currentCards;
      });
      return next;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [advance]);

  if (!isClient) return null;

  return (
    <section className={`w-full pt-10 md:pt-[40px] pb-10 md:pb-[40px] ${dark ? "bg-[#1a1a1a]" : "bg-white"}`}>
      {/* Section title */}
      <AnimateOnScroll variant="fade-up" className="text-center mb-12 md:mb-6 px-4">
        <h2
          className={`text-[35px] font-light leading-[1.2] font-funnel ${dark ? "text-white" : "text-[#024645]"}`}
        >
          The Fiber Behind<br />Everyday Wins
        </h2>
      </AnimateOnScroll>

      <div className="relative w-full flex items-center justify-center overflow-hidden pt-[20px] md:pt-0">
        <div className="w-full md:h-[380px] h-[420px] flex items-center">
          <div
            className="flex items-end transition-transform duration-700 ease-in-out relative"
            style={{
              transform: `translateX(calc(50vw - ${index * TOTAL_WIDTH + 12 + CARD_WIDTH / 2 - (isMobile ? 10 : 0)}px))`,
            }}
          >
            {visibleCards.map((card, i) => {
              const distance = Math.abs(index - i);
              const isLeftCard = i < index;
              const isCenter = distance === 0;

              const scale = SCALE_BY_DISTANCE[distance] ?? 0;
              const opacity = OPACITY_BY_DISTANCE[distance] ?? 0;

              const cardWidth = isCenter && isMobile ? 310 : CARD_WIDTH;
              const cardHeight = isMobile ? 400 : 360;

              // Build transform: pull scaled-down cards inward to close dead-space gaps
              let inlineTransform: string | undefined;
              if (!isCenter) {
                if (isMobile && distance === 1) {
                  const mobileX = isLeftCard ? "85px" : "-85px";
                  inlineTransform = `translateX(${mobileX}) scale(${scale})`;
                } else if (isMobile && distance >= 2) {
                  const mobileX = isLeftCard ? "160px" : "-160px";
                  inlineTransform = `translateX(${mobileX}) scale(${scale})`;
                } else if (distance >= 2) {
                  const deadSpaceShift = Math.round((CARD_WIDTH * (1 - scale)) / 2);
                  const shiftX = isLeftCard ? deadSpaceShift : -deadSpaceShift;
                  inlineTransform = `translateX(${shiftX}px) scale(${scale})`;
                } else {
                  inlineTransform = `scale(${scale})`;
                }
              }

              return (
                <div
                  key={i}
                  className={clsx(
                    "rounded-[20px] mx-[12px] shrink-0 transition-all duration-500 overflow-hidden",
                    isCenter
                      ? "border border-gray-300 bg-white relative z-10 -translate-y-[20px] md:translate-y-0"
                      : "border border-gray-300 bg-white relative z-0 -translate-y-[20px] md:translate-y-0"
                  )}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transformOrigin: "bottom center",
                    opacity,
                    transform: inlineTransform,
                  }}
                >
                  <div className="h-full flex flex-col px-5 md:px-6 pt-6 md:pt-7 pb-5 md:pb-6">
                    {/* Header: avatar + info */}
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 shrink-0 mb-4 md:mb-5">
                      <Image
                        src={card.img}
                        alt={card.name}
                        width={66}
                        height={66}
                        className="rounded-full w-[56px] h-[56px] md:w-[60px] md:h-[60px] object-cover shrink-0"
                      />
                      <div className="font-funnel flex flex-col justify-center items-center md:items-start min-w-0">
                        <p className="text-gray-900 text-[20px] font-normal leading-tight mb-1">
                          {card.name}
                        </p>
                        <p className="font-dm-sans text-[#7D8997] text-[18px] font-normal leading-snug">
                          {card.designation}, {card.companyName}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-1 text-center md:text-left">
                      <p className="font-dm-sans text-[#23262F] text-[16px] font-light leading-[1.7]">
                        &ldquo;{card.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
