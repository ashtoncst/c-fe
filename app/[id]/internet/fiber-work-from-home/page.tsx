import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FiberWorkFromHomeModule } from "@/modules/internet-module/FiberWorkFromHomeModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Business Fiber Work-from-Home",
  description: "Placeholder description.",
  path: "/[id]/internet/fiber-work-from-home",
});

export default function FiberWorkFromHomePage() {
  return <FiberWorkFromHomeModule />;
}
