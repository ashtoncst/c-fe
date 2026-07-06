import React, { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { ServicesTabPanel } from './ServicesTabPanel';
import { SERVICES_TAB_CONTENT_MAP } from './ourServicesContent';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const SERVICES_TABS = [
  { id: 'data', label: 'Data' },
  { id: 'dia', label: 'Dedicated Internet Access' },
  { id: 'fiber', label: 'Fiber Broadband' },
  { id: 'secure', label: <>Satellite <br className="md:hidden" />Internet</> },
  { id: 'cable', label: 'Cable System' },
  { id: 'content', label: 'Content Plus' },
  { id: 'security', label: 'Security' },
];

export const OurServicesSection = () => {
  const [activeTab, setActiveTab] = useState('data');
  const content = SERVICES_TAB_CONTENT_MAP[activeTab];

  return (
    <section className="w-full pt-0 pb-[24px] md:pb-[32px] px-0 md:px-12 xl:px-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Section Header */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6 px-6 md:px-0">
          <h2 className={`text-[35px] font-light text-[#024645] mb-4 font-display font-funnel`}>
            Our Services
          </h2>
          <p className={`text-[18px] text-black max-w-[350px] mx-auto font-light font-dm-sans`}>
            Solutions built for everyday life, future growth, and everything in between.
          </p>
        </AnimateOnScroll>

        {/* Tabs */}
        <AnimateOnScroll variant="fade-up" delay={150} className="w-full mb-6 px-6 md:px-0">
          <Tabs
            tabs={SERVICES_TABS}
            defaultTab="data"
            onChange={(tab) => setActiveTab(tab)}
          />
        </AnimateOnScroll>

        {/* Tab Content Wrapper */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="w-full bg-[#f8f9fa] rounded-none md:rounded-[2.5rem] px-4 py-2 md:p-2"
        >
          {content ? (
            <ServicesTabPanel key={activeTab} content={content} />
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-gray-400 font-light">Content coming soon...</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
