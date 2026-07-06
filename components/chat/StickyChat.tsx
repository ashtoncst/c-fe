"use client";

import { ChatWithUsHeader } from "@/components/chatbox/ChatWithUsHeader";
import { ChatWithUsMessage } from "@/components/chatbox/ChatWithUsMessage";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export const StickyChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isAiAssistant = pathname.includes("/ai-assistant");

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      // Always reopen in the docked size; never linger in maximized state.
      if (prev) setIsMaximized(false);
      return !prev;
    });
  }, []);

  const handleToggleMaximize = useCallback(() => {
    setIsMaximized((prev) => !prev);
  }, []);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (isAiAssistant) return null;

  return (
    <>
      {/* Chat Modal */}
      {isOpen && (
        <>
          {/* Dimmed backdrop — only when maximized on desktop */}
          {isMaximized && (
            <div
              className="hidden md:block fixed inset-0 bg-black/40 z-[999998]"
              aria-hidden="true"
            />
          )}
          <div
            ref={modalRef}
            className={
              isMaximized
                ? "fixed inset-0 flex flex-col md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[999999] md:w-[70vw] md:h-[80vh] md:max-w-[1100px] overflow-hidden md:rounded-2xl shadow-2xl shadow-black/15 ring-1 ring-black/[0.05]"
                : "fixed inset-3 flex flex-col md:inset-auto md:bottom-[76px] md:left-auto md:right-6 z-[999999] md:w-[380px] lg:w-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/15 ring-1 ring-black/[0.05]"
            }
            role="dialog"
            aria-label="Chat window"
          >
            <ChatWithUsHeader
              handleOpenModal={handleToggle}
              isMaximized={isMaximized}
              onToggleMaximize={handleToggleMaximize}
            />
            <ChatWithUsMessage isMaximized={isMaximized} />
          </div>
        </>
      )}

      {/* Sticky Chat Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="fixed bottom-20 right-6 md:bottom-24 z-[100] cursor-pointer"
        aria-label="Chat with Us"
        aria-expanded={isOpen}
      >
        {/* Desktop: purple pill with text + speech tail */}
        <div
          className="relative bg-con-custom-purple hover:bg-[#6c26c6] text-white text-[15px] font-normal font-dm-sans px-6 py-3 leading-normal rounded-full whitespace-nowrap hidden md:block transition-colors duration-300
                     after:content-['']
                     after:absolute
                     after:top-[calc(100%-1px)]
                     after:right-4
                     after:w-[18px]
                     after:h-[22px]
                     after:bg-con-custom-purple
                     hover:after:bg-[#6c26c6]
                     after:transition-colors
                     after:duration-300
                     after:[clip-path:polygon(0_0,100%_0,0_100%)]"
        >
          Chat with Us
        </div>

        {/* Mobile: purple circle with 3 dots */}
        <div
          className="relative bg-con-custom-purple hover:bg-[#6c26c6] text-white w-16 h-16 rounded-full flex items-center justify-center md:hidden transition-colors duration-300
                     after:content-['']
                     after:absolute
                     after:top-[calc(100%-12px)]
                     after:right-[10px]
                     after:w-[16px]
                     after:h-[20px]
                     after:bg-con-custom-purple
                     hover:after:bg-[#6c26c6]
                     after:transition-colors
                     after:duration-300
                     after:[clip-path:polygon(0_0,100%_0,100%_100%)]"
        >
          <div className="flex gap-[5px] items-center justify-center pb-[2px]">
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          </div>
        </div>
      </button>
    </>
  );
};
