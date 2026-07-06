import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PartnersLogoStrip, PARTNERS } from "./PartnersLogoStrip";

describe("PartnersLogoStrip — Delta removed", () => {
    it("does not include Delta in the partners data", () => {
        expect(PARTNERS.some((p) => p.name === "Delta")).toBe(false);
    });

    it("does not render a Delta logo", () => {
        render(<PartnersLogoStrip />);
        expect(screen.queryByAltText(/Delta/i)).toBeNull();
    });
});
