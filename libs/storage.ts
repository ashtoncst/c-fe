const SESSION_KEY = "converge_section";

export const localStorageUtil = {
  setItem: (key: string, value: any) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch {
      // silently fail — localStorage may be unavailable (e.g. private mode)
    }
  },

  getItem: <T = unknown>(key: string, defaultValue: T | null = null): T | null => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? (JSON.parse(serializedValue) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  // Session id is scoped to the browsing tab (sessionStorage) so opening a
  // second tab does not inherit another tab's chat transcript.
  getSessionId: () => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      const serializedValue = sessionStorage.getItem(SESSION_KEY);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch {
      return null;
    }
  },

  setSessionId: (sessionId: string) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionId));
    } catch {
      // silently fail
    }
  },

  removeSessionId: () => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // silently fail
    }
  },

  removeItem: (key: string) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      localStorage.removeItem(key);
      // Also clear from sessionStorage so callers migrating keys don't leak.
      if (key === SESSION_KEY) {
        sessionStorage.removeItem(key);
      }
    } catch {
      // silently fail
    }
  },

  clear: () => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      localStorage.clear();
    } catch {
      // silently fail
    }
  },
};
