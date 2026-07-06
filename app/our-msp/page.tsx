import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurMspModule } from "@/modules/our-msp/OurMsp";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Managed Service Provider",
  description:
    "Discover Converge ICT Solutions' Managed Service Provider (MSP) program — partner with us to deliver enterprise-grade connectivity, security, and managed services to your customers.",
  path: "/our-msp",
});

export default function OurMspPage() {
  return <OurMspModule />;
}
