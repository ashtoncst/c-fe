import Link from "next/link";

export const WereHereToHelpSection = () => {
    return (
        <section className="w-full bg-[#111111] py-[24px] md:py-[32px] px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2
                    className={`text-[35px] font-light text-white leading-[1.3] mb-4 font-funnel`}
                >
                    {"We're Here to Help"}
                </h2>
                <p
                    className={`text-[15px] md:text-[17px] text-white/70 font-light leading-[1.7] max-w-[560px] mx-auto mb-10 font-dm-sans`}
                >
                    Explore how pure fiber internet can power your home or business.
                    Our team is ready to assist you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/our-msp"
                        className={`inline-flex items-center justify-center rounded-full px-[14px] py-[8px] text-[14px] font-normal tracking-wide text-white bg-[#009b9b] hover:bg-[#007a7a] transition-colors duration-300 font-dm-sans`}
                    >
                        DISCOVER PLANS
                    </Link>
                    <Link
                        href="/contact-us"
                        className={`inline-flex items-center justify-center rounded-full px-[14px] py-[8px] text-[14px] font-normal tracking-wide text-white bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors duration-300 font-dm-sans`}
                    >
                        CHAT WITH US
                    </Link>
                </div>
            </div>
        </section>
    );
};
