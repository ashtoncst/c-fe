import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { CLSExpressModule } from "@/modules/transport-module/CLSExpressModule";

export const metadata: Metadata = generatePageMetadata({
  title: "CLS Express",
  description:
    "CLS Express delivers carrier-grade cable landing station connectivity through Converge ICT Solutions' fiber network for high-capacity international traffic.",
  path: "/connectivity/transport/cls-express",
});

export default function CLSExpressPage() {
  return <CLSExpressModule />;
}
