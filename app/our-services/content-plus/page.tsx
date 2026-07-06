import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesContentPlusPage } from "@/modules/our-services-content-plus/OurServicesContentPlusPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Content Plus",
  description:
    "Resilient, high-performance digital ecosystems that empower you to exceed guest expectations and drive operational excellence with Converge ICT Solutions.",
  path: "/our-services/content-plus",
});

export default function Page() {
  return <OurServicesContentPlusPage />;
}
