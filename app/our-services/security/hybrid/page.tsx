import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { HybridDefensesModule } from "@/modules/security-module/HybridDefensesModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Hybrid Defenses",
  description: "Placeholder description.",
  path: "/our-services/security/hybrid",
});

export default function HybridDefensesPage() {
  return <HybridDefensesModule />;
}
