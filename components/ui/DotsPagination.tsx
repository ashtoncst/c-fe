import React from 'react';

interface DotsPaginationProps {
    count: number;
    activeIndex: number;
    onSelect: (index: number) => void;
    className?: string;
}

const DOT_SIZE = 6;
const GAP = 10;
const ACTIVE_WIDTH = 18;

export const DotsPagination: React.FC<DotsPaginationProps> = ({
    count,
    activeIndex,
    onSelect,
    className = '',
}) => {
    if (count <= 1) return null;

    const activeLeft = activeIndex * (DOT_SIZE + GAP) + DOT_SIZE / 2 - ACTIVE_WIDTH / 2;

    return (
        <div
            className={`inline-flex items-center justify-center relative ${className}`}
            role="tablist"
            aria-label="Section pagination"
        >
            {/* Active capsule */}
            <div
                className="absolute top-1/2 -translate-y-1/2 bg-[#111111] rounded-full transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{
                    width: ACTIVE_WIDTH,
                    height: DOT_SIZE + 2,
                    transform: `translateX(${activeLeft}px)`,
                }}
                aria-hidden="true"
            />

            <div className="flex items-center relative z-10" style={{ gap: GAP }}>
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        role="tab"
                        aria-label={`Go to item ${index + 1}`}
                        aria-selected={activeIndex === index}
                        onClick={() => onSelect(index)}
                        className="relative flex items-center justify-center outline-none"
                        style={{
                            width: DOT_SIZE,
                            height: DOT_SIZE,
                        }}
                    >
                        <span className="absolute -inset-3" aria-hidden="true" />
                        <span
                            className={`rounded-full bg-gray-300 transition-colors duration-200 ring-offset-2 ring-offset-white ring-black focus-visible:ring-2 ${
                                activeIndex === index ? 'opacity-0' : 'opacity-100'
                            }`}
                            style={{
                                width: DOT_SIZE,
                                height: DOT_SIZE,
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

