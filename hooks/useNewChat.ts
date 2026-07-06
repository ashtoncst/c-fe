import { useCallback, useEffect, useRef, useState } from "react";
import { useChatStore } from "@/app/store/useChatStore";
import { localStorageUtil } from "@/libs/storage";
import { resetChatSession } from "@/modules/ai-assistant-module/constants/AIAssistantEndpoint";

const CONFIRM_WINDOW_MS = 3000;

/**
 * Returns a function that ends the current chat session and starts a fresh
 * one. It wipes server-side conversation history (best-effort) so prior topic
 * context doesn't leak into the next exchange, clears the local session id,
 * empties the message list, and re-shows the greeting. Shared by the floating
 * widget header and the AI Assistant page so both behave identically.
 */
export function useNewChat() {
  const { setMessagesGlobal, setCurrentSessionId, initializeMessages } =
    useChatStore();

  return useCallback(async () => {
    const previousSessionId = localStorageUtil.getSessionId();
    if (previousSessionId && previousSessionId !== "null") {
      try {
        await resetChatSession(previousSessionId);
      } catch (error) {
        // Best-effort: even if the network call fails we still reset locally
        // and start a fresh session.
        console.warn("Failed to reset server-side chat session", error);
      }
    }
    localStorageUtil.removeSessionId();
    setMessagesGlobal([]);
    setCurrentSessionId(null);
    initializeMessages();
  }, [setMessagesGlobal, setCurrentSessionId, initializeMessages]);
}

/**
 * Wraps {@link useNewChat} with a two-click confirmation so a single
 * accidental tap can't wipe an in-progress conversation. `pending` is exposed
 * so callers can surface a "click again" affordance; the window auto-resets
 * after {@link CONFIRM_WINDOW_MS}.
 */
export function useConfirmableNewChat() {
  const newChat = useNewChat();
  const [pending, setPending] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    []
  );

  const trigger = useCallback(() => {
    if (pending) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setPending(false);
      // Fire-and-forget — UI shouldn't block on the server-side wipe.
      void newChat();
      return;
    }
    setPending(true);
    timeoutRef.current = setTimeout(() => {
      setPending(false);
      timeoutRef.current = null;
    }, CONFIRM_WINDOW_MS);
  }, [pending, newChat]);

  return { pending, trigger };
}
