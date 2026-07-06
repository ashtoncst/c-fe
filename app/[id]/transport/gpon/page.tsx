import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GOPNModule } from "@/modules/transport-module/GOPNModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Transport via GPON",
  description: "Placeholder description.",
  path: "/[id]/transport/gpon",
});

export default function TransportGPONPage() {
  return <GOPNModule />;
}
