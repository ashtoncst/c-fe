import { describe, it, expect } from "vitest";
import { USER_TESTIMONIAL_CARDS } from "./UsersCardSlider";
import { GENERIC_AVATAR } from "@/config/constants";

describe("UsersCardSlider — generic icons for selected customers", () => {
    it("uses a generic avatar for Faith Dimaano and Kenneth Canlas", () => {
        const faith = USER_TESTIMONIAL_CARDS.find((c) => c.name === "Faith Dimaano");
        const kenneth = USER_TESTIMONIAL_CARDS.find((c) => c.name === "Kenneth Canlas");
        expect(faith?.img).toBe(GENERIC_AVATAR);
        expect(kenneth?.img).toBe(GENERIC_AVATAR);
    });
});
