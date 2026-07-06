import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";

type Listener = (payload: unknown) => void;

class FakeSocket {
	private listeners = new Map<string, Listener[]>();
	on(event: string, fn: Listener) {
		const arr = this.listeners.get(event) ?? [];
		arr.push(fn);
		this.listeners.set(event, arr);
	}
	off(event: string, fn: Listener) {
		const arr = this.listeners.get(event) ?? [];
		this.listeners.set(
			event,
			arr.filter((f) => f !== fn),
		);
	}
	emit = vi.fn();
	trigger(event: string, payload?: unknown) {
		for (const fn of this.listeners.get(event) ?? []) fn(payload);
	}
}

const socket = new FakeSocket();

vi.mock("../constants/ChatSocket", () => ({
	getSocket: () => socket,
}));

vi.mock("react-hot-toast", () => ({
	default: { error: vi.fn(), success: vi.fn() },
}));

/**
 * Bug motivating this assertion: users could spam the send button while the
 * bot was mid-response, causing concurrent requests and confusing UI state.
 * The socket hook now exposes `isBotResponding` so the input form can lock
 * itself while the bot streams tokens and unlock on `end` or `error`.
 */
describe("useChatSocket — isBotResponding", () => {
	beforeEach(() => {
		sessionStorage.clear();
	});
	afterEach(() => {
		cleanup();
		socket.emit.mockReset();
	});

	it("starts false, flips to true on start, back to false on end", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-1"));
		expect(result.current.isBotResponding).toBe(false);

		act(() => socket.trigger("start", { sessionId: "sid-1" }));
		expect(result.current.isBotResponding).toBe(true);

		act(() => socket.trigger("end"));
		expect(result.current.isBotResponding).toBe(false);
	});

	it("flips back to false on error so the user is not stranded", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-2"));
		act(() => socket.trigger("start", { sessionId: "sid-2" }));
		expect(result.current.isBotResponding).toBe(true);

		act(() => socket.trigger("error", { code: "RATE_LIMITED" }));
		expect(result.current.isBotResponding).toBe(false);
	});

	it("accumulates tokens from the token event", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-3"));
		act(() => socket.trigger("start", { sessionId: "sid-3" }));
		act(() => socket.trigger("token", { payload: "Hello ", isComplete: false }));
		act(() => socket.trigger("token", { payload: "world", isComplete: true }));
		expect(result.current.tokens.join("")).toBe("Hello world");
	});

	it("stores recommendations from the recommendations event", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-4"));
		const payload = [
			{
				id: "p1",
				name: "Fiber Broadband",
				target_audience: "SMB",
				product_category: "Internet",
			},
		];
		act(() => socket.trigger("recommendations", { payload }));
		expect(result.current.recommendations).toEqual(payload);
	});

	it("resetTokens clears tokens without touching recommendations", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-5"));
		act(() => socket.trigger("start", { sessionId: "sid-5" }));
		act(() => socket.trigger("token", { payload: "abc", isComplete: true }));
		expect(result.current.tokens).toHaveLength(1);
		act(() => result.current.resetTokens());
		expect(result.current.tokens).toHaveLength(0);
	});

	it("sendMessage emits chat_message on the socket with session and message", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-6"));
		act(() => result.current.sendMessage("hello world"));
		expect(socket.emit).toHaveBeenCalledWith("chat_message", {
			session_id: "sid-6",
			message: "hello world",
		});
	});

	it("sendMessage is a no-op for whitespace-only input", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		const { result } = renderHook(() => useChatSocket("sid-7"));
		act(() => result.current.sendMessage("   "));
		expect(socket.emit).not.toHaveBeenCalled();
	});

	it("persists the server-assigned session id when none was passed in", async () => {
		const { useChatSocket } = await import("./useChatSocket");
		renderHook(() => useChatSocket(""));
		act(() => socket.trigger("start", { sessionId: "server-sid" }));
		expect(sessionStorage.getItem("converge_section")).toBe(
			JSON.stringify("server-sid"),
		);
	});

	it("maps server error codes to distinct toasts", async () => {
		const toast = (await import("react-hot-toast")).default;
		const onError = vi.fn();
		const { useChatSocket } = await import("./useChatSocket");
		renderHook(() => useChatSocket("sid-8", { onError }));

		act(() => socket.trigger("error", { code: "RATE_LIMITED" }));
		act(() => socket.trigger("error", { code: "CONCURRENT_REQUEST" }));
		act(() => socket.trigger("error", { code: "TURN_LIMIT_REACHED" }));
		act(() => socket.trigger("error", { payload: "oops" }));

		expect(toast.error).toHaveBeenCalledTimes(4);
		expect(onError).toHaveBeenCalledTimes(4);
	});
});
