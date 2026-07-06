"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { GENERIC_AVATAR } from "@/config/constants";

export const USER_TESTIMONIAL_CARDS = [
  {
    id: 1,
    name: "Alexander Francis “Alfie” Deato",
    designation: "SVP and Head of IT",
    companyName: "LBC Express",
    img: "/images/Male1.jpg",
    quote:
      "Converge being a full fiber connectivity allowed us to expand our many branches. Converge has helped us expand our fiber connectivity all the way to our remote branches in Visayas and Mindanao which gave us the ability to offer more online services to our customers. This expansion has enabled us to expand our services and become less reliant on offline solutions.",
  },
  {
    id: 2,
    name: "Mikel Arriet",
    designation: "General Manager",
    companyName: "Anya Resort Tagaytay",
    img: "/images/Male3.png",
    quote:
      "Since our transition to Converge was made, I did not receive a single negative comment about Wi-Fi from our guests. By partnering with Converge, we sent a clear message to our guests that we acknowledged and quickly addressed their essential need for fast and dependable internet connectivity.",
  },
  {
    id: 3,
    name: "Nayer Raymundo-Lagmay",
    designation: "ICT Manager",
    companyName: "Kubota Philippines",
    img: "/images/Male2.png",
    quote:
      "Internet connectivity has a big role in our operations because most of our communications and program applications are cloud-based platforms. As the main tools of our daily operations, reliability and connectivity are a must. Because of Converge, our communication with our branches, satellite offices, and customers has become more effective and easier.",
  },
  {
    id: 4,
    name: "Kenneth Canlas",
    designation: "President & CEO",
    companyName: "Increment Technologies",
    img: GENERIC_AVATAR,
    quote:
      "Fiber is not just the future of connectivity, it's the right choice for the demands of today, delivering superior speed, reliability, and low latency.",
  },
  {
    id: 5,
    name: "Faith Dimaano",
    designation: "Marketing & Communications Manager",
    companyName: "Dusit Hotel & Resort",
    img: GENERIC_AVATAR,
    quote:
      "We didn't just build a network, we built a game changer, disrupting the status quo to bring the future of connectivity to everyone.",
  },
];

const CARD_WIDTH = 328;
const CARD_GAP = 24;
const TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;
const BASE_CARDS = [...USER_TESTIMONIAL_CARDS];
const UsersCard = () => {
  const [visibleCards, setVisibleCards] = useState([...BASE_CARDS]);
  const [index, setIndex] = useState(2);
  const isClient = useIsClient();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;

        setVisibleCards((cards) => {
          if (next + 2 >= cards.length) {
            const card = BASE_CARDS[(next + 2) % BASE_CARDS.length];
            return [...cards, card];
          }
          return cards;
        });

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;
  const getCardCenter = () => {
    if (window.innerWidth < 768) {
      return 117;
    }
    if (window.innerWidth < 1024) {
      return 113;
    } else {
      return 110;
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="w-full md:h-[325px] h-[270px] flex items-center">
        <div
          className={clsx(
            "flex items-end transition-transform duration-700 ease-in-out md:relative-none relative"
          )}
          style={{
            transform: ` translateX(calc(50vw - ${CARD_WIDTH / 2}px - ${
              index * TOTAL_WIDTH - getCardCenter()
            }px))`,
          }}
        >
          {visibleCards.map((card, i) => {
            const distance = Math.abs(index - i);
            const isLeftCard = i < index;
            let height = 180;
            let width = CARD_WIDTH;
            let translateX = "0";

            if (distance === 0) {
              height = window.innerWidth < 768 ? 186 : 325;
              width = window.innerWidth < 768 ? 349 : CARD_WIDTH;
            } else if (distance === 1) {
              height = window.innerWidth < 768 ? 186 : 289;
              width = window.innerWidth < 768 ? 349 : 295;
              translateX =
                window.innerWidth < 768
                  ? isLeftCard
                    ? "80px"
                    : "-190px"
                  : "0";
            } else if (distance === 2) {
              height = 232;
              width = 236;
            }

            const scale = distance === 0 ? 1 : 0.95;
            const opacity = distance === 0 ? 1 : 0.2;

            return (
              <div
                key={i}
                className={clsx(
                  "border border-gray-300 rounded-[20px] items-center px-4 pt-1 mx-[12px] shrink-0 md:w-[328px] w-[349px] transition-all duration-500 overflow-hidden",
                  distance === 0
                    ? "shadow-con-custom-shadow bg-white relative z-10 md:translate-x-0 -translate-x-[68px] -translate-y-14 md:translate-y-0"
                    : "relative z-0  md:translate-x-0 translate-x-10 translate-y-0 md:translate-y-0"
                )}
                style={{
                  height: `${height}px`,
                  width: `${width}px`,
                  transformOrigin: "bottom",
                  opacity,
                  transform:
                    distance === 1 && window.innerWidth < 768
                      ? `translateX(${translateX})`
                      : undefined,
                }}
              >
                <div className="flex gap-x-5 h-[109px] pt-[20px] pb-4">
                  <Image
                    src={card.img}
                    alt="Avatar"
                    width={66}
                    height={66}
                    className="rounded-full w-[66px] h-[66px] object-cover"
                  />
                  <div
                    className={` font-funnel flex flex-col  ${
                      distance === 0 ? "justify-center" : ""
                    }`}
                  >
                    <p className="text-gray-900 md:text-xl text-[15px] tracking-[0%] font-normal leading-7">
                      {card.name}
                    </p>
                    <p
                      className={`font-dm-sans text-gray-500 md:text-[15px] text-[11px] leading-[16px] tracking-[0%] md:leading-6`}
                    >
                      {card.designation}, {card.companyName}
                    </p>
                  </div>
                </div>
                {distance === 0 && (
                  <p
                    className={`font-dm-sans text-[#23262F] md:text-[15px] font-light text-[11px] leading-[16px] tracking-[0%] md:leading-6 overflow-hidden`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp:
                        distance === 0
                          ? window.innerWidth < 768
                            ? 4
                            : 6
                          : window.innerWidth < 768
                          ? 3
                          : 4,
                      WebkitBoxOrient: "vertical",
                      maxHeight:
                        distance === 0
                          ? window.innerWidth < 768
                            ? "64px"
                            : "144px"
                          : window.innerWidth < 768
                          ? "48px"
                          : "96px",
                    }}
                  >
                    {card.quote}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
