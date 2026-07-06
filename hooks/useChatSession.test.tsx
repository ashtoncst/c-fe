import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor, cleanup } from "@testing-library/react";

const postMock = vi.fn();
vi.mock("@/libs/axios", () => ({
	api: {
		post: (url: string, data?: unknown, config?: unknown) =>
			postMock(url, data, config),
	},
}));

/**
 * The chatbot used to rely entirely on the Socket.IO `start` event to hand
 * back a fresh session ID. The new server-side auth flow expects the client
 * to call POST /api/chat/session first so the HttpOnly session cookie is
 * issued; without that call, a feature-flagged server can't authenticate
 * subsequent history fetches.
 */
describe("useChatSession", () => {
	beforeEach(() => {
		sessionStorage.clear();
		localStorage.clear();
		postMock.mockReset();
	});

	afterEach(() => {
		cleanup();
	});

	it("POSTs /chat/session on mount when no session id exists and stores the returned id", async () => {
		postMock.mockResolvedValueOnce({
			data: { session_id: "new-session-abc" },
		});
		const { useChatSession } = await import("./useChatSession");
		renderHook(() => useChatSession());

		await waitFor(() => expect(postMock).toHaveBeenCalledTimes(1));
		expect(postMock).toHaveBeenCalledWith(
			"/chat/session",
			{},
			expect.objectContaining({
				withCredentials: true,
				skipGlobalErrorToast: true,
			}),
		);
		await waitFor(() =>
			expect(sessionStorage.getItem("converge_section")).toBe(
				JSON.stringify("new-session-abc"),
			),
		);
	});

	it("skips the POST when a session id already exists in sessionStorage", async () => {
		sessionStorage.setItem(
			"converge_section",
			JSON.stringify("existing-sid"),
		);
		const { useChatSession } = await import("./useChatSession");
		renderHook(() => useChatSession());
		// Give any microtask a chance to run.
		await new Promise((r) => setTimeout(r, 0));
		expect(postMock).not.toHaveBeenCalled();
	});

	it("does not crash or store when the server returns an error", async () => {
		postMock.mockRejectedValueOnce(new Error("network"));
		const { useChatSession } = await import("./useChatSession");
		renderHook(() => useChatSession());
		await waitFor(() => expect(postMock).toHaveBeenCalled());
		expect(sessionStorage.getItem("converge_section")).toBeNull();
	});
});
