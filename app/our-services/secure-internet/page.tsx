import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesSecureInternetPage } from "@/modules/our-services-secure-internet/OurServicesSecureInternetPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Secure Internet",
  description:
    "High-speed, low-latency satellite internet ideal for remote or underserved areas, backed by Converge ICT Solutions' enterprise-grade network and security.",
  path: "/our-services/secure-internet",
});

export default function Page() {
  return <OurServicesSecureInternetPage />;
}
