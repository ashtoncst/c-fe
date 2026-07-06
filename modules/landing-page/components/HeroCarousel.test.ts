import { describe, it, expect } from "vitest";
import { SLIDES } from "./HeroCarousel";

describe("HeroCarousel — MEF 3.0 Learn More removed", () => {
    it("no slide exposes a Learn More button (buttonText)", () => {
        // The Learn More button + inquiry lightbox were removed from the MEF 3.0 slide.
        expect(SLIDES.every((slide) => !("buttonText" in slide) || !slide.buttonText)).toBe(true);
    });
});
