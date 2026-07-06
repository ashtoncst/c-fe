import { describe, it, expect } from "vitest";
import { SUGGESTED_TOPICS } from "./AIAssistant.constant";

/**
 * Contract tests for the chat preset buttons.
 *
 * Bug motivating these assertions: the widget previously sent
 * "I'm interested in Help me choose" to the server, which broke the
 * backend's intent routing. The prompt (what the server sees) must be
 * the canonical phrase, and must not wrap verb-phrase labels in noun-phrase
 * prefixes.
 */
describe("SUGGESTED_TOPICS", () => {
	it("exposes every required field for each topic", () => {
		expect(SUGGESTED_TOPICS.length).toBeGreaterThan(0);
		for (const topic of SUGGESTED_TOPICS) {
			expect(topic.id).toBeTruthy();
			expect(topic.label).toBeTruthy();
			expect(topic.prompt).toBeTruthy();
		}
	});

	it("uses unique ids", () => {
		const ids = SUGGESTED_TOPICS.map((t) => t.id);
		expect(new Set(ids).size).toBe(ids.length);
	});

	it("has a 'Help me choose' topic whose prompt is exactly 'Help me choose'", () => {
		const topic = SUGGESTED_TOPICS.find((t) => t.id === "help-me-choose");
		expect(topic).toBeDefined();
		expect(topic!.label).toBe("Help me choose");
		expect(topic!.prompt).toBe("Help me choose");
	});

	it("never wraps a topic's prompt in 'I'm interested in …'", () => {
		for (const topic of SUGGESTED_TOPICS) {
			expect(topic.prompt.toLowerCase()).not.toMatch(/^i'?m interested in/);
		}
	});
});
