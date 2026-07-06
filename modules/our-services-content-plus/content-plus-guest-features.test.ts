import { describe, it, expect } from "vitest";
import { CONTENT_PLUS_GUEST_FEATURES } from "./content-plus-guest-features";

describe("Content Plus — eCommerce / OTT bullets interchanged", () => {
    const ecommerce = CONTENT_PLUS_GUEST_FEATURES.find(
        (f) => f.title === "eCommerce Integration Ready",
    );
    const ott = CONTENT_PLUS_GUEST_FEATURES.find((f) => f.title === "OTT Streaming Friendly");

    it("eCommerce Integration Ready now carries the in-room dining bullets", () => {
        expect(ecommerce?.bullets).toEqual([
            "Virtually host your menu with instant food ordering",
            "Real-time kitchen notification for seamless in-room service",
        ]);
    });

    it("OTT Streaming Friendly now carries the streaming bullets", () => {
        expect(ott?.bullets).toEqual([
            "Netflix, Disney+, YouTube, and more — all in one platform",
            "Auto logout after guest check-out with quick QR log-in",
        ]);
    });
});
