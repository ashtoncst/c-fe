import axiosInstance from "@/libs/axios";

export const getChatHistory = async (sessionId: string) => {
  const response = await axiosInstance.get(`/chat/history/${sessionId}`, {
    skipGlobalErrorToast: true,
  });
  return response.data;
};

/**
 * Wipes server-side conversation history for the given session so prior
 * topic context can't bleed into the next exchange. Idempotent.
 */
export const resetChatSession = async (sessionId: string) => {
  const response = await axiosInstance.post(
    `/chat/reset/${sessionId}`,
    undefined,
    { skipGlobalErrorToast: true }
  );
  return response.data;
};
