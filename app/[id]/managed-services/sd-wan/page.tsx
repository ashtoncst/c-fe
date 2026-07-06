import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SDWanModule } from "@/modules/manage-service-module/SDWanModule";

export const metadata: Metadata = generatePageMetadata({
  title: "SD-WAN",
  description:
    "Converge ICT Solutions SD-WAN simplifies multi-site networking with centralized management, intelligent routing, and enhanced security for distributed enterprises.",
  path: "/beyond-connectivity/managed-services/sd-wan",
});

export default function SDWanPage() {
  return <SDWanModule />;
}
