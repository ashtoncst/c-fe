'use client';
import { Footer } from '@/components/layouts/Footer';
import { LightHeader } from '@/components/layouts/LightHeader';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isDisplayBanner?: boolean;
  className?: string;
  childrenClassName?: string;
};

export const MainLayout = (props: Props) => {
  const { isDisplayBanner } = props;
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState<
    'up' | 'down' | null
  >(null);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const SCROLL_THRESHOLD = 5; // Minimum scroll difference to trigger direction change

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      const isScrolled = currentScrollY > 10;

      // Determine scroll direction with threshold
      if (currentScrollY > lastScrollY.current + SCROLL_THRESHOLD) {
        setScrollDirection('down');
        lastScrollY.current = currentScrollY;
      } else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
        setScrollDirection('up');
        lastScrollY.current = currentScrollY;
      }

      // Update scroll state
      setScrolled(isScrolled);
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`lg:block hidden fixed w-full z-50 bg-white h-[94px] transition-all duration-300 
          ${scrolled ? 'shadow-md' : ''}
          ${scrollDirection === 'down' ? ' top-0 ' : 'top-0'}
        `}
      >
        <LightHeader isDisplayBanner={isDisplayBanner} />
      </div>
      <div className={`lg:pt-[94px] pt-[0px] ${props.childrenClassName}`}>
        {props.children}
        <div className={`px-2 lg:px-20 mt-[142px] ${props.className}`}>
          <Footer isDisplayBanner={true} />
        </div>
      </div>
    </div>
  );
};
