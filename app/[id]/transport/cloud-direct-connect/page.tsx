import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { CloudDirectConnectModule } from "@/modules/transport-module/CloudDirectConnectModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Cloud Direct Connect",
  description:
    "Converge ICT Solutions Cloud Direct Connect offers private, high-performance connections to leading cloud providers, bypassing the public internet for superior reliability.",
  path: "/connectivity/transport/cloud-direct-connect",
});

export default function CloudDirectConnectPage() {
  return <CloudDirectConnectModule />;
}
