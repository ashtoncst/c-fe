/**
 * Default configuration for development
 * These values are used when environment variables are not set
 *
 * To override, create a .env.local file:
 * NEXT_PUBLIC_API_URL=http://your-api-url
 * NEXT_PUBLIC_SOCKET_URL=ws://your-socket-url
 */

export const DEFAULT_CONFIG = {
  // Backend API URL (REST endpoints)
  API_URL: "http://localhost:3000",

  // WebSocket URL (for real-time chat)
  SOCKET_URL: "ws://localhost:3000",
} as const;

/**
 * Get the API URL with fallback to default
 */
export function getApiUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL || DEFAULT_CONFIG.API_URL;
}

/**
 * Get the Socket URL with fallback to default
 */
export function getSocketUrl(): string {
  return process.env.NEXT_PUBLIC_SOCKET_URL || DEFAULT_CONFIG.SOCKET_URL;
}

/**
 * Check if we're using default configuration
 */
export function isUsingDefaults(): boolean {
  return (
    !process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_SOCKET_URL
  );
}

// [SECURITY FIX] Removed startup console.log that printed API URL and Socket
// URL values to the browser console. These URLs could reveal internal
// infrastructure details to users inspecting DevTools in production.
