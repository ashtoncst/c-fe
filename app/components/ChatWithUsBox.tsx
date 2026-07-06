"use client";
import { ChatWithUsHeader } from "@/components/chatbox/ChatWithUsHeader";
import { ChatWithUsMessage } from "@/components/chatbox/ChatWithUsMessage";
import { ChatIcon } from "@/public/icons/ChatIcon";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const ChatWithUsBox = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpenModal(false);
      }
    }

    if (isOpenModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenModal]);
  const isAiAssistant = usePathname().includes("/ai-assistant");
  return (
    <>
      {!isOpenModal && !isAiAssistant && (
        <div onClick={handleOpenModal} className="cursor-pointer w-fit">
          <ChatIcon width={150} height={70} />
        </div>
      )}
      <div>
        {isOpenModal && !isAiAssistant && (
          <div ref={modalRef} className="z-[999999] ">
            <ChatWithUsHeader handleOpenModal={handleOpenModal} />
            <ChatWithUsMessage />
          </div>
        )}
      </div>
    </>
  );
};
