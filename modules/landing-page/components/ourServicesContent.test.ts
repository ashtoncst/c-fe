import { describe, it, expect } from "vitest";
import { SERVICES_TAB_CONTENT_MAP } from "./ourServicesContent";

describe("ourServicesContent — Satellite Internet Learn More", () => {
    it("points the Satellite Internet primary CTA to the Starlink for Business page", () => {
        expect(SERVICES_TAB_CONTENT_MAP.secure.primaryCTA.href).toBe("/connectivity/satellite");
    });
});

describe("ourServicesContent — hidden (for future use) pages have no clickable link", () => {
    it("removes the link from the Transport via GPON card", () => {
        const card = SERVICES_TAB_CONTENT_MAP.data.sections
            .flatMap((s) => s.cards)
            .find((c) => c.title === "Transport via GPON");
        expect(card).toBeDefined();
        expect(card?.href).toBeUndefined();
    });

    it("removes the links from the Bifrost and SEA-H2X cable cards", () => {
        const cards = SERVICES_TAB_CONTENT_MAP.cable.sections.flatMap((s) => s.cards);
        const bifrost = cards.find((c) => c.title === "Bifrost");
        const seah2x = cards.find((c) => c.title === "SEA-H2X");
        expect(bifrost?.href).toBeUndefined();
        expect(seah2x?.href).toBeUndefined();
    });
});
