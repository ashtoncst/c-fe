import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FiberBroadbandPage } from "@/modules/fiber-broadband/FiberBroadbandPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Fiber Broadband",
  description:
    "Power your daily operations with high-speed, 100% fiber connectivity designed for consistent performance and business-grade reliability from Converge ICT Solutions.",
  path: "/our-services/fiber-broadband",
});

export default function Page() {
  return <FiberBroadbandPage />;
}
