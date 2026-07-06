"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

const ddosAttackCards = [
    {
        id: 1,
        image: "/images/security/ddosattack1stcard.png",
        caption: "DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems referred to as 'botnets' or 'zombie armies' as sources of attack traffic which can include computers and other networked resources such as IoT devices.",
    },
    {
        id: 2,
        image: "/images/security/ddosattack2ndcard.png",
        caption: "Motivations for DDoS attacks tend to be financial, philosophical or political in nature.",
    },
];

const antiDDoSCards = [
    {
        id: 1,
        title: "On-Premises Defenses",
        image: "/images/security/antiddos1stcard.png",
        bullets: [
            "Quick, simple mitigation.",
            "Local scrubbing center, faster recovery.",
            "40Gbps mitigation capacity.",
        ],
    },
    {
        id: 2,
        title: "Hybrid Defenses",
        image: "/images/security/antiddos2ndcard.png",
        bullets: [
            "Integrated solution.",
            "Fastest time to mitigation.",
            "Defeats largest DDoS attacks.",
        ],
    },
    {
        id: 3,
        title: "Cloud Defenses",
        image: "/images/security/antiddos3rdcard.png",
        bullets: [
            "Advance mitigation.",
            "Global cloud scrubbing centers.",
            "Defeats the largest DDoS attacks.",
        ],
    },
];

const diaFeatures = [
    "Unlimited DDoS attack protection Volume and Frequency",
    "Automatic threat/attack mitigation reports & compliance",
    "Leave it to the expert with Converge dedicated 24x7 Security Operations Center (SOC)",
    "OPEX based, lower TCO, no additional hardware",
];

export const OurServicesSecurityPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader forceDarkLogo={true} />
                    <main className="flex-grow w-full relative -mt-[90px]">

                        {/* SECTION 1: Hero */}
                        <PageHeroWithMobileCard
                            title="Security"
                            description="Achieve your digital transformation goals with scalable, regulatory compliant & AI-ready cloud operations, and rapidly build AI-enhanced, cross-platform applications with proactive security across your entire organization."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/security/herobg.png"
                            bottomGradient="none"
                        />

                        {/* SECTION 3: What is DDoS Attack? */}
                        <section className="bg-white py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                            <div className="max-w-[1200px] mx-auto">
                                <AnimateOnScroll variant="fade-up">
                                    <h2 className={`text-[35px] text-[#024645] font-light text-center mb-4 md:mb-6 font-funnel`}>
                                        What is DDoS Attack?
                                    </h2>
                                    <p className={`text-[14px] xl:text-[15px] text-black font-light xl:font-normal text-center leading-[1.5] max-w-[580px] mx-auto mb-12 font-dm-sans`}>
                                        A distributed denial-of-service (DDoS) attack is an attempt to exhaust network, server or application resources so that they are no longer available to intended users and in some cases an attempt to cover up or distract from other exfiltration or theft of data activities.
                                    </p>
                                </AnimateOnScroll>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
                                    {ddosAttackCards.map((card) => (
                                        <AnimateOnScroll key={card.id} variant="fade-up" delay={card.id * 100}>
                                            <div>
                                                <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4">
                                                    <Image
                                                        src={card.image}
                                                        alt="DDoS Attack"
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className={`text-[14px] xl:text-[15px] text-black font-light xl:font-normal leading-[1.5] font-dm-sans`}>
                                                    {card.caption}
                                                </p>
                                            </div>
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* SECTION 4: Anti-DDoS Solution */}
                        <section className="bg-white py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                            <div className="max-w-[1200px] mx-auto">
                                <AnimateOnScroll variant="fade-up">
                                    <h2 className={`text-[35px] text-[#024645] font-light text-center mb-4 md:mb-6 font-funnel`}>
                                        Anti-DDoS Solution
                                    </h2>
                                </AnimateOnScroll>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                                    {antiDDoSCards.map((card) => (
                                        <AnimateOnScroll key={card.id} variant="fade-up" delay={card.id * 100}>
                                            <div>
                                                <div className="relative w-full aspect-[3/4] rounded-[1.5rem] xl:rounded-[2rem] overflow-hidden mb-5">
                                                    <Image
                                                        src={card.image}
                                                        alt={card.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-transparent" />
                                                    <div className="absolute top-5 left-5 right-5">
                                                        <h3 className={`text-white text-[20px] xl:text-[22px] font-medium leading-[1.2] font-funnel`}>
                                                            {card.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <ul className={`space-y-2 font-dm-sans`}>
                                                    {card.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-start text-[14px] xl:text-[15px] text-black font-light xl:font-normal leading-[1.5]">
                                                            <span className="text-[#038F8D] mr-2 flex-shrink-0 text-[16px] leading-[1.3]">›</span>
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* SECTION 5: Converge Anti-DDoS Product Features */}
                        <section className="bg-[#f2f5f5] py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] flex items-center">
                            <div className="max-w-[1200px] mx-auto w-full">
                                <AnimateOnScroll variant="fade-up">
                                    <div className="bg-white rounded-[2rem] xl:rounded-[2.5rem] px-8 md:px-12 xl:px-14 py-10 md:py-12 xl:py-14">

                                        {/* Top: Title left | Description + Button right */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
                                            <div className="md:w-[38%]">
                                                <h2 className={`text-[35px] font-light text-[#024645] leading-[1.2] font-funnel`}>
                                                    Converge<br />
                                                    Anti-DDoS<br />
                                                    Product Features
                                                </h2>
                                            </div>
                                            <div className="md:w-[55%] flex flex-col items-start gap-6">
                                                <p className={`text-[15px] xl:text-[16px] text-gray-800 font-normal leading-[1.65] font-dm-sans`}>
                                                    The evolution of Enterprise-grade Connectivity.<br />
                                                    Giving you not just dedicated but secured Internet Access.
                                                </p>
                                                <button
                                                    onClick={() => router.push("/contact-us")}
                                                    className={`bg-[#038F8D] hover:bg-[#024645] text-white rounded-full px-7 py-2.5 text-[14px] font-normal transition-colors duration-200 font-dm-sans`}
                                                >
                                                    Inquire for Pricing
                                                </button>
                                            </div>
                                        </div>

                                        {/* Teal Divider */}
                                        <div className="w-full h-[1.5px] bg-[#038F8D] mb-10" />

                                        {/* DIA + Anti-DDoS Protection title */}
                                        <h3 className={`text-[20px] xl:text-[24px] text-[#024645] font-normal text-center mb-8 font-dm-sans`}>
                                            DIA + Anti-DDoS Protection
                                        </h3>

                                        {/* 4 feature columns with vertical dividers */}
                                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-6 xl:gap-y-0 xl:divide-x xl:divide-[#038F8D]">
                                            {diaFeatures.map((feature, idx) => (
                                                <div key={idx} className="px-4 xl:px-8 text-center">
                                                    <p className={`text-[13px] xl:text-[14px] text-black font-light leading-[1.65] font-dm-sans`}>
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </section>

                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.security} />
        </>
    );
};
