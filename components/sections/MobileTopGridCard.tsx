"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TopGridCard } from "./ProductsSection";

interface MobileTopGridCardProps {
  card: TopGridCard;
}

export const MobileTopGridCard = ({ card }: MobileTopGridCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isStringDescription = typeof card.description === "string" && card.description.length > 0;
  const hasDescription = card.description !== null && card.description !== undefined && card.description !== "";

  const headerBlock = (
    <div className="p-10 pb-0 flex-grow flex flex-col items-center">
      <h3 className={`text-[30px] text-white w-full text-left mb-8 font-normal leading-[38px] font-dm-sans`}>
        {card.title}
      </h3>
      <div className="relative w-full aspect-video max-w-[320px] max-h-[160px] flex justify-center items-center mb-10">
        <Image
          src={card.image}
          alt={typeof card.title === "string" ? card.title : "Card Image"}
          fill
          sizes="100vw"
          className={
            card.href
              ? "object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              : "object-contain"
          }
        />
      </div>
    </div>
  );

  return (
    <div className="bg-black rounded-[2rem] overflow-hidden flex flex-col justify-between">
      {card.href ? (
        <Link
          href={card.href}
          className="group flex flex-col flex-grow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]"
        >
          {headerBlock}
        </Link>
      ) : (
        headerBlock
      )}
      {hasDescription && (
        <div className="bg-white px-8 py-6 w-full text-center">
          <div
            className={`overflow-hidden transition-all duration-300 font-dm-sans ${
              isExpanded ? "max-h-[500px]" : "max-h-[48px]"
            }`}
          >
            {isStringDescription ? (
              <p className="text-[15px] text-black font-light leading-relaxed">
                {card.description as string}
              </p>
            ) : (
              <div className="text-[15px] text-black font-light leading-relaxed">
                {card.description}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-[13px] text-[#038F8D] font-medium mt-2 hover:text-[#027573] transition-colors duration-200 cursor-pointer font-dm-sans`}
          >
            {isExpanded ? "Read Less ›" : "Read More ›"}
          </button>
        </div>
      )}
    </div>
  );
};
