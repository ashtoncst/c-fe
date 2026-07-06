import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DCExpressModule } from "@/modules/transport-module/DCExpressModule";

export const metadata: Metadata = generatePageMetadata({
  title: "DC Express",
  description:
    "DC Express connects your enterprise directly to Converge ICT Solutions data centers with dedicated, high-speed fiber links for optimal performance and security.",
  path: "/connectivity/transport/dc-express",
});

export default function DCExpressPage() {
  return <DCExpressModule />;
}
