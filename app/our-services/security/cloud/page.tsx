import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { CloudDefensesModule } from "@/modules/security-module/CloudDefensesModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Cloud Defenses",
  description: "Placeholder description.",
  path: "/our-services/security/cloud",
});

export default function CloudDefensesPage() {
  return <CloudDefensesModule />;
}
