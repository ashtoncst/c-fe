"use client";

import Image from "next/image";
import { Maximize2, Minimize2, RotateCcw, X } from "lucide-react";
import { useConfirmableNewChat } from "@/hooks/useNewChat";

interface ChatWithUsHeaderProps {
  handleOpenModal: () => void;
  isMaximized?: boolean;
  onToggleMaximize?: () => void;
}

export const ChatWithUsHeader = ({
  handleOpenModal,
  isMaximized = false,
  onToggleMaximize,
}: ChatWithUsHeaderProps) => {
  // Single "New chat" control with a two-click confirm (shared with the AI
  // Assistant page) — ends the current session and starts a fresh one.
  const { pending: pendingReset, trigger: handleRefresh } =
    useConfirmableNewChat();

  return (
    <div className={`font-dm-sans relative overflow-hidden rounded-t-2xl`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8638E5] via-[#7B2FD4] to-[#5B21B6]" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)`
        }}
      />

      <div className="relative flex items-center justify-between px-5 py-4">
        {/* Left: Avatar + Info */}
        <div className="flex items-center gap-3">
          {/* Avatar with online indicator */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full ring-2 ring-white/30 overflow-hidden">
              <Image src="/icons/convo-avatar.png" alt="Convo" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            {/* Online dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#7B2FD4]" />
          </div>

          <div>
            <h3 className="text-white text-[15px] font-semibold leading-tight tracking-tight">
              Convo
            </h3>
            <p className="text-white/60 text-[11px] font-normal leading-tight mt-0.5">
              {pendingReset ? "Click again for a new chat" : "Always here to help"}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleRefresh}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              pendingReset
                ? "bg-red-500/30 text-white hover:bg-red-500/50"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Start a new chat"
            aria-pressed={pendingReset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {onToggleMaximize && (
            <button
              onClick={onToggleMaximize}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              aria-label={isMaximized ? "Restore chat window" : "Maximize chat window"}
              aria-pressed={isMaximized}
            >
              {isMaximized ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          )}
          <button
            onClick={handleOpenModal}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
