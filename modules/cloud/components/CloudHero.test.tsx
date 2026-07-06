import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CloudHero, CLOUD_LEARN_MORE_URL } from "./CloudHero";

describe("CloudHero — Learn More redirect", () => {
    it("targets convergecloud.com", () => {
        expect(CLOUD_LEARN_MORE_URL).toBe("https://convergecloud.com");
    });

    it("renders a Learn More button", () => {
        render(<CloudHero />);
        // Rendered in both the desktop and mobile-card layouts.
        expect(screen.getAllByText(/Learn More/i).length).toBeGreaterThanOrEqual(1);
    });
});
