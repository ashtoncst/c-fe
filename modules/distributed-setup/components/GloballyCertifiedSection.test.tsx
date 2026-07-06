import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { GloballyCertifiedSection } from "./GloballyCertifiedSection";

/**
 * The component renders BOTH mobile and desktop markup with
 * Tailwind's `hidden` / `md:hidden` toggles. happy-dom does not
 * compute responsive breakpoints, so the mobile chevrons are
 * always present in the DOM and queryable by aria-label
 * (`Previous` / `Next`, set by ChevronButton). No other element
 * in this component uses those labels.
 */

describe("GloballyCertifiedSection — mobile carousel bounds", () => {
    it("disables the Previous chevron on initial render (index 0)", () => {
        render(<GloballyCertifiedSection />);
        const prev = screen.getByRole("button", { name: /previous/i });
        const next = screen.getByRole("button", { name: /next/i });
        expect(prev).toBeDisabled();
        expect(next).not.toBeDisabled();
    });

    it("disables the Next chevron after advancing to the final slide", async () => {
        const user = userEvent.setup();
        render(<GloballyCertifiedSection />);
        const next = screen.getByRole("button", { name: /next/i });
        await user.click(next);
        await user.click(next);
        const prev = screen.getByRole("button", { name: /previous/i });
        expect(next).toBeDisabled();
        expect(prev).not.toBeDisabled();
    });

    it("does not advance when the disabled Previous chevron is clicked at index 0", async () => {
        const user = userEvent.setup();
        render(<GloballyCertifiedSection />);
        const prev = screen.getByRole("button", { name: /previous/i });
        expect(screen.getAllByRole("heading", { name: /global standard/i }).length).toBeGreaterThanOrEqual(1);
        await user.click(prev);
        expect(screen.getAllByRole("heading", { name: /global standard/i }).length).toBeGreaterThanOrEqual(1);
    });

    it("enables both chevrons at the middle slide (index 1)", async () => {
        const user = userEvent.setup();
        render(<GloballyCertifiedSection />);
        const next = screen.getByRole("button", { name: /next/i });
        await user.click(next);
        const prev = screen.getByRole("button", { name: /previous/i });
        expect(prev).not.toBeDisabled();
        expect(next).not.toBeDisabled();
    });

    it("returns to index 0 and disables Previous after stepping back from index 1", async () => {
        const user = userEvent.setup();
        render(<GloballyCertifiedSection />);
        const next = screen.getByRole("button", { name: /next/i });
        const prev = screen.getByRole("button", { name: /previous/i });
        await user.click(next);
        await user.click(prev);
        expect(prev).toBeDisabled();
        expect(next).not.toBeDisabled();
        expect(screen.getAllByRole("heading", { name: /global standard/i }).length).toBeGreaterThanOrEqual(1);
    });
});
