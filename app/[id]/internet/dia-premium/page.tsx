import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DIAPremiumModule } from "@/modules/internet-module/DIAPremiumModule";

export const metadata: Metadata = generatePageMetadata({
  title: "DIA Premium",
  description: "Placeholder description.",
  path: "/[id]/internet/dia-premium",
});

export default function DIAPremiumPage() {
  return <DIAPremiumModule />;
}
