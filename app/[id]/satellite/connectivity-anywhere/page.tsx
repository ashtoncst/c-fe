import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ConnectivityAnywhereModule } from "@/modules/satellite-module/ConnectivityAnywhereModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Connectivity Anywhere, Anytime",
  description: "Placeholder description.",
  path: "/[id]/satellite/connectivity-anywhere",
});

export default function ConnectivityAnywherePage() {
  return <ConnectivityAnywhereModule />;
}
