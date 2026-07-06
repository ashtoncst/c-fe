import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FiberBoardModule } from "@/modules/fiber-board-module/FiberBoardModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Fiber Broadband Internet",
  description:
    "Converge ICT Solutions fiber broadband delivers high-speed, 100% fiber connectivity for homes and businesses with consistent performance and business-grade reliability.",
  path: "/connectivity/internet/fiber-board",
});

export default function FireBoardPage() {
  return <FiberBoardModule />;
}
