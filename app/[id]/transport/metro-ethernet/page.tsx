import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { MetroEthernetModule } from "@/modules/transport-module/MetroEthernetModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Metro Ethernet",
  description:
    "Converge ICT Solutions Metro Ethernet delivers high-speed, scalable Layer 2 connectivity across metro areas with enterprise-grade reliability and flexible bandwidth options.",
  path: "/connectivity/transport/metro-ethernet",
});

export default function MetroEthernetPage() {
  return <MetroEthernetModule />;
}
