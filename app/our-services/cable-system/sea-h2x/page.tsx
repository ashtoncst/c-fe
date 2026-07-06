import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SEAH2XModule } from "@/modules/cable-system-module/SEAH2XModule";

export const metadata: Metadata = generatePageMetadata({
  title: "SEA-H2X",
  description: "Placeholder description.",
  path: "/our-services/cable-system/sea-h2x",
});

export default function SEAH2XPage() {
  return <SEAH2XModule />;
}
