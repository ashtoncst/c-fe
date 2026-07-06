import React from 'react';
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const InternationalDataSolutions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <Link href="/connectivity/transport/ethernet-international-private-line">
                <ServiceCard
                    image="/images/landing/landing-Metro.png"
                    title="IPLC/IEPL"
                    description="Our dedicated connectivity for your international branch offices and sites with Converge Ethernet - International Private Line. With Trans-Asia and Trans-Pacific cable systems, you get the security of multiple routing and the simplicity and cost-effectiveness of Ethernet technology."
                />
            </Link>

            <Link href="/connectivity/transport/cloud-direct-connect">
                <ServiceCard
                    image="/images/landing/landing-CDCS.png"
                    title="Cloud Direct Connect"
                    description="Converge Ethernet Direct Cloud Connect service provides a private, dedicated & high-throughput network connection between enterprise private networks and public Cloud Service Providers (CSP). The service offers enterprise customers an Internet with more robust performance, higher availability and lower latency."
                />
            </Link>
        </div>
    );
};
