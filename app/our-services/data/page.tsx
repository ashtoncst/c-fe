import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesDataPage } from "@/modules/our-services-data/OurServicesDataPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Data Connectivity Services",
  description:
    "Supercharge your business operations with fast and reliable, high-capacity data connectivity designed for maximum performance, security, and scalability.",
  path: "/our-services/data",
});

export default function Page() {
  return <OurServicesDataPage />;
}
