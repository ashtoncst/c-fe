import React from 'react';
import Image from 'next/image';
import { SolutionCard } from '@/components/ui/SolutionCard';
import { Button } from '@/components/ui/Button';

export const OurSolutionSection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-16 xl:px-[120px] bg-white rounded-t-[3rem] relative z-[20]">
            <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
                <h2 className={`text-[35px] font-light text-[#024645] mb-12 font-display font-funnel`}>
                    Our Solution
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto">
                    {/* Card 1 */}
                    <SolutionCard variant="dark" className="flex flex-col md:flex-row !rounded-[2.5rem] bg-[#111111]">
                        <div className="relative w-full md:w-[45%] h-[240px] md:h-auto overflow-hidden">
                            {/* Reference image for Distributed Setup */}
                            <Image
                                src="/images/our-solution-distributed-setup.png"
                                alt="Distributed Setup"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center text-left w-full md:w-[55%]">
                            <h3 className={`text-[24px] md:text-[28px] text-white mb-4 font-funnel`}>
                                Distributed Setup
                            </h3>
                            <p className={`text-[15px] font-light text-[#d0d0d0] mb-8 leading-[1.6] font-dm-sans`}>
                                Reliable connectivity for multiple locations that keeps your entire business operation connected and productive.
                            </p>
                            <Button size="sm" variant="outline" className="w-fit text-con-custom-teal border-con-custom-teal hover:bg-con-custom-teal">
                                Learn More
                            </Button>
                        </div>
                    </SolutionCard>

                    {/* Card 2 */}
                    <SolutionCard variant="dark" className="flex flex-col md:flex-row-reverse !rounded-[2.5rem] bg-[#111111]">
                        <div className="relative w-full md:w-[45%] h-[240px] md:h-auto overflow-hidden">
                            {/* Reference image for Hospitality */}
                            <Image
                                src="/images/our-solution-hospitality.png"
                                alt="Hospitality"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center text-left w-full md:w-[55%]">
                            <h3 className={`text-[24px] md:text-[28px] text-white mb-4 font-funnel`}>
                                Hospitality
                            </h3>
                            <p className={`text-[15px] font-light text-[#d0d0d0] mb-8 leading-[1.6] font-dm-sans`}>
                                Transform your guest experience with integrated entertainment and smart connectivity solutions that drive loyalty and operational excellence.
                            </p>
                            <Button size="sm" variant="outline" className="w-fit text-con-custom-teal border-con-custom-teal hover:bg-con-custom-teal">
                                Learn More
                            </Button>
                        </div>
                    </SolutionCard>
                </div>

                {/* Optional Carousel Controls */}
                <div className="flex gap-2 mt-8">
                    <div className="w-8 h-[4px] bg-[#024645] rounded-full"></div>
                    <div className="w-2 h-[4px] bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};
