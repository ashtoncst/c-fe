import { describe, it, expect, beforeEach } from "vitest";
import { localStorageUtil } from "./storage";

/**
 * Regression: the chat session_id used to live in localStorage, which is
 * shared across tabs. Opening a second tab would adopt the first tab's
 * transcript — confusing and a privacy leak. We now persist session_id in
 * sessionStorage so each tab is isolated while still surviving page reloads.
 */
describe("session id storage (tab-isolated)", () => {
	beforeEach(() => {
		localStorage.clear();
		sessionStorage.clear();
	});

	it("setSessionId writes to sessionStorage, not localStorage", () => {
		localStorageUtil.setSessionId("abc-123");
		expect(sessionStorage.getItem("converge_section")).toBe(
			JSON.stringify("abc-123"),
		);
		expect(localStorage.getItem("converge_section")).toBeNull();
	});

	it("getSessionId reads from sessionStorage", () => {
		sessionStorage.setItem("converge_section", JSON.stringify("xyz-9"));
		expect(localStorageUtil.getSessionId()).toBe("xyz-9");
	});

	it("getSessionId returns null when no session exists", () => {
		expect(localStorageUtil.getSessionId()).toBeNull();
	});

	it("removeSessionId clears sessionStorage", () => {
		sessionStorage.setItem("converge_section", JSON.stringify("abc"));
		localStorageUtil.removeSessionId();
		expect(sessionStorage.getItem("converge_section")).toBeNull();
	});

	it("does not read from localStorage even if a legacy value exists", () => {
		localStorage.setItem("converge_section", JSON.stringify("legacy-id"));
		expect(localStorageUtil.getSessionId()).toBeNull();
	});
});

describe("localStorageUtil general methods", () => {
	beforeEach(() => {
		localStorage.clear();
		sessionStorage.clear();
	});

	it("setItem stores JSON-serialised values", () => {
		localStorageUtil.setItem("k", { hello: "world" });
		expect(localStorage.getItem("k")).toBe(JSON.stringify({ hello: "world" }));
	});

	it("getItem returns the parsed value", () => {
		localStorage.setItem("k", JSON.stringify({ a: 1 }));
		expect(localStorageUtil.getItem("k")).toEqual({ a: 1 });
	});

	it("getItem returns the default value when the key is absent", () => {
		expect(localStorageUtil.getItem("missing", "fallback")).toBe("fallback");
	});

	it("getItem returns the default on malformed JSON", () => {
		localStorage.setItem("broken", "{not-json");
		expect(localStorageUtil.getItem("broken", null)).toBeNull();
	});

	it("removeItem deletes a key from localStorage", () => {
		localStorage.setItem("k", JSON.stringify("value"));
		localStorageUtil.removeItem("k");
		expect(localStorage.getItem("k")).toBeNull();
	});

	it("removeItem on the session key also cleans sessionStorage (migration safety)", () => {
		sessionStorage.setItem("converge_section", JSON.stringify("sid"));
		localStorageUtil.removeItem("converge_section");
		expect(sessionStorage.getItem("converge_section")).toBeNull();
	});

	it("clear wipes localStorage", () => {
		localStorage.setItem("a", "1");
		localStorage.setItem("b", "2");
		localStorageUtil.clear();
		expect(localStorage.length).toBe(0);
	});
});
