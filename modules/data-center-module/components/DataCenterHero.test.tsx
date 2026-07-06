import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataCenterHero } from "./DataCenterHero";

describe("DataCenterHero — copy update", () => {
    it("no longer mentions 'multi-edge'", () => {
        render(<DataCenterHero />);
        expect(screen.queryByText(/multi-edge/i)).toBeNull();
    });

    it("describes the data centers as 'high-capacity'", () => {
        render(<DataCenterHero />);
        // Rendered in both the desktop and mobile blocks.
        expect(screen.getAllByText(/high-capacity/i).length).toBeGreaterThanOrEqual(1);
    });
});
