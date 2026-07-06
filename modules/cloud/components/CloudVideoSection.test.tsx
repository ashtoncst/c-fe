import { describe, it, expect } from "vitest";
import { CLOUD_AVP_SRC } from "./CloudVideoSection";

describe("CloudVideoSection — Converge Cloud AVP source", () => {
    it("points at the supplied Converge Cloud AVP video", () => {
        expect(CLOUD_AVP_SRC).toBe("/videos/converge-cloud-avp.mp4");
    });

    it("is a defined source (no longer a placeholder)", () => {
        expect(CLOUD_AVP_SRC).toBeTruthy();
    });
});
