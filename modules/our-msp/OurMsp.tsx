"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { ChevronButton } from "@/components/ui/ChevronButton";
import Image from "next/image";
import { useState, useCallback } from "react";
import { BROCHURE_URLS } from "@/config/brochures";

const features = [
  {
    id: 1,
    title: "Proactive Monitoring & Management",
    image: "/images/sdwan/technology-earth1.png",
    bullets: [
      "24/7 real-time network monitoring and alerting",
      "Proactive issue detection before they impact operations",
      "Continuous performance optimization and reporting",
    ],
  },
  {
    id: 2,
    title: "Dedicated Expert Support",
    image: "/images/draas/male-check-computer.jpg",
    bullets: [
      "Dedicated team of certified network engineers",
      "Priority incident response and resolution",
      "Tailored support aligned to your business needs",
    ],
  },
  {
    id: 3,
    title: "Scalable & Flexible Solutions",
    image: "/images/colocation/colocation-1.png",
    bullets: [
      "Scale services up or down as your business grows",
      "Modular service bundles to fit any budget",
      "Seamless integration with existing infrastructure",
    ],
  },
];

const services = [
  {
    id: 1,
    title: "SD-WAN",
    description:
      "Software-defined wide area networking that intelligently routes traffic for optimal performance, security, and cost efficiency across all your sites.",
    image: "/images/sdwan/technology-earth1.png",
    alignLeft: true,
  },
  {
    id: 2,
    title: "DRaaS",
    description:
      "Disaster Recovery as a Service ensures your critical systems are backed up and recoverable within minutes, protecting your business from unexpected outages.",
    image: "/images/draas/male-check-computer.jpg",
    alignLeft: false,
  },
  {
    id: 3,
    title: "Managed WiFi",
    description:
      "Enterprise-grade wireless connectivity managed end-to-end, delivering seamless coverage, security, and performance across your entire workspace.",
    image: "/images/connectivity/award-winning.png",
    alignLeft: true,
  },
  {
    id: 4,
    title: "Managed Surveillance",
    description:
      "Comprehensive IP-based surveillance solutions with remote monitoring, analytics, and management to keep your premises secure around the clock.",
    image: "/images/colocation/Colocation2.png",
    alignLeft: false,
  },
];

export const OurMspModule = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const MobileServiceCard = ({ service }: { service: typeof services[0] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <div className="bg-white rounded-[50px] overflow-hidden shadow-lg flex flex-col">
        <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
          <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start p-6 text-center">
          <h3 className="text-[21px] text-[#024645] font-normal leading-tight mb-3 font-dm-sans">
            {service.title}
          </h3>
          <div className={`w-full text-[15px] text-black font-light leading-relaxed overflow-hidden transition-all duration-300 font-dm-sans ${isExpanded ? "max-h-[500px]" : "max-h-[48px]"}`}>
            <p>{service.description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[13px] text-[#038F8D] font-medium mt-2 hover:text-[#027573] transition-colors duration-200 cursor-pointer font-dm-sans"
          >
            {isExpanded ? "Read Less ›" : "Read More ›"}
          </button>
        </div>
      </div>
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
        <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
          <StickyHeader />
          <main className="flex-grow w-full relative -mt-[90px]">
            <PageHeroWithMobileCard
              title={
                <>
                  Our Managed
                  <br />
                  Service Provider
                </>
              }
              description="Converge's Managed Service Provider solutions deliver end-to-end management of your network, connectivity, and IT infrastructure — letting you focus on what matters most: your business."
              buttonLabel="Download"
              onButtonClick={() => setModalOpen(true)}
              backgroundImage="/images/our-msp/banner.png"
            />

            <div className="relative z-10 md:-mt-20">

              {/* Features Section */}
              <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                  <h2
                    className={`text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] pt-10 md:pt-12 min-[1025px]:pt-8 mb-4 md:mb-6 font-funnel`}
                  >
                    Why Choose Our MSP Solutions
                  </h2>

                  {/* Mobile: Single Card Carousel */}
                  <div className="block md:hidden w-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="flex-shrink-0">
                          <ChevronButton
                            direction="left"
                            onClick={prevSlide}
                            className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                          />
                        </div>
                        <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                          <Image
                            src={features[currentSlide].image}
                            alt={features[currentSlide].title}
                            fill
                            sizes="80vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-start justify-center pt-4">
                            <h3
                              className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                            >
                              {features[currentSlide].title}
                            </h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronButton
                            direction="right"
                            onClick={nextSlide}
                            className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                          />
                        </div>
                      </div>
                      <div className={`px-8 font-dm-sans`}>
                        <ul className="space-y-3">
                          {features[currentSlide].bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-[16px] text-black font-light leading-[24px]"
                            >
                              <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tablet/Desktop: 3-Column Grid */}
                  <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature) => (
                      <div key={feature.id} className="flex flex-col h-full">
                        <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            sizes="33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                            <h3
                              className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                            >
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <div className={`px-2 xl:px-4 font-dm-sans`}>
                          <ul className="space-y-2 xl:space-y-3">
                            {feature.bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-[16px] text-black font-light leading-[24px]"
                              >
                                <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section className="w-full bg-[#1e1e19] py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                  <div className="text-center mb-4 md:mb-6 max-w-[800px]">
                    <h2
                      className={`text-[32px] md:text-[40px] text-white mb-4 font-dm-sans`}
                    >
                      Our Managed Services
                    </h2>
                    <p
                      className={`text-[15px] md:text-[16px] text-white font-light leading-[1.6] font-dm-sans`}
                    >
                      Comprehensive managed solutions designed to simplify your operations and maximize uptime.
                    </p>
                  </div>

                  {/* Mobile: Expandable cards */}
                  <div className="flex flex-col gap-6 w-full max-w-[400px] md:hidden">
                    {services.map((service) => (
                      <MobileServiceCard key={service.id} service={service} />
                    ))}
                  </div>

                  {/* Tablet/Desktop: Horizontal split cards */}
                  <div className="hidden md:flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`flex ${service.alignLeft ? "flex-row" : "flex-row-reverse"} bg-white rounded-[4rem] overflow-hidden h-[420px] shadow-2xl`}
                      >
                        <div className="w-[30%] p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                          <h3
                            className={`text-[30px] text-[#024645] mb-6 leading-[28px] font-normal font-dm-sans`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`hidden xl:block text-[16px] text-black font-light leading-[24px] max-w-[320px] font-dm-sans`}
                          >
                            {service.description}
                          </p>
                        </div>
                        <div
                          className={`w-[70%] relative overflow-hidden ${service.alignLeft ? "rounded-l-[4rem]" : "rounded-r-[4rem]"}`}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="65vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </main>
          <div className="lg:px-20">
            <Footer isDisplayBanner={true} />
          </div>
        </div>
      </div>
      <DownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        downloadUrl={BROCHURE_URLS.managedServices}
      />
    </>
  );
};
