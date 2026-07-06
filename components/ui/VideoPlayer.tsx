"use client";

interface VideoPlayerProps {
    /** Public path to the video file, e.g. "/videos/cnvrg-x-starlink.mp4". */
    src?: string;
    /** Optional poster image shown before playback. */
    poster?: string;
    /** Accessible label / fallback text. */
    title?: string;
    className?: string;
}

/**
 * Reusable video player for landing-page AVP sections.
 *
 * When `src` is provided it renders a native, controllable <video>. When it is
 * omitted (asset not yet available) it falls back to the standard
 * "Placeholder for Video" treatment so the section keeps its layout.
 */
export const VideoPlayer = ({ src, poster, title, className = "" }: VideoPlayerProps) => {
    if (!src) {
        return (
            <div
                className={`w-full aspect-video bg-black rounded-[2rem] xl:rounded-[3rem] flex flex-col items-center justify-center gap-6 relative ${className}`}
            >
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                </div>
                <p className="text-white text-base font-light opacity-60 font-dm-sans">
                    Placeholder for Video
                </p>
            </div>
        );
    }

    return (
        <video
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={title}
            className={`w-full aspect-video bg-black rounded-[2rem] xl:rounded-[3rem] object-cover ${className}`}
        >
            <source src={src} type="video/mp4" />
            {title ?? "Your browser does not support the video tag."}
        </video>
    );
};
