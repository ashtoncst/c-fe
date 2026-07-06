"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useIsClient } from "@/hooks/useIsClient";

const cards = [
  {
    id: 1,
    name: "Maria Grace Uy",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/maria.png",
    desc: "Co-founder and President of Converge ICT Solutions since 2007",
  },
  {
    id: 2,
    name: "Dennis Anthony H. Uy",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/athony.png",
    desc: "Co-founder and CEO of Converge ICT Solutions since 2007",
  },
  {
    id: 3,
    name: "Sherie Ng",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/Sherie.png",
    desc: "Chief Commercial Advisor, Converge Managing Director, Converge Singapore",
  },
  {
    id: 4,
    name: "Maria Grace Uy",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/maria.png",
    desc: "Co-founder and President of Converge ICT Solutions since 2007",
  },
  {
    id: 5,
    name: "Dennis Anthony H. Uy",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/athony.png",
    desc: "Co-founder and CEO of Converge ICT Solutions since 2007",
  },
  {
    id: 6,
    name: "Sherie Ng",
    country: "Lorem Ipsum, Country",
    img: "/images/about-us/Sherie.png",
    desc: "Chief Commercial Advisor, Converge Managing Director, Converge Singapore",
  },
];

const CARD_WIDTH = 328;
const CARD_GAP = 24;
const TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;

export const TeamCard = () => {
  const BASE_CARDS = [...cards];
  const [index, setIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isClient = useIsClient();

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const touchX = e.touches[0].clientX;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTime;

      if (timeDelta > 0) {
        const newVelocity = (touchX - currentX) / timeDelta;
        setVelocity(newVelocity);
      }

      setCurrentX(touchX);
      setLastMoveTime(currentTime);
      const deltaX = touchX - startX;
      setDragOffset(deltaX);
    },
    [isDragging, startX, currentX, lastMoveTime]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaX = currentX - startX;
    const threshold = 50;
    const velocityThreshold = 0.5;

    // Use velocity for more natural feel
    if (
      Math.abs(velocity) > velocityThreshold ||
      Math.abs(deltaX) > threshold
    ) {
      if ((deltaX > 0 || velocity > 0) && index > 0) {
        setIndex(index - 1);
      } else if (
        (deltaX < 0 || velocity < 0) &&
        index < BASE_CARDS.length - 1
      ) {
        setIndex(index + 1);
      }
    }

    setDragOffset(0);
    setVelocity(0);
  }, [isDragging, currentX, startX, index, BASE_CARDS.length, velocity]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const mouseX = e.clientX;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTime;

      if (timeDelta > 0) {
        const newVelocity = (mouseX - currentX) / timeDelta;
        setVelocity(newVelocity);
      }

      setCurrentX(mouseX);
      setLastMoveTime(currentTime);
      const deltaX = mouseX - startX;
      setDragOffset(deltaX);
    },
    [isDragging, startX, currentX, lastMoveTime]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaX = currentX - startX;
    const threshold = 50;
    const velocityThreshold = 0.5;

    // Use velocity for more natural feel
    if (
      Math.abs(velocity) > velocityThreshold ||
      Math.abs(deltaX) > threshold
    ) {
      if ((deltaX > 0 || velocity > 0) && index > 0) {
        setIndex(index - 1);
      } else if (
        (deltaX < 0 || velocity < 0) &&
        index < BASE_CARDS.length - 1
      ) {
        setIndex(index + 1);
      }
    }

    setDragOffset(0);
    setVelocity(0);
  }, [isDragging, currentX, startX, index, BASE_CARDS.length, velocity]);

  if (!isClient) return null;

  return (
    <div className="relative md:h-[500px] h-[470px] w-full flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="w-full md:h-[428px] h-[290px] flex items-center cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className={clsx(
            "flex items-end transition-transform duration-700 ease-in-out md:relative-none relative",
            isDragging && "transition-none"
          )}
          style={{
            transform: `translateX(calc(50vw - ${CARD_WIDTH / 2}px - ${
              index * TOTAL_WIDTH - (window.innerWidth > 767 ? 0 : 125)
            }px + ${dragOffset}px))`,
            willChange: isDragging ? "transform" : "auto",
          }}
        >
          {BASE_CARDS.map((card, i) => {
            const distance = Math.abs(index - i);
            const isLeftCard = i < index;
            const isRightCard = i > index;
            let height = 180;
            let width = CARD_WIDTH;
            let translateX = "0";

            if (distance === 0) {
              height = window.innerWidth < 768 ? 346 : 428;
              width = window.innerWidth < 768 ? 281 : CARD_WIDTH;
            } else if (distance === 1) {
              height = window.innerWidth < 768 ? 346 : 428;
              width = window.innerWidth < 768 ? 281 : 327;
              translateX =
                window.innerWidth < 768 ? (isLeftCard ? "40px" : "-150px") : "";
            } else if (distance === 2) {
              height = 346;
              width = 327;
            }

            const scale = distance === 0 ? 1 : 0.85;
            const opacity = distance === 0 ? 1 : 0.3;
            const blur = distance === 0 ? 0 : distance === 1 ? 1 : 2;

            return (
              <div
                key={i}
                className={clsx(
                  " relative  rounded-[35px] items-center mx-[12px] shrink-0 md:w-[328px] w-[349px] transition-all duration-500 overflow-hidden",
                  distance === 0
                    ? "shadow-con-custom-shadow bg-white relative z-10 md:translate-x-0 -translate-x-[68px] -translate-y-14 md:translate-y-0 md:mb-[70px]"
                    : distance === 1
                    ? "relative z-0  md:translate-x-0 translate-x-10 translate-y-0 md:translate-y-0 mb-[30px]"
                    : "relative z-0  md:translate-x-0 translate-x-10 translate-y-0 md:translate-y-0"
                )}
                style={{
                  height: `${height}px`,
                  width: `${width}px`,
                  transformOrigin: "bottom",
                  opacity,
                  scale,
                  filter: `blur(${blur}px)`,
                  transform:
                    distance === 1 && window.innerWidth < 768
                      ? `translateX(${translateX})`
                      : undefined,
                }}
              >
                <div className="flex flex-col">
                  <div className="md:w-[326px] w-[281px] h-[325px] relative">
                    <Image
                      src={card.img}
                      alt="Avatar"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="absolute border border-gray-300 bottom-0 left-0 right-0 md:h-[142px] h-[99px] bg-white rounded-b-[35px]">
                    <div className="w-full flex justify-center items-center md:mt-[27px] mt-[20px] md:mb-0 mb-2">
                      <p
                        className={`font-dm-sans text-con-custom-green-bold lg:text-[21px] md:text-[18px] text-[15px]  tracking-[0%] font-normal md:leading-[30px] leading-[18px] `}
                      >
                        {card.name}
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center px-4">
                      <p
                        className={`font-dm-sans text-black lg:text-[15px] md:text-[14px] text-[11px] font-light text-center tracking-[0%] lg:leading-[25px] md:leading-[20px] leading-[16px]`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {BASE_CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110",
              index === i
                ? "bg-con-custom-green-bold scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${i + 1}`}
            disabled={isDragging}
          />
        ))}
      </div>
    </div>
  );
};
