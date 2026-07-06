import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DIABasicModule } from "@/modules/internet-module/DIABasicModule";

export const metadata: Metadata = generatePageMetadata({
  title: "DIA Basic",
  description: "Placeholder description.",
  path: "/[id]/internet/dia-basic",
});

export default function DIABasicPage() {
  return <DIABasicModule />;
}
