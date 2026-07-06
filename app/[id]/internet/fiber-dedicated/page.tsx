import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FiberDedicatedModule } from "@/modules/internet-module/FiberDedicatedModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Fiber Dedicated Internet",
  description:
    "Converge ICT Solutions Fiber Dedicated Internet provides exclusive, unshared fiber connectivity with 100% committed symmetrical speeds for mission-critical business operations.",
  path: "/connectivity/internet/fiber-dedicated",
});

export default async function FiberDedicatedPage() {
  return <FiberDedicatedModule />;
}
