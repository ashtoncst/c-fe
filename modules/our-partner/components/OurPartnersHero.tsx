import Image from "next/image";

export const OurPartnersHero = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden bg-[#000814]">
            {/* Background globe image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/ourpartner/ourpartner.jpg"
                    alt="Global network visualization"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Hero Content — centered on mobile, left-aligned on md+ */}
            <div className="relative z-[10] w-full px-6 pb-[170px] md:px-12 lg:px-16 xl:pb-0 xl:px-[120px] pt-[180px] md:pt-[160px] xl:pt-[180px] max-w-[1440px] text-white text-center md:text-left md:mr-auto">
                <h1
                    className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 font-funnel`}
                >
                    Our Partners
                </h1>
                {/* Description + button — desktop only */}
                <div className="hidden xl:block">
                    <p
                        className={`text-[18px] text-white/90 font-light leading-[1.6] mb-10 max-w-[500px] font-dm-sans`}
                    >
                        Working hand in hand with our partners to create stronger
                        connections, greater opportunities, and a smarter digital future.
                    </p>
                </div>
            </div>
        </section>
    );
};
