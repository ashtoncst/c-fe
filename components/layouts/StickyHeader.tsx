"use client";

import React from 'react';
import { Header } from './Header';

interface StickyHeaderProps {
    isGlassInitial?: boolean;
    forceDarkLogo?: boolean;
    isAlwaysWhite?: boolean;
    noShadow?: boolean;
}

export const StickyHeader = ({ isGlassInitial = true, forceDarkLogo = false, isAlwaysWhite = false, noShadow = false }: StickyHeaderProps) => {
    // Determine header styling - use white background by default for better visibility
    const useWhiteBackground = isAlwaysWhite || !isGlassInitial;

    return (
        <div className={`relative top-0 left-0 right-0 z-[99999] ${useWhiteBackground ? 'bg-white py-4' : 'bg-transparent pt-8 md:pt-[36px]'}`}>
            <Header
                isGlass={!useWhiteBackground}
                darkLogo={useWhiteBackground || forceDarkLogo}
                scrolled={useWhiteBackground}
                forceDarkLogo={forceDarkLogo}
            />
        </div>
    );
};
