import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const ManagedSolutionsSection = () => {
    return (
        <section className="py-[24px] md:py-[32px] bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
                {/* Section Title */}
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6">
                    <h2 className={`text-[35px] font-light leading-snug text-black mb-6 font-funnel`}>
                        Our Managed Solutions
                    </h2>
                    <p className={`text-lg leading-relaxed text-black max-w-3xl mx-auto font-dm-sans`}>
                        The essential services your business needs delivered and managed by experts.
                    </p>
                </AnimateOnScroll>

                {/* Solutions Grid */}
                <AnimateOnScroll variant="fade-up" delay={150} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* DRaaS */}
                    <Link href="/managed-services/draas" className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 relative">
                                    <div className="h-48 md:h-full relative bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <Image
                                            src="/images/draas-cloud.png"
                                            alt="DRaaS Cloud Solution"
                                            width={120}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-xl font-semibold text-black font-dm-sans`}>
                                            DRaaS
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-[#038F8D] group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                    <p className={`text-sm text-black mb-4 font-dm-sans`}>
                                        Disaster Recovery as a Service
                                    </p>
                                    <p className={`text-sm text-black leading-relaxed font-dm-sans`}>
                                        Comprehensive backup and recovery solutions to protect your critical business data with automated failover capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* SD-WAN */}
                    <Link href="/managed-services/sd-wan" className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-2/3 p-6 flex flex-col justify-center order-2 md:order-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-xl font-semibold text-black font-dm-sans`}>
                                            SD-WAN
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-[#038F8D] group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                    <p className={`text-sm text-black mb-4 font-dm-sans`}>
                                        Software-Defined Wide Area Network
                                    </p>
                                    <p className={`text-sm text-black leading-relaxed font-dm-sans`}>
                                        A connectivity that works for any business, 4 secure cloud locations.
                                    </p>
                                </div>
                                <div className="md:w-1/3 relative order-1 md:order-2">
                                    <div className="h-48 md:h-full relative bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Managed Wi-Fi */}
                    <Link href="/managed-services/managed-wifi" className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 relative">
                                    <div className="h-48 md:h-full relative">
                                        <Image
                                            src="/images/managed-wifi-person.jpg"
                                            alt="Managed Wi-Fi Professional"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-xl font-semibold text-black font-dm-sans`}>
                                            Managed Wi-Fi
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-[#038F8D] group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                    <p className={`text-sm text-black mb-4 font-dm-sans`}>
                                        Enterprise Wireless Solutions
                                    </p>
                                    <p className={`text-sm text-black leading-relaxed font-dm-sans`}>
                                        Seamless and consistent Wi-Fi experience that runs effortlessly, Simple, fast and reliable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Managed Surveillance */}
                    <Link href="/managed-services/managed-surveillance" className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-2/3 p-6 flex flex-col justify-center order-2 md:order-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-xl font-semibold text-black font-dm-sans`}>
                                            Managed Surveillance
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-[#038F8D] group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                    <p className={`text-sm text-black mb-4 font-dm-sans`}>
                                        Security Monitoring Solutions
                                    </p>
                                    <p className={`text-sm text-black leading-relaxed font-dm-sans`}>
                                        Secure. Monitor. Protect — Managed by Experts
                                    </p>
                                </div>
                                <div className="md:w-1/3 relative order-1 md:order-2">
                                    <div className="h-48 md:h-full relative bg-gradient-to-br from-gray-700 to-blue-800 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </AnimateOnScroll>
            </div>
        </section>
    );
};