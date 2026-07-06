import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { EthernetIntenationalPrivateLineModule } from "@/modules/transport-module/EthernetIntenationalPrivateLineModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Ethernet International Private Line",
  description:
    "Converge ICT Solutions Ethernet International Private Line delivers dedicated, secure cross-border connectivity for multinational enterprises and global carriers.",
  path: "/connectivity/transport/ethernet-international-private-line",
});

export default function EthernetInternationalPrivateLinePage() {
  return <EthernetIntenationalPrivateLineModule />;
}
