import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { HospitalityPage } from "@/modules/hospitality/HospitalityPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Hospitality Solutions",
  description:
    "Elevate your hospitality business with Converge ICT Solutions' high-performance WiFi, IPTV, and digital infrastructure solutions designed for hotels, resorts, and hospitality operators.",
  path: "/our-solution/hospitality",
});

export default function Page() {
  return <HospitalityPage />;
}
