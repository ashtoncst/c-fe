import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BusinessContinuityModule } from "@/modules/satellite-module/BusinessContinuityModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Business Continuity & Redundancy",
  description: "Placeholder description.",
  path: "/[id]/satellite/business-continuity",
});

export default function BusinessContinuityPage() {
  return <BusinessContinuityModule />;
}
