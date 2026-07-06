import React from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const DomesticDataSolutions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <ServiceCard
                image="/images/selling/image4.png"
                title="eLine, eLAN, eTree, and eAccess"
                description="A dedicated, private network connectivity service that securely links various offices together using MPLS technology, running on layer 2."
            />

            <ServiceCard
                image="/images/selling/image1.png"
                title="IP VPN (Layer 3)"
                description="A dedicated, private network connectivity service that securely links remote offices together using MPLS technology, running on layer 3."
            />

            <ServiceCard
                image="/images/selling/image2.png"
                title="Transport via GPON"
                description="A dedicated point-to-point network offer, a secure and private WAN connection to customers' branches or remote sites using our pure fiber GPON network."
            />
        </div>
    );
};
