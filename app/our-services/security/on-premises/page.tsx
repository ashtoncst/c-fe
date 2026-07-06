import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OnPremisesDefensesModule } from "@/modules/security-module/OnPremisesDefensesModule";

export const metadata: Metadata = generatePageMetadata({
  title: "On-Premises Defenses",
  description: "Placeholder description.",
  path: "/our-services/security/on-premises",
});

export default function OnPremisesPage() {
  return <OnPremisesDefensesModule />;
}
