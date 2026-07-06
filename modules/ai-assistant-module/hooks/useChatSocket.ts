import { useEffect, useState, useRef } from "react";
import { getSocket } from "../constants/ChatSocket";
import { localStorageUtil } from "@/libs/storage";
import toast from "react-hot-toast";

interface TokenPayload {
  isComplete: boolean;
  payload: string;
}

interface StartPayload {
  sessionId: string;
}

interface RecommendationsPayload {
  payload: {
    id: string;
    name: string;
    description?: string | null;
    price?: string | null;
    contract_term?: string | null;
    target_audience: string;
    product_category: string;
    features?: string[];
  }[];
}

interface ErrorPayload {
  type?: string;
  code?: string;
  payload?: string;
}

interface UseChatSocketOptions {
  onError?: () => void;
}

export const useChatSocket = (
  sessionId: string,
  options?: UseChatSocketOptions
) => {
  const [tokens, setTokens] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<
    RecommendationsPayload["payload"]
  >([]);
  const [isBotResponding, setIsBotResponding] = useState(false);

  // Use ref so the callback identity doesn't cause effect re-runs
  const onErrorRef = useRef(options?.onError);
  useEffect(() => {
    onErrorRef.current = options?.onError;
  }, [options?.onError]);

  useEffect(() => {
    const socket = getSocket();

    // [SECURITY FIX] Removed console.log/error calls throughout socket event
    // handlers. These were logging session IDs, token previews (partial AI
    // response content), and server error objects to the browser console —
    // all of which could aid an attacker with DevTools access.
    const handleStart = (data: StartPayload) => {
      setTokens([]);
      setRecommendations([]);
      setIsBotResponding(true);
      // Persist the server-assigned session ID so future messages use it.
      // Scoped to this browser tab — see libs/storage.ts.
      if (data.sessionId && !sessionId) {
        localStorageUtil.setSessionId(data.sessionId);
      }
    };

    const handleToken = (data: TokenPayload) => {
      setTokens((prev) => [...prev, data.payload]);
    };

    const handleRecommendations = (data: RecommendationsPayload) => {
      setRecommendations(data.payload);
    };

    const handleEnd = () => {
      // Don't clear tokens immediately - let the UI process them first
      // The UI (ChatInputBox) will clear tokens after processing
      setIsBotResponding(false);
    };

    const handleError = (err: ErrorPayload) => {
      setTokens([]);
      setRecommendations([]);
      setIsBotResponding(false);
      onErrorRef.current?.();

      const fallbackMessage = "Something went wrong. Please try again.";

      switch (err?.code) {
        case "RATE_LIMITED":
          toast.error(
            "You're sending messages too quickly. Please wait a moment.",
            { duration: 4000 }
          );
          break;
        case "CONCURRENT_REQUEST":
          toast.error("Please wait for the current response to finish.", {
            duration: 3000,
          });
          break;
        case "TURN_LIMIT_REACHED":
          toast.error(
            "This conversation has reached its limit. Please refresh to start a new session.",
            { duration: 5000 }
          );
          break;
        default:
          toast.error(err?.payload ?? fallbackMessage, { duration: 4000 });
      }
    };

    // Register event listeners
    socket.on("start", handleStart);
    socket.on("token", handleToken);
    socket.on("recommendations", handleRecommendations);
    socket.on("end", handleEnd);
    socket.on("error", handleError);

    // Cleanup on unmount
    return () => {
      socket.off("start", handleStart);
      socket.off("token", handleToken);
      socket.off("recommendations", handleRecommendations);
      socket.off("end", handleEnd);
      socket.off("error", handleError);
    };
  }, [sessionId]);
  const sendMessage = (message: string) => {
    if (!message.trim()) return;
    const socket = getSocket();
    // [SECURITY FIX] Removed console.log that printed socket ID, session ID,
    // and message length on every send — reducing observable data in console.
    socket.emit("chat_message", {
      session_id: sessionId,
      message,
    });
  };
  const resetTokens = () => {
    setTokens([]);
  };

  return {
    tokens,
    recommendations,
    sendMessage,
    resetTokens,
    isBotResponding,
  };
};
