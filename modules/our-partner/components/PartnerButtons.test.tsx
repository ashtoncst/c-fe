import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { OurPartnersHero } from "./OurPartnersHero";
import { StrongerTogetherSection } from "./StrongerTogetherSection";

describe("Partners — 'Partner with Us' button removed", () => {
    it("OurPartnersHero no longer renders a 'Partner with Us' button", () => {
        render(<OurPartnersHero />);
        expect(screen.queryByText(/Partner with Us/i)).toBeNull();
    });

    it("StrongerTogetherSection no longer renders a 'Partner with Us' button", () => {
        render(<StrongerTogetherSection />);
        expect(screen.queryByText(/Partner with Us/i)).toBeNull();
    });
});
