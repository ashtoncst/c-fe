import React, { useState, useRef } from 'react';

interface TabItem {
    id: string;
    label: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultTab,
    onChange,
    className = '',
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);


    const handleTabClick = (id: string) => {
        setActiveTab(id);
        if (onChange) onChange(id);
    };

    return (
        <div className={`w-full ${className}`}>
            <div
                className="flex flex-wrap items-end md:items-center justify-center gap-y-5 md:gap-8 pb-[2px] w-full"
                role="tablist"
                aria-label="Services tabs"
            >
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            ref={(el) => {
                                tabsRef.current[index] = el;
                            }}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${tab.id}`}
                            id={`tab-${tab.id}`}
                            onClick={() => handleTabClick(tab.id)}
                            className={`
              relative flex flex-col items-center md:items-start justify-end pb-0 md:pb-2 text-[12px] md:text-[18px] font-normal font-dm-sans transition-colors duration-300 text-center md:text-left leading-[1.15] md:leading-snug flex-[0_0_25%] min-w-0 md:flex-none md:w-auto break-words px-1 md:px-0
              ${isActive
                                    ? 'text-con-custom-green'
                                    : 'text-[#9F9FA9] hover:text-con-custom-green'
                                }
            `}
                        >
                            <span className="relative inline-block pb-1 md:pb-0">
                                {tab.label}
                                {isActive && (
                                    <span className="absolute bottom-[-2px] md:-bottom-[11px] left-0 right-0 h-[2px] bg-con-custom-green md:rounded-t-md" />
                                )}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
