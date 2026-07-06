import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ManagedServicesPage } from "@/modules/managed-services/ManagedServicesPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Managed Services",
  description:
    "Our managed services bring together disaster recovery, intelligent networking, managed WiFi, and surveillance into expert hands. Remote, real-time, and simplified business operations.",
  path: "/managed-services",
});

export default function Page() {
  return <ManagedServicesPage />;
}