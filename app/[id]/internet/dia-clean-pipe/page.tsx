import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DIACleanPipeModule } from "@/modules/internet-module/DIACleanPipeModule";

export const metadata: Metadata = generatePageMetadata({
  title: "DIA Clean Pipe",
  description: "Placeholder description.",
  path: "/[id]/internet/dia-clean-pipe",
});

export default function DIACleanPipePage() {
  return <DIACleanPipeModule />;
}
