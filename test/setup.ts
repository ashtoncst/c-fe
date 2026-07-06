import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
	cleanup();
	vi.clearAllMocks();
});

// Stub browser APIs that jsdom doesn't implement by default.
if (typeof window !== "undefined" && !window.matchMedia) {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(() => false),
		}),
	});
}
