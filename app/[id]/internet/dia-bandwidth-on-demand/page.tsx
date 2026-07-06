import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DIABandwidthOnDemandModule } from "@/modules/internet-module/DIABandwidthOnDemandModule";

export const metadata: Metadata = generatePageMetadata({
  title: "DIA Bandwidth-on-Demand",
  description: "Placeholder description.",
  path: "/[id]/internet/dia-bandwidth-on-demand",
});

export default function DIABandwidthOnDemandPage() {
  return <DIABandwidthOnDemandModule />;
}
