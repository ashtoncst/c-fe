import React from 'react';

interface ChevronButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    direction: 'left' | 'right';
}

export const ChevronButton = React.forwardRef<HTMLButtonElement, ChevronButtonProps>(
    ({ direction, className = '', disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled}
                className={`flex items-center justify-center w-[44px] h-[64px] rounded-[32px] bg-black/80 hover:bg-black/90 border border-white/10 text-white transition-all duration-200 disabled:bg-[#D1D5DB] disabled:hover:bg-[#D1D5DB] disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] ${className}`}
                aria-label={direction === 'left' ? 'Previous' : 'Next'}
                {...props}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${direction === 'left' ? '-translate-x-[1px]' : 'translate-x-[1px]'
                        }`}
                >
                    {direction === 'left' ? (
                        <path d="M15 18l-6-6 6-6" />
                    ) : (
                        <path d="M9 18l6-6-6-6" />
                    )}
                </svg>
            </button>
        );
    }
);

ChevronButton.displayName = 'ChevronButton';
