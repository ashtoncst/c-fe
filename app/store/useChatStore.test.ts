import { describe, it, expect, beforeEach, vi } from "vitest";

/**
 * Regression: when the chat is reopened after a refresh, messages
 * re-animated character-by-character because `shouldType: true` was
 * rehydrated verbatim from localStorage. The store must strip / falsify
 * shouldType before persisting so restored transcripts render instantly,
 * and the initial welcome message must also load with `shouldType: false`
 * now that the widget uses instant rendering (2.2).
 */
describe("useChatStore persistence", () => {
	beforeEach(() => {
		localStorage.clear();
		// Force a fresh module evaluation so each test gets a new store singleton.
		vi.resetModules();
	});

	it("rehydrates messagesGlobal with shouldType=false even if the persisted value was true", async () => {
		localStorage.setItem(
			"chat-storage",
			JSON.stringify({
				state: {
					messagesGlobal: [
						{
							id: "a",
							message: "**Hi** there",
							timestamp: "10:00 AM",
							isUser: false,
							shouldType: true,
						},
						{
							id: "b",
							message: "hello",
							timestamp: "10:01 AM",
							isUser: true,
							shouldType: true,
						},
					],
					chatInput: "",
					currentSessionId: null,
				},
				version: 0,
			}),
		);

		const { useChatStore } = await import("./useChatStore");
		const state = useChatStore.getState();
		expect(state.messagesGlobal.length).toBe(2);
		for (const msg of state.messagesGlobal) {
			expect(msg.shouldType).toBe(false);
		}
	});

	it("seeds the initial welcome message with shouldType=false", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().initializeMessages();
		const msgs = useChatStore.getState().messagesGlobal;
		expect(msgs.length).toBe(1);
		expect(msgs[0].isUser).toBeFalsy();
		expect(msgs[0].shouldType).toBe(false);
	});

	it("setChatInput updates the chat input", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setChatInput("hello");
		expect(useChatStore.getState().chatInput).toBe("hello");
	});

	it("setMessagesGlobal accepts either an array or a function", async () => {
		const { useChatStore } = await import("./useChatStore");
		const msg = {
			id: "x",
			message: "hi",
			timestamp: "10:00 AM",
			isUser: false,
			shouldType: false,
		};
		useChatStore.getState().setMessagesGlobal([msg]);
		expect(useChatStore.getState().messagesGlobal).toHaveLength(1);
		useChatStore.getState().setMessagesGlobal((prev) => [...prev, { ...msg, id: "y" }]);
		expect(useChatStore.getState().messagesGlobal).toHaveLength(2);
	});

	it("setShouldType applies to every message", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setMessagesGlobal([
			{ id: "a", message: "m1", timestamp: "x", isUser: false, shouldType: false },
			{ id: "b", message: "m2", timestamp: "x", isUser: true, shouldType: false },
		]);
		useChatStore.getState().setShouldType(true);
		for (const m of useChatStore.getState().messagesGlobal) {
			expect(m.shouldType).toBe(true);
		}
	});

	it("clearMessages empties both the transcript and the input", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setChatInput("still here");
		useChatStore.getState().setMessagesGlobal([
			{ id: "a", message: "m", timestamp: "x", isUser: false, shouldType: false },
		]);
		useChatStore.getState().clearMessages();
		expect(useChatStore.getState().messagesGlobal).toEqual([]);
		expect(useChatStore.getState().chatInput).toBe("");
	});

	it("setCurrentSessionId clears messages when the session changes", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setMessagesGlobal([
			{ id: "a", message: "m", timestamp: "x", isUser: false, shouldType: false },
		]);
		useChatStore.getState().setCurrentSessionId("sid-1");
		useChatStore.getState().setCurrentSessionId("sid-2");
		expect(useChatStore.getState().messagesGlobal).toEqual([]);
		expect(useChatStore.getState().currentSessionId).toBe("sid-2");
	});

	it("setCurrentSessionId preserves messages when the session id is unchanged", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setCurrentSessionId("sid-1");
		useChatStore.getState().setMessagesGlobal([
			{ id: "a", message: "m", timestamp: "x", isUser: false, shouldType: false },
		]);
		useChatStore.getState().setCurrentSessionId("sid-1");
		expect(useChatStore.getState().messagesGlobal).toHaveLength(1);
	});

	it("initializeMessages is a no-op when messages already exist", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().setMessagesGlobal([
			{ id: "a", message: "existing", timestamp: "x", isUser: false, shouldType: false },
		]);
		useChatStore.getState().initializeMessages();
		const msgs = useChatStore.getState().messagesGlobal;
		expect(msgs).toHaveLength(1);
		expect(msgs[0].id).toBe("a");
	});

	/**
	 * Spec §1.5 requires the initial greeting to enumerate all six solution
	 * areas as a bulleted list so first-time users see the full scope of
	 * products the bot can help with. Previously the greeting was an inline
	 * comma-separated prose sentence that dropped Content and Satellite.
	 */
	it("seeds the initial greeting with six solution bullets including Content and Satellite", async () => {
		const { useChatStore } = await import("./useChatStore");
		useChatStore.getState().initializeMessages();
		const [welcome] = useChatStore.getState().messagesGlobal;
		const text = welcome.message;

		// All six spec-mandated solution areas must be mentioned.
		expect(text).toMatch(/internet/i);
		expect(text).toMatch(/security/i);
		expect(text).toMatch(/transport/i);
		expect(text).toMatch(/managed services/i);
		expect(text).toMatch(/content/i);
		expect(text).toMatch(/satellite/i);

		// Must render as a bulleted markdown list (dash or asterisk on its own line),
		// not an inline comma-separated sentence.
		const bulletLines = text
			.split("\n")
			.filter((line) => /^\s*[-*]\s+\S/.test(line));
		expect(bulletLines.length).toBeGreaterThanOrEqual(6);
	});
});
