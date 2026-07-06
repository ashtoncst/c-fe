import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OpticalTransportNetworkModule } from "@/modules/transport-module/OpticalTransportNetworkModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Optical Transport Network",
  description:
    "Converge ICT Solutions' Optical Transport Network provides ultra-high capacity, low-latency backbone connectivity for carriers, enterprises, and data centers.",
  path: "/connectivity/transport/optical-transport-network",
});

export default function OpticalTransportNetworkPage() {
  return <OpticalTransportNetworkModule />;
}
