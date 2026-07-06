import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VideoPlayer } from "./VideoPlayer";

describe("VideoPlayer", () => {
    it("renders a <video> with the given source", () => {
        const { container } = render(
            <VideoPlayer src="/videos/cnvrg-x-starlink.mp4" title="Converge x Starlink AVP" />,
        );
        const video = container.querySelector("video");
        expect(video).not.toBeNull();
        const source = container.querySelector("source");
        expect(source?.getAttribute("src")).toBe("/videos/cnvrg-x-starlink.mp4");
    });

    it("falls back to a placeholder when no source is provided", () => {
        const { container } = render(<VideoPlayer />);
        expect(container.querySelector("video")).toBeNull();
        expect(screen.getByText(/Placeholder for Video/i)).toBeInTheDocument();
    });
});
