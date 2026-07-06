import { describe, it, expect } from "vitest";
import { DATA_CENTER_SERVICE_SOLUTION } from "./index";

/**
 * The timeline `title` field holds the status label ("Up and running" /
 * "Upcoming") and `desc[0]` holds the location name. Items are referred to
 * 1-based in the brief (3, 5, 7) → array indices 2, 4, 6.
 */
describe("DATA_CENTER_SERVICE_SOLUTION — timeline updates", () => {
    it("item 3 is Angeles Data Center and Up and running", () => {
        const item = DATA_CENTER_SERVICE_SOLUTION[2];
        expect(item.title).toBe("Up and running");
        expect(item.desc[0]).toBe("Angeles Data Center");
        expect(item.image).toContain("angeles");
    });

    it("item 5 is Up and running", () => {
        expect(DATA_CENTER_SERVICE_SOLUTION[4].title).toBe("Up and running");
    });

    it("item 7 is Davao Cable Landing Station and Up and running", () => {
        const item = DATA_CENTER_SERVICE_SOLUTION[6];
        expect(item.title).toBe("Up and running");
        expect(item.desc[0]).toBe("Davao Cable Landing Station");
        expect(item.image).toContain("davao");
    });

    it("uses the latest Data Center / CLS photos for known locations", () => {
        expect(DATA_CENTER_SERVICE_SOLUTION[1].image).toContain("la-union"); // La Union CLS
        expect(DATA_CENTER_SERVICE_SOLUTION[4].image).toContain("caloocan"); // Caloocan DC
        expect(DATA_CENTER_SERVICE_SOLUTION[5].image).toContain("pasig"); // Pasig DC
    });
});
