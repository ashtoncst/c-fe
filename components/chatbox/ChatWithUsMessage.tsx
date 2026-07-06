"use client";

import { localStorageUtil } from "@/libs/storage";
import { useChatSocket } from "@/modules/ai-assistant-module/hooks/useChatSocket";
import { useChatHistory } from "@/modules/ai-assistant-module/hooks/useAIChat";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, memo } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useChatStore, IMessage } from "@/app/store/useChatStore";
import { Send } from "lucide-react";
import { SUGGESTED_TOPICS } from "@/modules/ai-assistant-module/constants/AIAssistant.constant";
import { parseMarkdownBold, ProductLink } from "@/utils/parseMarkdownBold";
import { formatTimestamp } from "@/utils/formatTimestamp";
import { useChatSession } from "@/hooks/useChatSession";

const MAX_PREVIOUS_QUESTIONS = 3;
const MAX_QUESTION_LENGTH = 60;

const derivePreviousQuestions = (
  conversations:
    | Array<{ userMessage?: string | null }>
    | null
    | undefined
): string[] => {
  if (!conversations || conversations.length === 0) return [];
  const seen = new Set<string>();
  const result: string[] = [];
  // Walk most-recent first so the freshest questions are surfaced first.
  for (let i = conversations.length - 1; i >= 0; i--) {
    const raw = conversations[i]?.userMessage?.trim();
    if (!raw) continue;
    const key = raw.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(raw);
    if (result.length >= MAX_PREVIOUS_QUESTIONS) break;
  }
  return result;
};

/* ─── Typing Indicator ─── */
const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-4 py-3">
    <div className="w-1.5 h-1.5 bg-[#8638E5]/60 rounded-full animate-bounce [animation-delay:0ms]" />
    <div className="w-1.5 h-1.5 bg-[#8638E5]/60 rounded-full animate-bounce [animation-delay:150ms]" />
    <div className="w-1.5 h-1.5 bg-[#8638E5]/60 rounded-full animate-bounce [animation-delay:300ms]" />
  </div>
);

/* ─── Single Message Bubble ─── */
const MessageItem = memo(
  ({
    message,
    onOptionClick,
    products,
  }: {
    message: IMessage;
    onOptionClick: (option: { id: string; text: string; value: string }) => void;
    products?: ProductLink[];
  }) => {
    const isUser = message.isUser;

    return (
      <div className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start"} mb-3`}>
        {/* Bot avatar */}
        {!isUser && (
          <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden mt-0.5 shadow-sm">
            <Image src="/icons/convo-avatar.png" alt="Convo" width={28} height={28} className="w-full h-full object-cover" />
          </div>
        )}

        <div className={`max-w-[85%] sm:max-w-[75%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
          {/* Bubble */}
          <div
            className={`rounded-2xl px-3.5 py-2.5 ${
              isUser
                ? "bg-gradient-to-br from-[#8638E5] to-[#6D28D9] text-white rounded-br-md"
                : "bg-[#F4F4F5] text-gray-800 rounded-bl-md"
            }`}
          >
            <div
              className={`font-dm-sans text-[13.5px] font-normal leading-[1.55] break-words whitespace-pre-wrap`}
            >
              {isUser
                ? message.message
                : message.message
                ? <div>{parseMarkdownBold(message.message, products)}</div>
                : null}
            </div>
          </div>

          {/* Timestamp */}
          <span
            className={`text-[10px] text-gray-400 mt-1 px-1 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {message.timestamp}
          </span>

          {/* Quick reply options */}
          {message.options && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {message.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onOptionClick(option)}
                  className={`font-dm-sans text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#8638E5]/20 text-[#8638E5] bg-white hover:bg-[#8638E5]/5 hover:border-[#8638E5]/40 transition-all duration-200 cursor-pointer`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
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

/* ─── Main Chat Message Area ─── */
export const ChatWithUsMessage = ({
  isMaximized = false,
}: {
  isMaximized?: boolean;
} = {}) => {
  const {
    messagesGlobal,
    chatInput,
    setChatInput,
    setMessagesGlobal,
    initializeMessages,
    setCurrentSessionId,
  } = useChatStore();
  // Bootstrap server-side session (sets HttpOnly cookie when the feature
  // flag is on). Safe no-op if an id already exists for this tab.
  useChatSession();
  const sessionId = localStorageUtil.getSessionId();
  const [isLoading, setIsLoading] = useState(false);
  const { tokens, recommendations, sendMessage, isBotResponding } =
    useChatSocket(sessionId, {
      onError: () => setIsLoading(false),
    });

  // Expose the latest server-recommended products so bot messages can link
  // product names to their detail pages. The backend may emit a `url` field
  // in the future; until then links render as plain bold (no anchor).
  const productLinks: ProductLink[] = recommendations.map((p) => ({
    name: p.name,
    url: (p as unknown as { url?: string }).url,
  }));
  const [, setCurrentAIResponse] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSessionId(sessionId);
  }, [sessionId, setCurrentSessionId]);

  useEffect(() => {
    initializeMessages();
  }, [initializeMessages]);

  // Restore chat history from API on mount
  const { data: chatHistory } = useChatHistory(sessionId);
  const hasRestoredHistory = useRef(false);

  useEffect(() => {
    if (hasRestoredHistory.current) return;

    const conversations = chatHistory?.data?.conversations;
    if (!conversations || conversations.length === 0) return;

    // Read store directly to avoid subscribing to every message change
    const currentMessages = useChatStore.getState().messagesGlobal;
    const isDefaultState =
      currentMessages.length === 0 ||
      (currentMessages.length === 1 && !currentMessages[0].isUser);

    if (!isDefaultState) return;

    hasRestoredHistory.current = true;

    const restoredMessages: IMessage[] = [];
    for (const convo of conversations) {
      if (convo.userMessage) {
        restoredMessages.push({
          id: uuidv4(),
          message: convo.userMessage,
          isUser: true,
          shouldType: false,
          timestamp: formatTimestamp(convo.createdAt),
        });
      }
      if (convo.botResponse) {
        restoredMessages.push({
          id: uuidv4(),
          message: convo.botResponse,
          isUser: false,
          shouldType: false,
          timestamp: formatTimestamp(convo.createdAt),
        });
      }
    }

    if (restoredMessages.length > 0) {
      setMessagesGlobal(restoredMessages);
    }
  }, [chatHistory, setMessagesGlobal]);

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
  }, [messagesGlobal]);

  useEffect(() => {
    if (tokens.length > 0) {
      const fullResponse = tokens.join("");
      setTimeout(() => {
        setCurrentAIResponse(fullResponse);
        setIsLoading(false);

        setMessagesGlobal((prev) => {
          const lastMessage = prev[prev.length - 1];

          if (lastMessage && !lastMessage.isUser) {
            return [
              ...prev.slice(0, -1),
              { ...lastMessage, message: fullResponse },
            ];
          } else {
            const botMessage: IMessage = {
              id: `bot-${Date.now()}`,
              message: fullResponse,
              timestamp: formatTimestamp(new Date()),
              isUser: false,
              shouldType: false,
            };
            return [...prev, botMessage];
          }
        });
      }, 0);
    }
  }, [tokens, setMessagesGlobal]);

  const handleSendMessage = () => {
    if (!chatInput.trim() || isLoading) return;

    const message = chatInput.trim();
    const userMessage: IMessage = {
      id: uuidv4(),
      message,
      timestamp: formatTimestamp(new Date()),
      isUser: true,
      shouldType: true,
    };

    setMessagesGlobal((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsLoading(true);
    sendMessage(message);
  };

  const handleSuggestedTopic = (topic: (typeof SUGGESTED_TOPICS)[number]) => {
    if (isLoading) return;

    // Display text and sent text stay in sync so the user's message bubble
    // reflects what the bot actually receives.
    const userMessage: IMessage = {
      id: uuidv4(),
      message: topic.prompt,
      timestamp: formatTimestamp(new Date()),
      isUser: true,
      shouldType: false,
    };

    setMessagesGlobal((prev) => [...prev, userMessage]);
    setIsLoading(true);
    sendMessage(topic.prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOptionClick = (option: {
    id: string;
    text: string;
    value: string;
  }) => {
    if (isLoading) return;

    const userMessage: IMessage = {
      id: uuidv4(),
      message: option.text,
      timestamp: formatTimestamp(new Date()),
      isUser: true,
      shouldType: true,
    };

    setMessagesGlobal((prev) => [...prev, userMessage]);
    setIsLoading(true);
    sendMessage(option.text);
  };

  const isInitialState = messagesGlobal.length <= 1;

  // Build the "what you asked recently" pills from server-restored history.
  // Only show them for returning users (history exists) and only while the
  // user hasn't started typing a new message.
  const previousQuestions = useMemo(
    () => derivePreviousQuestions(chatHistory?.data?.conversations),
    [chatHistory]
  );
  const showPreviousQuestions =
    !isInitialState &&
    !isLoading &&
    !isBotResponding &&
    chatInput.trim().length === 0 &&
    previousQuestions.length > 0;

  const handlePreviousQuestion = (question: string) => {
    if (isLoading || isBotResponding) return;
    const userMessage: IMessage = {
      id: uuidv4(),
      message: question,
      timestamp: formatTimestamp(new Date()),
      isUser: true,
      shouldType: false,
    };
    setMessagesGlobal((prev) => [...prev, userMessage]);
    setIsLoading(true);
    sendMessage(question);
  };

  return (
    <div className={`font-dm-sans flex flex-col flex-1 bg-white rounded-b-2xl shadow-2xl shadow-black/10 overflow-hidden`}>
      {/* Messages container */}
      <div
        ref={messagesContainerRef}
        className={`flex-1 overflow-y-auto px-4 pt-4 pb-2 min-h-0 scroll-smooth ${
          isMaximized
            ? ""
            : "md:min-h-[280px] md:max-h-[380px] lg:min-h-[340px] lg:max-h-[440px]"
        }`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E4E4E7 transparent",
        }}
      >
        {/* Date separator */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[11px] text-gray-400 font-medium">
            {new Date().toLocaleDateString([], {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Messages */}
        {messagesGlobal.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            onOptionClick={handleOptionClick}
            products={productLinks}
          />
        ))}

        {/* Suggested topics — shown only on initial state */}
        {isInitialState && !isLoading && (
          <div className="mt-3 mb-2">
            <p className="text-[11px] text-gray-400 font-medium mb-2 px-1">
              Suggested topics
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_TOPICS.map((topic) => {
                const Icon = topic.icon;
                return (
                  <button
                    key={topic.id}
                    onClick={() => handleSuggestedTopic(topic)}
                    className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-2 rounded-xl border border-gray-200 text-gray-600 bg-white hover:border-[#8638E5]/30 hover:text-[#8638E5] hover:bg-[#8638E5]/[0.03] transition-all duration-200 cursor-pointer group"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#8638E5] transition-colors duration-200" />
                    {topic.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex gap-2.5 mb-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden mt-0.5 shadow-sm">
              <Image src="/icons/convo-avatar.png" alt="Convo" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#F4F4F5] rounded-2xl rounded-bl-md">
              <TypingIndicator />
            </div>
          </div>
        )}

        {/* Previous-question shortcuts — restored for returning users so they
            can quickly re-fire one of their last 3 questions (UAT AI-003). */}
        {showPreviousQuestions && (
          <div className="mt-3 mb-1">
            <p className="text-[11px] text-gray-400 font-medium mb-2 px-1">
              What you asked recently
            </p>
            <div className="flex flex-col items-start gap-1.5">
              {previousQuestions.map((question) => {
                const truncated =
                  question.length > MAX_QUESTION_LENGTH
                    ? `${question.slice(0, MAX_QUESTION_LENGTH).trim()}…`
                    : question;
                return (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handlePreviousQuestion(question)}
                    className="font-dm-sans text-left text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#8638E5]/20 text-[#8638E5] bg-white hover:bg-[#8638E5]/5 hover:border-[#8638E5]/40 transition-all duration-200 cursor-pointer max-w-full truncate"
                    title={question}
                  >
                    {truncated}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-100 px-3 py-3">
        <div
          className={`flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 transition-colors duration-200 focus-within:border-[#8638E5]/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#8638E5]/10 ${
            isLoading || isBotResponding ? "opacity-50" : ""
          }`}
        >
          <TextareaAutosize
            className={`font-dm-sans flex-1 bg-transparent outline-none text-[13.5px] text-gray-800 placeholder:text-gray-400 resize-none py-0.5 leading-[1.5]`}
            placeholder={
              isLoading || isBotResponding
                ? "AI is thinking..."
                : "Type a message..."
            }
            maxRows={4}
            minRows={1}
            maxLength={2000}
            onKeyDown={handleKeyPress}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            disabled={isLoading || isBotResponding}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || isBotResponding || !chatInput.trim()}
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
              chatInput.trim() && !isLoading && !isBotResponding
                ? "bg-gradient-to-br from-[#8638E5] to-[#6D28D9] text-white shadow-sm shadow-[#8638E5]/25 hover:shadow-md hover:shadow-[#8638E5]/30"
                : "bg-gray-200 text-gray-400"
            }`}
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-gray-300 text-center mt-2 select-none">
          Powered by Convo
        </p>
      </div>
    </div>
  );
};
