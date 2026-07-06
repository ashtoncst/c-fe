import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FiberBroadbandPage } from "@/modules/fiber-broadband/FiberBroadbandPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Fiber Broadband",
  description:
    "Power your business with high-speed, 100% fiber connectivity. Cost-efficient, scalable, and reliable fiber broadband solutions from Converge ICT Solutions.",
  path: "/connectivity/internet/fiber-broadband",
});

export default function Page() {
  return <FiberBroadbandPage />;
}
