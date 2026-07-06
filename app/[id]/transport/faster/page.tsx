import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FasterModule } from "@/modules/transport-module/FasterModule";

export const metadata: Metadata = generatePageMetadata({
  title: "FASTER Cable System",
  description:
    "Converge ICT Solutions is a consortium member of the FASTER cable system, providing high-capacity trans-Pacific connectivity for carriers and internet operators.",
  path: "/connectivity/transport/faster",
});

export default function FasterPage() {
  return <FasterModule />;
}
