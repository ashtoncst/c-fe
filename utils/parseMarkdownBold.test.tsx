import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { parseMarkdownBold } from "./parseMarkdownBold";

/**
 * The widget previously used TypeWriter for bot messages, which animated
 * character-by-character and also corrupted markdown — the live chatbot
 * only rendered the first few characters of a response that contained
 * bold HTML. Removing TypeWriter means we always render instantly via
 * parseMarkdownBold, so this util must return the full message and wrap
 * **bold** regions in <strong>.
 */
describe("parseMarkdownBold", () => {
	it("returns the full text when there is no markdown", () => {
		const { container } = render(
			<div>{parseMarkdownBold("Hello world")}</div>,
		);
		expect(container.textContent).toBe("Hello world");
		expect(container.querySelector("strong")).toBeNull();
	});

	it("wraps **bold** sections in <strong>", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold(
					"I'd recommend **Fiber Broadband** for your office.",
				)}
			</div>,
		);
		expect(container.textContent).toBe(
			"I'd recommend Fiber Broadband for your office.",
		);
		const strong = container.querySelector("strong");
		expect(strong).not.toBeNull();
		expect(strong!.textContent).toBe("Fiber Broadband");
	});

	it("supports multiple bold regions in a single string", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold("**Plan A** is faster; **Plan B** is cheaper.")}
			</div>,
		);
		const strongs = container.querySelectorAll("strong");
		expect(strongs.length).toBe(2);
		expect(strongs[0].textContent).toBe("Plan A");
		expect(strongs[1].textContent).toBe("Plan B");
	});

	it("returns an empty list when text is empty", () => {
		const result = parseMarkdownBold("");
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBe(0);
	});

	it("preserves full text for long messages (no truncation)", () => {
		const longMessage =
			"Here's a longer recommendation: **Managed Wi-Fi Premium** offers wider coverage, better performance, and enhanced support compared to the basic tier. Ideal for bigger offices.";
		const { container } = render(<div>{parseMarkdownBold(longMessage)}</div>);
		expect(container.textContent).toContain("Ideal for bigger offices.");
		expect(container.textContent!.length).toBeGreaterThan(100);
	});

	it("wraps a matched product in a new-tab anchor with safe rel", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold(
					"Try **Fiber Broadband** for your office.",
					[{ name: "Fiber Broadband", url: "/fiber-broadband" }],
				)}
			</div>,
		);
		const anchor = container.querySelector("a");
		expect(anchor).not.toBeNull();
		expect(anchor!.getAttribute("href")).toBe("/fiber-broadband");
		expect(anchor!.getAttribute("target")).toBe("_blank");
		expect(anchor!.getAttribute("rel")).toContain("noopener");
		expect(anchor!.getAttribute("rel")).toContain("noreferrer");
		expect(anchor!.querySelector("strong")).not.toBeNull();
		expect(anchor!.textContent).toBe("Fiber Broadband");
	});

	it("falls back to plain <strong> when the product has no URL", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold("Try **Fiber Broadband** today.", [
					{ name: "Fiber Broadband" },
				])}
			</div>,
		);
		expect(container.querySelector("a")).toBeNull();
		expect(container.querySelector("strong")).not.toBeNull();
	});

	it("leaves unknown bold names as plain <strong>", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold("Try **Unknown Product** today.", [
					{ name: "Fiber Broadband", url: "/fiber-broadband" },
				])}
			</div>,
		);
		expect(container.querySelector("a")).toBeNull();
		expect(container.querySelector("strong")).not.toBeNull();
	});

	it("matches product names case-insensitively so LLM casing variance doesn't break links", () => {
		const { container } = render(
			<div>
				{parseMarkdownBold("Consider **fiber broadband** today.", [
					{ name: "Fiber Broadband", url: "/fiber-broadband" },
				])}
			</div>,
		);
		const anchor = container.querySelector("a");
		expect(anchor).not.toBeNull();
		expect(anchor!.getAttribute("href")).toBe("/fiber-broadband");
	});
});
