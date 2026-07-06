import type { Feature } from "@/modules/hospitality/components/DesignedForGuestSection";

/**
 * "Designed for Seamless Guest Experiences" feature blocks.
 *
 * Note: the bullets under "eCommerce Integration Ready" and "OTT Streaming
 * Friendly" are intentionally interchanged so each set of bullets sits under
 * the matching title (streaming bullets → OTT, in-room dining bullets →
 * eCommerce).
 */
export const CONTENT_PLUS_GUEST_FEATURES: Feature[] = [
    {
        id: 1,
        title: "Integrated Feature Set",
        image: "/images/hospitalityfirstcolumn.png",
        bullets: [
            "Choice of Basic or Premium Channels tailored to your guests",
            "Watch live TV: Kids, Sports, News, and General Entertainment",
        ],
    },
    {
        id: 2,
        title: "eCommerce Integration Ready",
        image: "/images/hospitalitysecondcolumn.png",
        bullets: [
            "Virtually host your menu with instant food ordering",
            "Real-time kitchen notification for seamless in-room service",
        ],
    },
    {
        id: 3,
        title: "OTT Streaming Friendly",
        image: "/images/hospitalitythirdcolumn.png",
        bullets: [
            "Netflix, Disney+, YouTube, and more — all in one platform",
            "Auto logout after guest check-out with quick QR log-in",
        ],
    },
];
