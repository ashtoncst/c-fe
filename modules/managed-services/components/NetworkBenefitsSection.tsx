import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const NetworkBenefitsSection = () => {
    return (
        <section className="py-[24px] md:py-[32px] bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
                {/* Section Title */}
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6">
                    <h2 className={`text-[35px] font-light leading-snug text-black mb-6 font-funnel`}>
                        Secure, Simplified, Scalable Networks
                    </h2>
                </AnimateOnScroll>

                {/* Three Card Grid */}
                <AnimateOnScroll variant="fade-up" delay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Simplified End-to-End Network Management */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-64">
                            <Image
                                src="/images/network-management.jpg"
                                alt="Network Management Professional"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className={`text-xl font-semibold mb-2 font-dm-sans`}>
                                    Simplified End-to-End Network Management
                                </h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className={`text-sm text-black space-y-2 font-dm-sans`}>
                                <li>• From design and deployment to 24/7 monitoring and maintenance, we fully manage your network infrastructure</li>
                                <li>• Reduced IT complexity and more focus on core business priorities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Enterprise-Grade Security & Performance */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-64 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center">
                            <div className="text-center text-white px-6">
                                <h3 className={`text-xl font-semibold mb-4 font-dm-sans`}>
                                    Enterprise-Grade Security & Performance
                                </h3>
                            </div>
                            {/* Tech pattern overlay */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="w-full h-full bg-[url('/images/tech-pattern.svg')] bg-repeat"></div>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className={`text-sm text-black space-y-2 font-dm-sans`}>
                                <li>• Optimized configurations, proactive monitoring, and advanced security controls keep your network performing at its best</li>
                                <li>• Enterprise-class threat detection protects your business operations</li>
                                <li>• Premium and intelligence-driven security strategies</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Flexible Investment Model */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-64">
                            <Image
                                src="/images/flexible-investment.jpg"
                                alt="Flexible Investment Solutions"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className={`text-xl font-semibold mb-2 font-dm-sans`}>
                                    Flexible Investment Model
                                </h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className={`text-sm text-black space-y-2 font-dm-sans`}>
                                <li>• Choose a subscription-based OPEX model for predictable monthly costs or CAPEX with on-premises</li>
                                <li>• Scale up or down based on your business needs and locations</li>
                            </ul>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};