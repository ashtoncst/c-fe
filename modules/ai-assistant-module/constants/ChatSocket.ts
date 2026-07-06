import { io, Socket } from "socket.io-client";
import { getSocketUrl } from "../../../config/defaults";

let socket: Socket | null = null;

/**
 * Ensures the WebSocket URL uses the correct protocol based on the page's protocol.
 * This prevents mixed content issues on mobile browsers.
 * - HTTPS pages require wss:// (secure WebSocket)
 * - HTTP pages require ws:// (non-secure WebSocket)
 */
function getSecureSocketUrl(configUrl: string): string {
  // If we're in a browser environment
  if (typeof window !== "undefined") {
    const isPageSecure = window.location.protocol === "https:";

    // [SECURITY FIX] Removed console.warn calls that printed original and
    // corrected socket URLs to the browser console, leaking infrastructure info.
    // Auto-correct protocol to match page protocol silently.
    if (isPageSecure && configUrl.startsWith("ws://")) {
      // Convert ws:// to wss:// for secure pages
      return configUrl.replace("ws://", "wss://");
    } else if (!isPageSecure && configUrl.startsWith("wss://")) {
      // Convert wss:// to ws:// for non-secure pages (development)
      return configUrl.replace("wss://", "ws://");
    }
  }

  return configUrl;
}

// Get Socket URL with fallback to default.
// [SECURITY FIX] Removed debug console.log that printed the socket URL,
// original env var value, and user-agent to the browser console — information
// that could aid infrastructure fingerprinting.
const SOCKET_URL = getSecureSocketUrl(getSocketUrl());

export const getSocket = (): Socket => {
  if (!socket) {
    // [SECURITY FIX] Removed verbose console.log that printed the socket URL
    // and connection details (timestamp, user-agent, protocol) on every
    // socket initialisation — information useful to an attacker observing
    // the console.
    socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10, // Increased from 5 for mobile reliability
      reconnectionDelay: 1000, // Start with 1 second delay
      reconnectionDelayMax: 5000, // Cap at 5 seconds
      timeout: 20000, // 20 seconds connection timeout
      // Ensure secure connection on HTTPS pages
      secure:
        typeof window !== "undefined"
          ? window.location.protocol === "https:"
          : false,
      // Reject unauthorized certificates only in production
      rejectUnauthorized: process.env.NODE_ENV === "production",
      // Force WebSocket transport for better mobile performance
      forceNew: false, // Reuse existing connection
      // Enable multiplexing to share connection
      multiplex: true,
    });

    socket.on("connect", () => {
      void 0;
    });

    socket.on("disconnect", (reason: string) => {
      // If disconnected due to transport close or error, try to reconnect
      // [SECURITY FIX] Removed console.warn that printed disconnect reason,
      // user-agent, and timestamp to the browser console.
      if (reason === "io server disconnect" || reason === "transport close") {
        setTimeout(() => {
          socket?.connect();
        }, 1000);
      }
    });

    socket.on("connect_error", (err: Error) => {
      void err;
    });

    // [SECURITY FIX] Removed console.log/error listeners for reconnect_attempt,
    // reconnect, and reconnect_failed that leaked reconnection state and
    // user-agent to the browser console.
  }
  return socket;
};
