"use client";

import { RotateCcw } from "lucide-react";
import { useConfirmableNewChat } from "@/hooks/useNewChat";

/**
 * "New chat" control for the AI Assistant page. Ends the current session and
 * starts a fresh one via the shared {@link useConfirmableNewChat} hook, with a
 * two-click confirm so an accidental tap can't wipe an in-progress chat.
 */
export const NewChatButton = () => {
  const { pending, trigger } = useConfirmableNewChat();

  return (
    <button
      onClick={trigger}
      aria-label="Start a new chat"
      aria-pressed={pending}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-dm-sans transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 ${
        pending
          ? "border-red-300 text-red-600 bg-red-50 hover:bg-red-100"
          : "border-gray-300 text-con-custom-text-black bg-con-custom-gray-background-chat hover:bg-gray-200"
      }`}
    >
      <RotateCcw className="w-3.5 h-3.5" />
      {pending ? "Click again for a new chat" : "New chat"}
    </button>
  );
};
