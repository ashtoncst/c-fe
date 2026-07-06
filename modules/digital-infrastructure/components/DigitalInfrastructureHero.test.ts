import { describe, it, expect } from "vitest";
import { DIGITAL_INFRA_BROCHURES } from "./DigitalInfrastructureHero";
import { BROCHURE_URLS } from "@/config/brochures";

describe("Digital Infrastructure — brochure swaps", () => {
    it("offers the Omnibus brochure in place of the Digital Infrastructure brochure", () => {
        const first = DIGITAL_INFRA_BROCHURES[0];
        expect(first.url).toBe(BROCHURE_URLS.gbgOmnibus);
        expect(first.label).toMatch(/Omnibus/i);
    });

    it("offers the Converge Cloud (CSI's Cloud) brochure", () => {
        const cloud = DIGITAL_INFRA_BROCHURES.find((b) => /Cloud/i.test(b.label));
        expect(cloud?.url).toBe(BROCHURE_URLS.convergeCloud);
    });
});
