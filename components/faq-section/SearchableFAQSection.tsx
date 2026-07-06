"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { RESOURCES_FAQ_DATA } from "@/modules/resources-module/constants/ResourcesFAQ.constant";

interface FAQItemProps {
  faq: { id: number; title: string; content: string };
  isOpen: boolean;
  onToggle: () => void;
  highlightText: (text: string, query: string) => React.ReactNode;
  searchQuery: string;
}

const FAQItem = ({ faq, isOpen, onToggle, highlightText, searchQuery }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="flex justify-between items-start w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-dm-sans text-black text-[18px] leading-[26px] font-semibold pr-6`}>
          {highlightText(faq.title, searchQuery)}
        </span>
        <div className="flex-shrink-0 text-gray-500 mt-1 transition-transform duration-300" style={{ transform: isOpen ? "rotate(0deg)" : "rotate(0deg)" }}>
          {isOpen ? (
            <MinusIcon />
          ) : (
            <PlusIcon width={14} height={14} color="black" />
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? (contentHeight > 0 ? `${contentHeight}px` : "1000px") : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={`font-dm-sans pb-4 text-black text-[18px] leading-[26px] font-light`}>
          {faq.content.split("\n\n").map((p, pIndex) => (
            <p key={pIndex} className={pIndex > 0 ? "mt-3" : ""}>
              {highlightText(p, searchQuery)}
            </p>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-con-custom-green/20 w-full" />
    </div>
  );
};

type Props = {
  nameSection?: string;
  FAQ_Data?: typeof RESOURCES_FAQ_DATA;
};

export const SearchableFAQSection = ({
  nameSection = "Frequently\nAsked Questions",
  FAQ_Data = RESOURCES_FAQ_DATA,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_Data;

    const query = searchQuery.toLowerCase();
    const result: typeof RESOURCES_FAQ_DATA = [];

    FAQ_Data.forEach((group) => {
      const filteredFaqs = group.faq.filter(
        (f) =>
          f.title.toLowerCase().includes(query) ||
          f.content.toLowerCase().includes(query)
      );
      if (filteredFaqs.length > 0) {
        result.push({ ...group, faq: filteredFaqs });
      }
    });

    return result;
  }, [searchQuery, FAQ_Data]);

  const actualOpenFaqs = useMemo(() => {
    if (!searchQuery.trim()) return openFaqs;
    const allIds = new Set<number>();
    filteredData.forEach((g) => g.faq.forEach((f) => allIds.add(f.id)));
    return allIds;
  }, [searchQuery, openFaqs, filteredData]);

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="text-con-custom-green-bold font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full flex flex-col lg:flex-row pt-8 pb-16 gap-10 lg:gap-16 xl:gap-24">
      {/* Left column: Title */}
      <div className="lg:w-[260px] xl:w-[300px] flex-shrink-0">
        <h1
          className={`font-funnel text-con-custom-green-bold text-[35px] leading-tight font-light whitespace-pre-line`}
        >
          {nameSection}
        </h1>
      </div>

      {/* Right column: Search + FAQ */}
      <div className="flex-1 min-w-0">
        {/* Search bar */}
        <div className="relative w-full mb-10">
          <input
            type="text"
            placeholder="Search our FAQs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-400 pl-5 pr-12 py-[11px] leading-none outline-none focus:border-con-custom-green transition-colors font-dm-sans font-normal text-[13px] text-black placeholder-gray-500 placeholder:text-[13px] placeholder:font-dm-sans placeholder:font-normal placeholder:leading-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* FAQ content */}
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No results found for &ldquo;{searchQuery}&rdquo;
          </div>
        ) : (
          filteredData.map((group) => (
            <div key={group.id} className="mb-10">
              {!searchQuery && (
                <h2
                  className={`font-funnel text-con-custom-green-bold text-[35px] leading-[45px] font-light mb-4`}
                >
                  {group.label}
                </h2>
              )}

              <div className="flex flex-col">
                {group.faq.map((faq) => {
                  const isOpen = actualOpenFaqs.has(faq.id);
                  return (
                    <FAQItem
                      key={faq.id}
                      faq={faq}
                      isOpen={isOpen}
                      onToggle={() => toggleFaq(faq.id)}
                      highlightText={highlightText}
                      searchQuery={searchQuery}
                    />
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

/** @deprecated Use SearchableFAQSection instead */
export const ResourcesFAQSection = SearchableFAQSection;
