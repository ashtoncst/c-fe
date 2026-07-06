import React from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const OpticalTransportNetworkSolutions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <ServiceCard
                image="/images/landing/landing-Metro.png"
                title="Metro Lambda"
                description="A mid-to-high capacity DWDM (Dense Wavelength Division Multiplexing) which provides high-capacity and secure data connectivity between geographically separated sites, ensures that your business continuity and guarantees highest quality. The consistent and reliable connectivity of the point-to-point service enables seamless collaboration across different locations."
            />

            <ServiceCard
                image="/images/landing/landing-DC.png"
                title="Data Center Express"
                description="DC Express supports different protocols to connect data centers to the host IT Services and Network Elements."
            />

            <ServiceCard
                image="/images/landing/landing-CDCS.png"
                title="Cable Landing Express"
                description="This is a dedicated ethernet service running over the DWDM network for continuous database network connections between cable landing stations. It is a specialized product catered primarily to submarine cable capacity to use inside the landing stations into the POI."
            />
        </div>
    );
};
