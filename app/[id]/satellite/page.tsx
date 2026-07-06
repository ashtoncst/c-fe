import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import * as React from "react";
import { SatelliteModule } from "@/modules/satellite-module/SatelliteModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Satellite Connectivity",
  description:
    "Converge ICT Solutions satellite internet delivers high-speed connectivity up to 220Mbps via Starlink for Business, ideal for remote locations and underserved areas.",
  path: "/connectivity/satellite",
});

export default function SatellitePage() {
  return <SatelliteModule />;
}
