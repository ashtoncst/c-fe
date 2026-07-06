import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ManagedWifiModule } from "@/modules/manage-service-module/ManagedWifiModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Managed WiFi",
  description:
    "Converge ICT Solutions Managed WiFi delivers enterprise-grade wireless connectivity with 24/7 monitoring, fast deployment, and seamless coverage for any business environment.",
  path: "/beyond-connectivity/managed-services/managed-wifi",
});

export default function ManagedWifiPage() {
  return <ManagedWifiModule />;
}
