import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesCableSystemPage } from "@/modules/our-services-cable-system/OurServicesCableSystemPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Cable System",
  description:
    "Advanced subsea and fiber solutions for global carriers and enterprises, enabling seamless high-performance communication through Converge ICT Solutions' cable infrastructure.",
  path: "/our-services/cable-system",
});

export default function Page() {
  return <OurServicesCableSystemPage />;
}
