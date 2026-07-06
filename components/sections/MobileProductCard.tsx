"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "./ProductsSection";

interface MobileProductCardProps {
  product: Product;
  cardTitleColor: string;
}

export const MobileProductCard = ({ product, cardTitleColor }: MobileProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isStringDescription = typeof product.description === "string" && product.description.length > 0;
  const hasDescription = product.description !== null && product.description !== undefined && product.description !== "";

  const imageBlock = (
    <div className={`relative w-full h-[240px] overflow-hidden flex-shrink-0 ${product.imageContainerClassName || ""}`}>
      <Image
        src={product.image}
        alt={typeof product.title === "string" ? product.title : "Product Image"}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={
          product.href
            ? `${product.imageClassName || "object-cover"} transition-transform duration-500 ease-out group-hover:scale-110`
            : product.imageClassName || "object-cover"
        }
      />
    </div>
  );

  const titleBlock = (
    <div className="flex items-center justify-center px-6 pt-6 text-center">
      <h3 className={`text-[21px] ${cardTitleColor} font-normal leading-tight font-dm-sans`}>
        {product.title}
      </h3>
    </div>
  );

  return (
    <div className="bg-white rounded-[50px] overflow-hidden flex flex-col">
      {product.href ? (
        <Link
          href={product.href}
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]"
        >
          {imageBlock}
          {titleBlock}
        </Link>
      ) : (
        <>
          {imageBlock}
          {titleBlock}
        </>
      )}

      {hasDescription && (
        <div className="px-6 pb-6 pt-3 w-full text-center">
          <div
            className={`text-[15px] text-black font-light leading-relaxed overflow-hidden transition-all duration-300 font-dm-sans ${
              isExpanded ? "max-h-[500px]" : "max-h-[48px]"
            }`}
          >
            {isStringDescription ? (
              <p>{product.description as string}</p>
            ) : (
              product.description
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-[14px] text-[#038F8D] font-normal mt-2 hover:text-[#027573] transition-colors duration-200 cursor-pointer font-dm-sans`}
          >
            {isExpanded ? "Read Less ›" : "Read More ›"}
          </button>
        </div>
      )}
    </div>
  );
};
