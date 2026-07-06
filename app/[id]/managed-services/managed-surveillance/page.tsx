import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ManagedSurveillanceModule } from "@/modules/manage-service-module/ManagedSurveillanceModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Managed Surveillance",
  description:
    "Converge ICT Solutions Managed Surveillance provides AI-powered video monitoring, real-time alerts, and cloud-based storage for comprehensive business security.",
  path: "/beyond-connectivity/managed-services/managed-surveillance",
});

export default function ManagedSurveillancePage() {
  return <ManagedSurveillanceModule />;
}
