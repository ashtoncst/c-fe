import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const StrongerTogetherSection = () => {
    return (
        <section className="w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] relative z-10 pt-8 md:pt-10 xl:pt-[40px] pb-8 md:pb-10 xl:pb-[40px] px-6 md:px-12">
            <AnimateOnScroll variant="fade-up" className="max-w-[1200px] mx-auto text-center">

                {/* Mobile/tablet only: hero description */}
                <div className="xl:hidden mb-8 md:mb-10">
                    <p
                        className={`text-[16px] text-[#000] leading-[24px] font-light mb-6 font-dm-sans`}
                    >
                        Working hand in hand with our partners to create stronger
                        connections, greater opportunities, and a smarter digital future.
                    </p>
                </div>

                <h2
                    className={`text-[35px] font-light text-[#024645] leading-[1.3] mb-5 md:mb-6 font-funnel`}
                >
                    Stronger Together in a Connected World
                </h2>
                <p
                    className={`text-[18px] text-black font-light leading-[1.7] max-w-[680px] mx-auto font-dm-sans`}
                >
                    Our ecosystem of global partners enables delivery of seamless,
                    comprehensive solutions that accelerate your digital journey.
                </p>
            </AnimateOnScroll>
        </section>
    );
};
