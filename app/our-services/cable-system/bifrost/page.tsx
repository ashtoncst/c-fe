import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BifrostModule } from "@/modules/cable-system-module/BifrostModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Bifrost",
  description: "Placeholder description.",
  path: "/our-services/cable-system/bifrost",
});

export default function BifrostPage() {
  return <BifrostModule />;
}
