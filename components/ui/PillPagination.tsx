import React, { useEffect, useState, useRef } from 'react';

interface PillPaginationProps {
    count: number;
    activeIndex: number;
    onSelect: (index: number) => void;
    className?: string;
    showProgress?: boolean;
    progressDuration?: number; // Duration in milliseconds
    onProgressComplete?: () => void;
    resetProgress?: number; // Counter that increments on each reset signal
}

export const PillPagination: React.FC<PillPaginationProps> = ({
    count,
    activeIndex,
    onSelect,
    className = '',
    showProgress = false,
    progressDuration = 7000,
    onProgressComplete,
    resetProgress = false,
}) => {
    const [progress, setProgress] = useState(0);
    const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);

    // Clean up timer on unmount
    useEffect(() => {
        return () => {
            if (progressTimerRef.current) {
                clearInterval(progressTimerRef.current);
            }
        };
    }, []);

    // Reset progress when activeIndex changes or resetProgress signal is received
    useEffect(() => {
        if (showProgress) {
            // Clear existing timer
            if (progressTimerRef.current) {
                clearInterval(progressTimerRef.current);
            }

            // Reset progress
            startTimeRef.current = Date.now();
            setTimeout(() => setProgress(0), 0);

            // Start new progress timer
            progressTimerRef.current = setInterval(() => {
                const elapsed = Date.now() - startTimeRef.current;
                const newProgress = Math.min((elapsed / progressDuration) * 100, 100);
                
                setProgress(newProgress);
                
                if (newProgress >= 100) {
                    clearInterval(progressTimerRef.current!);
                    if (onProgressComplete) {
                        onProgressComplete();
                    }
                }
            }, 16); // 60fps updates
        }
    }, [activeIndex, showProgress, progressDuration, onProgressComplete, resetProgress]);

    if (count <= 1) return null;

    return (
        <div
            className={`inline-flex items-center justify-center bg-white/95 backdrop-blur-md rounded-full h-[22px] px-4 gap-2.5 ${className}`}
            role="tablist"
            aria-label="Carousel pagination"
        >
            {Array.from({ length: count }).map((_, i) => {
                const isActive = activeIndex === i;
                return (
                    <button
                        key={i}
                        role="tab"
                        aria-label={`Go to slide ${i + 1}`}
                        aria-selected={isActive}
                        aria-current={isActive ? 'true' : 'false'}
                        onClick={() => onSelect(i)}
                        className={`relative outline-none flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full`}
                    >
                        {/* Extended tap target for mobile accessibility */}
                        <span className="absolute -inset-3" aria-hidden="true" />

                        {/* Visual Dot / Capsule */}
                        <span
                            className={`block rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] relative overflow-hidden ${isActive
                                    ? showProgress ? 'bg-[#d1d5db]' : 'bg-[#111111]'
                                    : 'bg-[#d1d5db] group-hover:bg-[#a3a3a3]'
                                }`}
                            style={{
                                height: '8px',
                                width: isActive ? '24px' : '8px',
                            }}
                        >
                            {/* Progress fill for active dot - only show if showProgress is true */}
                            {isActive && showProgress && (
                                <span
                                    className="absolute inset-0 bg-[#111111] rounded-full transition-none"
                                    style={{
                                        transform: `scaleX(${progress / 100})`,
                                        transformOrigin: 'left',
                                    }}
                                />
                            )}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
