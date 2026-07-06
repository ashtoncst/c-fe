import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ColocationDataCenter } from "@/modules/colocation-data-module/ColocationDataCenter";

export const metadata: Metadata = generatePageMetadata({
  title: "Colocation Data Center",
  description:
    "Converge ICT Solutions carrier-neutral colocation data centers offer redundant power, cooling, and connectivity for mission-critical IT infrastructure across the Philippines.",
  path: "/cloud-data-centers-and-cyber-security/colocation",
});

export default function ColocationPage() {
  return <ColocationDataCenter />;
}
