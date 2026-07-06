"use client";
import { IMessage, useChatStore } from "@/app/store/useChatStore";
import { ButtonBase } from "@/components/button/ButtonBase";
import { localStorageUtil } from "@/libs/storage";
import { AIButtonSendIcon } from "@/public/icons/AIButtonSendIcon";
import Image from "next/image";
import React, { useEffect, useRef, useState, memo } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";
import { useChatSession } from "@/hooks/useChatSession";
import { useChatHistory } from "../hooks/useAIChat";
import { useChatSocket } from "../hooks/useChatSocket";
import { parseMarkdownBold } from "@/utils/parseMarkdownBold";
import { SUGGESTED_TOPICS } from "../constants/AIAssistant.constant";

type Props = {
  input?: string;
  button?: string | React.ReactNode;
  isShowSuggestions?: boolean;
};

const MAX_MESSAGE_LENGTH = 2000;
const CHARACTER_WARNING_THRESHOLD = Math.floor(MAX_MESSAGE_LENGTH * 0.9);

// Memo component để tránh re-render không cần thiết
const MessageItem = memo(
  ({ message }: { message: IMessage }) => {
    // Render bot text instantly via parseMarkdownBold (same renderer as the
    // floating widget). The old TypeWriter animation set innerHTML
    // character-by-character and dropped partial <strong> tags, so bold never
    // rendered on this page — instant JSX rendering fixes that and keeps both
    // chat interfaces consistent.
    if (message.isUser === true) {
      return (
        <div className="flex justify-end gap-x-[29px] mt-[28px]">
          <div>
            <div className="py-[10px] rounded-[24px] px-[16px] text-white font-normal bg-con-custom-green text-xs leading-[150%] tracking-[0%] md:max-w-[200px] max-w-[200px] break-words whitespace-pre-wrap">
              {message.message}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/ai-assistant/user.png"
              alt="user"
              width={53}
              height={52}
              priority={true}
              fetchPriority="high"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex gap-x-5 mt-[41px]">
          <div className="flex justify-center items-center">
            <Image src="/icons/convo-avatar.png" alt="Convo" width={40} height={40} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
          </div>
          <div className={`font-dm-sans flex flex-col gap-y-2`}>
            <p>Convo</p>
            <div className="flex justify-center items-center py-[10px] w-[65%] rounded-[24px] px-[31px] font-normal bg-con-custom-gray-background-chat text-xs leading-[120%] tracking-[0%] break-words whitespace-pre-wrap">
              <div>{parseMarkdownBold(message.message)}</div>
            </div>
          </div>
        </div>
      );
    }
  },
  (prevProps, nextProps) => {
    return (
      prevProps.message.id === nextProps.message.id &&
      prevProps.message.message === nextProps.message.message &&
      prevProps.message.shouldType === nextProps.message.shouldType
    );
  }
);

MessageItem.displayName = "MessageItem";

export const ChatInputBox = (props: Props) => {
  // Bootstrap a server-side session if none exists yet (mirrors the floating
  // widget). Safe no-op when an id is already present for this tab.
  useChatSession();
  const sessionId = localStorageUtil.getSessionId();
  const { button = "Send", isShowSuggestions = true, input = "" } = props;

  const [isLoading, setIsLoading] = useState(false);
  const { tokens, recommendations, sendMessage, resetTokens } =
    useChatSocket(sessionId, { onError: () => setIsLoading(false) });
  const {
    messagesGlobal,
    setMessagesGlobal,
    initializeMessages,
    setCurrentSessionId,
  } = useChatStore();
  const [chatInputValue, setChatInputValue] = useState(input);
  const [showChat, setShowChat] = useState(false);
  const [currentAIResponse, setCurrentAIResponse] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Track session changes and clear old messages when session changes
  // [SECURITY FIX] Removed console.log that printed the session ID to the
  // browser console on every render, enabling easy session hijacking by
  // anyone with access to DevTools.
  useEffect(() => {
    setCurrentSessionId(sessionId);
  }, [sessionId, setCurrentSessionId]);

  // Khởi tạo tin nhắn đầu tiên nếu chưa có
  useEffect(() => {
    initializeMessages();
  }, [initializeMessages]);

  // Tự động scroll xuống khi có message mới
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesGlobal, currentAIResponse]);

  // Lắng nghe phản hồi từ WebSocket và cập nhật response
  useEffect(() => {
    if (tokens.length > 0) {
      const fullResponse = tokens.join("");
      // [SECURITY FIX] Removed console.log that printed token count and
      // response length, reducing observable internal state in the console.
      setCurrentAIResponse(fullResponse);
      setIsLoading(false);
      setMessagesGlobal((prev) => {
        const lastMessage = prev[prev.length - 1];

        if (lastMessage && lastMessage.isUser === false) {
          return [
            ...prev.slice(0, -1),
            {
              ...lastMessage,
              message: fullResponse,
              shouldType: false,
            },
          ];
        } else {
          return [
            ...prev,
            {
              id: uuidv4(),
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }),
              isUser: false,
              message: fullResponse,
              shouldType: false,
            },
          ];
        }
      });

      // Don't delay token clearing - clear immediately to prevent race conditions
      // The "start" event will clear tokens before the next message anyway
      // resetTokens(); // Moved to handleSendMessage instead
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens]);

  useEffect(() => {
    if (tokens.length === 0 && currentAIResponse) {
      setCurrentAIResponse("");
    }
    // [SECURITY FIX] Removed console.log that announced token/response
    // clearing, reducing internal state visibility in the browser console.
  }, [tokens, currentAIResponse]);

  // [SECURITY FIX] Removed debug useEffect that logged isLoading state on
  // every change, reducing console noise and internal state exposure.

  const { data, isError, refetch } = useChatHistory(sessionId);

  const handleSendMessage = () => {
    if (!chatInputValue.trim() || isLoading) return;

    const message = chatInputValue.trim();

    if (!showChat && messagesGlobal.length > 0) setShowChat(true);

    setMessagesGlobal((prev) => [
      ...prev,
      {
        id: uuidv4(),
        message,
        isUser: true,
        shouldType: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      },
    ]);
    setChatInputValue("");
    // [SECURITY FIX] Removed console.log that announced message sends.
    resetTokens(); // Clear any leftover tokens from previous message
    setIsLoading(true);
    sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggleSuggestions = (title: string) => {
    setChatInputValue(title);
  };

  const handleSuggestedTopic = (topic: (typeof SUGGESTED_TOPICS)[number]) => {
    if (isLoading) return;

    if (!showChat && messagesGlobal.length > 0) setShowChat(true);

    setMessagesGlobal((prev) => [
      ...prev,
      {
        id: uuidv4(),
        message: topic.label,
        isUser: true,
        shouldType: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      },
    ]);
    setChatInputValue("");
    resetTokens();
    setIsLoading(true);
    sendMessage(topic.prompt);
  };

  return (
    <div className="w-full">
      <div>
        {showChat && messagesGlobal.length === 0 ? (
          <>
            <div className="flex lg:justify-start justify-center">
              <p
                className={`font-funnel lg:px-5 text-con-custom-green-bold md:text-[50px] text-[32px] font-normal md:leading-[100%] leading-[34px] tracking-[0%] text-left md:text-center lg:text-left`}
              >
                How can we help?
              </p>
            </div>

            <div className="bg-[#F5F5F5] h-[238px] rounded-[24px] md:p-[36px] mt-5 p-5 md:relative">
              <TextareaAutosize
                className="bg-transparent outline-none w-full py-3"
                placeholder="Your Message"
                maxRows={6}
                maxLength={MAX_MESSAGE_LENGTH}
                onKeyDown={handleKeyPress}
                value={chatInputValue}
                onChange={(e) => setChatInputValue(e.target.value)}
              />
              {chatInputValue.length > CHARACTER_WARNING_THRESHOLD && (
                <span className="text-xs text-gray-400 absolute bottom-2 right-4">
                  {chatInputValue.length}/{MAX_MESSAGE_LENGTH}
                </span>
              )}
              <div className="absolute md:bottom-[21px] bottom-[-79px] md:right-[24px] md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2 md:w-auto w-full">
                <ButtonBase
                  onClick={handleSendMessage}
                  title={
                    <p className="flex items-center gap-[5px]">
                      <span
                        className={`font-dm-sans text-white font-normal text-[13px] leading-[100%] tracking-[0%]`}
                      >
                        {button}
                      </span>
                    </p>
                  }
                  className="text-xs md:w-[142px] w-full h-[35px] bg-con-custom-green rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%] flex justify-center"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-full gap-2 mt-5">
              {SUGGESTED_TOPICS.map((topic) => {
                const Icon = topic.icon;
                return (
                  <button
                    key={topic.id}
                    onClick={() => handleSuggestedTopic(topic)}
                    className="flex items-center gap-1.5 w-fit border bg-con-custom-gray-input border-gray-300 rounded-[24px] cursor-pointer hover:bg-gray-200 transition px-4 py-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-500" />
                    <span
                      className="font-dm-sans text-xs text-con-custom-text-black font-normal leading-[100%] tracking-[0%]"
                    >
                      {topic.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {isShowSuggestions && (
              <div className="flex flex-wrap w-full gap-x-2 relative">
                {data?.data?.conversations
                  .slice(0, 5)
                  .map((item: any, index: number) => (
                    <div
                      onClick={() => handleToggleSuggestions(item.userMessage)}
                      key={index}
                      className="flex mt-[30px] w-fit max-w-[318px] border bg-con-custom-gray-input border-gray-300 rounded-[24px] cursor-pointer hover:bg-gray-200 transition"
                    >
                      <span
                        className={`font-dm-sans text-xs text-con-custom-text-black font-normal leading-[100%] tracking-[0%] md:mx-[37px] mx-4 my-[9px] truncate`}
                      >
                        {item.userMessage}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </>
        ) : (
          <div
            ref={messagesContainerRef}
            className="max-h-[calc(80vh-100px)] min-h-[calc(80vh-100px)] overflow-y-auto scrollbar-hide"
          >
            {messagesGlobal.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}

            {isLoading && (
              <div className="flex gap-x-5 mt-[41px]">
                <Image src="/icons/convo-avatar.png" alt="Convo" width={40} height={40} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div className={`font-dm-sans flex flex-col gap-y-2`}>
                  <p>Convo</p>
                  <div className="flex justify-center items-center py-[10px] rounded-[24px] px-[31px] bg-con-custom-gray-background-chat text-xs leading-[100%] tracking-[0%]">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-con-custom-green"></div>
                      <span>Typing...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Input section */}
            <div className="flex w-full gap-x-[19px] mt-[100px] absolute bottom-[-70px] left-0 right-0 lg:px-0">
              <div className="w-full flex justify-start items-center px-3 py-3 bg-con-custom-gray-background-chat rounded-[24px]">
                <div className="flex-1 flex items-center">
                  <TextareaAutosize
                    className={`font-dm-sans w-full outline-none bg-con-custom-gray-background-chat px-[17px] text-black placeholder:text-black placeholder:font-light placeholder:text-[15px] resize-none`}
                    placeholder="Your Message"
                    maxRows={6}
                    maxLength={MAX_MESSAGE_LENGTH}
                    onKeyDown={handleKeyPress}
                    value={chatInputValue}
                    onChange={(e) => setChatInputValue(e.target.value)}
                  />
                </div>
              </div>
              <div
                className={`cursor-pointer flex justify-center items-center flex-shrink-0 ${
                  isLoading ? "opacity-50" : ""
                }`}
                onClick={!isLoading ? handleSendMessage : undefined}
              >
                <AIButtonSendIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
