import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DigitalInfrastructurePage } from "@/modules/digital-infrastructure/DigitalInfrastructurePage";

export const metadata: Metadata = generatePageMetadata({
  title: "Digital Infrastructure",
  description:
    "Explore Converge ICT Solutions' world-class digital infrastructure — from national fiber networks to data centers and cloud-ready platforms built for enterprise scale.",
  path: "/our-solution/digital-infrastructure",
});

export default function Page() {
  return <DigitalInfrastructurePage />;
}
