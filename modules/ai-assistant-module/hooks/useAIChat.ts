import { useQuery } from "@tanstack/react-query";
import { getChatHistory } from "../constants/AIAssistantEndpoint";

export const useChatHistory = (sessionId: string | null | undefined) => {
  const hasSession = Boolean(sessionId) && sessionId !== "null";
  return useQuery({
    queryKey: ["chat-history", sessionId],
    queryFn: () => getChatHistory(sessionId as string),
    enabled: hasSession,
  });
};
