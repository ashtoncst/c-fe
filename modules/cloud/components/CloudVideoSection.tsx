import React from "react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/** Converge Cloud AVP, served from /public/videos/. */
export const CLOUD_AVP_SRC = "/videos/converge-cloud-avp.mp4";

export const CloudVideoSection = () => {
    return (
        <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
            <div className="max-w-[1280px] mx-auto">
                <VideoPlayer src={CLOUD_AVP_SRC} title="Converge Cloud AVP" />
            </div>
        </section>
    );
};
