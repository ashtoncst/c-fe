import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { IPVPNModule } from "@/modules/transport-module/IPVPNModule";

export const metadata: Metadata = generatePageMetadata({
  title: "IP VPN",
  description:
    "Converge ICT Solutions IP VPN provides secure, scalable multi-site WAN connectivity with guaranteed SLAs, ideal for enterprises with distributed branch offices.",
  path: "/connectivity/transport/ip-vpn",
});

export default function IPVPNPage() {
  return <IPVPNModule />;
}
