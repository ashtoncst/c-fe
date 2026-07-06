import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Page chrome pulls in heavy client deps; stub it out for a focused render.
vi.mock("@/components/layouts/StickyHeader", () => ({ StickyHeader: () => null }));
vi.mock("@/components/layouts/Footer", () => ({ Footer: () => null }));
vi.mock("@/components/modals/DownloadModal", () => ({ DownloadModal: () => null }));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));

import { OurServicesSecurityPage } from "./OurServicesSecurityPage";

describe("OurServicesSecurityPage", () => {
    it("still renders the Security hero", () => {
        render(<OurServicesSecurityPage />);
        expect(screen.getAllByText(/Security/i).length).toBeGreaterThanOrEqual(1);
    });

    it("removes the '+ Add Product' button", () => {
        render(<OurServicesSecurityPage />);
        expect(screen.queryByText(/\+\s*Add Product/i)).toBeNull();
    });

    it("removes the video placeholder section", () => {
        render(<OurServicesSecurityPage />);
        expect(screen.queryByText(/Placeholder for Video/i)).toBeNull();
    });
});
