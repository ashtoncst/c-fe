import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LocationPopup } from "./LocationPopup";
import { MultiEdgeSection } from "./MultiEdgeSection";
import { DATA_CENTER_SERVICE_SOLUTION } from "@/modules/colocation-data-module/constants";

describe("LocationPopup — client feedback on DC & CLS statuses", () => {
    it("renders the status, name, and photo it is given", () => {
        render(
            <LocationPopup
                status="Up and running"
                name="Angeles Data Center"
                image="/images/colocation/angeles-data-center.jpg"
            />
        );
        expect(screen.getByText("Up and running")).toBeInTheDocument();
        expect(screen.getByText("Angeles Data Center")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Angeles Data Center" })).toBeInTheDocument();
    });

    it("items 3, 5, and 7 of the location data are 'Up and running' with the updated names", () => {
        const [, , angeles, , caloocan, , davao] = DATA_CENTER_SERVICE_SOLUTION;
        expect(angeles).toMatchObject({ title: "Up and running", desc: ["Angeles Data Center"] });
        expect(caloocan).toMatchObject({ title: "Up and running", desc: ["Caloocan Data Center"] });
        expect(davao).toMatchObject({ title: "Up and running", desc: ["Davao Cable Landing Station"] });
    });
});

describe("MultiEdgeSection — popups driven by location data", () => {
    it("shows the first location (Pagudpud, Upcoming) by default", () => {
        render(<MultiEdgeSection />);
        // Rendered in both the desktop and mobile blocks.
        expect(screen.getAllByText("Pagudpud Cable Landing Station").length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText("Upcoming").length).toBeGreaterThanOrEqual(1);
    });
});
