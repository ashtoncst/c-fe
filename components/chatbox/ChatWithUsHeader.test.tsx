import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import { ChatWithUsHeader } from "./ChatWithUsHeader";

// The header interacts with the zustand store and storage utils. Mocks below
// let us assert the reset side-effects without touching real state.
const setMessagesGlobal = vi.fn();
const setCurrentSessionId = vi.fn();
const initializeMessages = vi.fn();

vi.mock("@/app/store/useChatStore", () => ({
	useChatStore: () => ({
		setMessagesGlobal,
		setCurrentSessionId,
		initializeMessages,
	}),
}));

const removeSessionId = vi.fn();
vi.mock("@/libs/storage", () => ({
	localStorageUtil: {
		removeSessionId: () => removeSessionId(),
	},
}));

/**
 * Bug motivating this test: the reset button used to wipe the transcript
 * on a single click with no warning — one accidental tap lost the whole
 * conversation. Two-click pattern: first click flips UI state + shows
 * "Click again to clear"; second click within 3 seconds actually clears.
 * A stray first click is forgiven after the timeout.
 */
describe("ChatWithUsHeader reset button", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		setMessagesGlobal.mockReset();
		setCurrentSessionId.mockReset();
		initializeMessages.mockReset();
		removeSessionId.mockReset();
	});

	afterEach(() => {
		cleanup();
		vi.useRealTimers();
	});

	it("first click does not reset; shows confirmation label", () => {
		render(<ChatWithUsHeader handleOpenModal={() => {}} />);
		const btn = screen.getByRole("button", { name: /reset/i });
		fireEvent.click(btn);
		expect(setMessagesGlobal).not.toHaveBeenCalled();
		expect(removeSessionId).not.toHaveBeenCalled();
		expect(screen.getByText(/click again to clear/i)).toBeInTheDocument();
	});

	it("second click within 3s clears the conversation", () => {
		render(<ChatWithUsHeader handleOpenModal={() => {}} />);
		const btn = screen.getByRole("button", { name: /reset/i });
		fireEvent.click(btn);
		fireEvent.click(btn);
		expect(removeSessionId).toHaveBeenCalledTimes(1);
		expect(setMessagesGlobal).toHaveBeenCalledWith([]);
		expect(setCurrentSessionId).toHaveBeenCalledWith(null);
		expect(initializeMessages).toHaveBeenCalled();
	});

	it("waiting longer than 3s resets the confirmation and behaves like a new first click", () => {
		render(<ChatWithUsHeader handleOpenModal={() => {}} />);
		const btn = screen.getByRole("button", { name: /reset/i });
		fireEvent.click(btn);
		act(() => {
			vi.advanceTimersByTime(3500);
		});
		fireEvent.click(btn);
		expect(removeSessionId).not.toHaveBeenCalled();
		expect(setMessagesGlobal).not.toHaveBeenCalled();
	});
});
