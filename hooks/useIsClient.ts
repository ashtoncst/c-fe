import { useSyncExternalStore } from "react";

/**
 * Returns true only on the client after hydration.
 * Uses useSyncExternalStore so SSR renders false and client renders true
 * without calling setState inside a useEffect.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
