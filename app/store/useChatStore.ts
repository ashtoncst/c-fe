import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IMessage {
  id: string;
  message: string;
  timestamp: string;
  isUser?: boolean;
  shouldType: boolean;
  options?: Array<{ id: string; text: string; value: string }>;
}

type TMessage = {
  messagesGlobal: IMessage[];
  chatInput: string;
  currentSessionId: string | null;
  setChatInput: (chatInput: string) => void;
  setMessagesGlobal: (
    messagesGlobal: IMessage[] | ((prev: IMessage[]) => IMessage[])
  ) => void;
  setShouldType: (shouldType: IMessage["shouldType"]) => void;
  initializeMessages: () => void;
  clearMessages: () => void;
  setCurrentSessionId: (sessionId: string | null) => void;
};

export const useChatStore = create<TMessage>()(
  persist(
    (set) => ({
      messagesGlobal: [],
      chatInput: "",
      currentSessionId: null,
      setChatInput: (chatInput) => set({ chatInput }),
      setMessagesGlobal: (messagesGlobal) =>
        set((state) => ({
          messagesGlobal:
            typeof messagesGlobal === "function"
              ? messagesGlobal(state.messagesGlobal)
              : messagesGlobal,
        })),
      setShouldType: (shouldType) =>
        set((state) => ({
          messagesGlobal: state.messagesGlobal.map((msg) => ({
            ...msg,
            shouldType,
          })),
        })),
      // 🔥 NEW: Clear all messages (useful for new sessions)
      clearMessages: () =>
        set({
          messagesGlobal: [],
          chatInput: "",
        }),
      // 🔥 NEW: Track current session and clear messages if session changes
      setCurrentSessionId: (sessionId) =>
        set((state) => {
          // If session changed, clear old messages
          if (state.currentSessionId && state.currentSessionId !== sessionId) {
            // [SECURITY FIX] Removed console.log that printed old and new
            // session IDs to the browser console on every session change.
            return {
              currentSessionId: sessionId,
              messagesGlobal: [],
              chatInput: "",
            };
          }
          return {
            currentSessionId: sessionId,
          };
        }),
      initializeMessages: () =>
        set((state) => {
          // Chỉ khởi tạo nếu chưa có tin nhắn nào
          if (state.messagesGlobal.length === 0) {
            return {
              messagesGlobal: [
                {
                  id: "initial-1",
                  message:
                    "Hi! I'm Convo, your Converge ICT assistant. I can help you find the right solution for your business. For example, you can ask me about:\n" +
                    "- Internet and connectivity (fiber, broadband)\n" +
                    "- Security services (DDoS protection, cybersecurity)\n" +
                    "- Transport and WAN (VPN, SD-WAN)\n" +
                    "- Managed services (Wi-Fi, surveillance)\n" +
                    "- Content solutions (IPTV, apps)\n" +
                    "- Satellite internet (Starlink)\n\n" +
                    "What would you like to know more about?",
                  timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }),
                  isUser: false,
                  shouldType: false,
                },
              ],
            };
          }
          return state;
        }),
    }),
    {
      name: "chat-storage", // tên key trong localStorage
      partialize: (state) => ({
        ...state,
        messagesGlobal: state.messagesGlobal.map((m) => ({
          ...m,
          shouldType: false,
        })),
      }),
      onRehydrateStorage: () => (state) => {
        if (!state?.messagesGlobal) return;
        state.messagesGlobal = state.messagesGlobal.map((m) => ({
          ...m,
          shouldType: false,
        }));
      },
    }
  )
);
