import React from 'react';

interface SolutionCardProps {
    children: React.ReactNode;
    variant?: 'light' | 'dark' | 'transparent';
    className?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
    children,
    variant = 'light',
    className = '',
}) => {
    const baseStyles = 'rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-300 relative';

    const variants = {
        light: 'bg-[#F5F5F5] text-black shadow-sm hover:shadow-md',
        dark: 'bg-[#1a1f24] text-white shadow-lg',
        transparent: 'bg-transparent text-black',
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};
