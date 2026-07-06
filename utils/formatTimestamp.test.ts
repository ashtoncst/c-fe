import { describe, it, expect } from "vitest";
import { formatTimestamp } from "./formatTimestamp";

/**
 * Bug motivating this helper: the widget used to render "Invalid Date"
 * anywhere a bot message arrived without an ISO timestamp (e.g. legacy
 * rows, non-JSON Socket.IO errors). The helper must never propagate
 * that string — return "" for unknown / unparseable input.
 */
describe("formatTimestamp", () => {
	it("renders a valid ISO string as HH:MM AM/PM", () => {
		const out = formatTimestamp("2026-04-21T03:00:00Z");
		expect(out).toMatch(/\d{1,2}:\d{2}\s?(AM|PM)/i);
		expect(out).not.toContain("Invalid");
	});

	it("returns '' for null", () => {
		expect(formatTimestamp(null)).toBe("");
	});

	it("returns '' for undefined", () => {
		expect(formatTimestamp(undefined)).toBe("");
	});

	it("returns '' for 'invalid' string input", () => {
		expect(formatTimestamp("invalid")).toBe("");
	});

	it("returns '' for NaN timestamps", () => {
		expect(formatTimestamp(Number.NaN)).toBe("");
	});

	it("accepts numeric epoch milliseconds", () => {
		const out = formatTimestamp(0);
		expect(out).toMatch(/\d{1,2}:\d{2}\s?(AM|PM)/i);
	});
});
