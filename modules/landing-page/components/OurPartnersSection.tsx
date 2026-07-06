import React from 'react';
import { InfiniteLogoStrip } from './InfiniteLogoStrip';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const OurPartnersSection = () => {
    return (
        <section className="w-full flex flex-col break-words bg-[#111111]">
            {/* Zone A: Top Teal Gradient Area */}
            <div className="relative w-full flex flex-col items-center justify-center pt-28 pb-24 md:pt-[140px] md:pb-[120px] overflow-hidden">
                {/* Teal Vertical Background Gradient without bottom dark fade */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #111111 0%, #0A7A78 100%)'
                    }}
                />

                {/* Subtle top/bottom vignette inside the teal zone */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 150% 100% at 50% 50%, transparent 30%, rgba(17,17,17,0.8) 90%, #111111 100%)'
                    }}
                />

                {/* Text Block */}
                <AnimateOnScroll variant="fade-up" className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-[800px]">
                    <h2 className={`text-[35px] text-white tracking-wide font-light mb-3 md:mb-5 font-funnel`}>
                        Our Partners
                    </h2>
                    <p className={`text-[14px] md:text-[16px] text-white/80 font-light leading-relaxed font-dm-sans`}>
                        We collaborate with trusted global partners<br className="hidden sm:block" />
                        to deliver reliable, future-ready solutions.
                    </p>
                </AnimateOnScroll>
            </div>

            {/* Zone B: Bottom Dark Logo Strip */}
            <InfiniteLogoStrip />
        </section>
    );
};
