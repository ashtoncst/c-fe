import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { RapidDeploymentModule } from "@/modules/satellite-module/RapidDeploymentModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Rapid Deployment & Scalability",
  description: "Placeholder description.",
  path: "/[id]/satellite/rapid-deployment",
});

export default function RapidDeploymentPage() {
  return <RapidDeploymentModule />;
}
