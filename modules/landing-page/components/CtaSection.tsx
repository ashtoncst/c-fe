import React from 'react';
import { Button } from '@/components/ui/Button';

export const CtaSection = () => {
    return (
        <section className="w-full relative py-[24px] md:py-[32px] bg-white overflow-hidden">

            {/* Wave Background Top */}
            <div className="absolute top-0 left-0 right-0 w-full h-16 pointer-events-none opacity-20 hidden md:block"
                style={{
                    background: 'radial-gradient(ellipse at bottom, #038F8D 0%, transparent 70%)'
                }}
            />

            <div className="max-w-[800px] mx-auto text-center px-6 md:px-12 relative z-10 flex flex-col items-center">
                <h2 className={`text-[35px] font-light text-[#024645] mb-6 font-display font-funnel`}>
                    We&apos;re Here to Help
                </h2>

                <p className={`text-[16px] md:text-[18px] text-gray-600 mb-10 font-light font-dm-sans`}>
                    Ready to enhance your business operations? Connect with our experts today.
                </p>

                <Button variant="primary" size="lg" className="px-10 py-4 shadow-lg shadow-con-custom-green/20">
                    Connect with Us
                </Button>
            </div>

        </section>
    );
};
