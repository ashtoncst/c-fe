import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DataCenterPage } from "@/modules/data-center-module/DataCenterPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Data Centers",
  description:
    "Converge ICT Solutions carrier-neutral data centers offer redundant power, cooling, and connectivity for mission-critical IT infrastructure across the Philippines.",
  path: "/data-center",
});

export default function Page() {
  return <DataCenterPage />;
}
