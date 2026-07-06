import { describe, it, expect } from "vitest";
import { TESTIMONIAL_CARDS } from "./TestimonialSection";
import { GENERIC_AVATAR } from "@/config/constants";

describe("TestimonialSection — generic icons for selected customers", () => {
    it("uses a generic avatar for Faith Dimaano", () => {
        const card = TESTIMONIAL_CARDS.find((c) => c.name === "Faith Dimaano");
        expect(card?.img).toBe(GENERIC_AVATAR);
    });

    it("uses a generic avatar for Kenneth Canlas", () => {
        const card = TESTIMONIAL_CARDS.find((c) => c.name === "Kenneth Canlas");
        expect(card?.img).toBe(GENERIC_AVATAR);
    });

    it("keeps real photos for other customers", () => {
        const card = TESTIMONIAL_CARDS.find((c) => c.name === "Mikel Arriet");
        expect(card?.img).not.toBe(GENERIC_AVATAR);
    });
});
