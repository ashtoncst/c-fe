import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { MainLayout } from "@/components/layouts/MainLayout";
import { AIAssistantModule } from "@/modules/ai-assistant-module/AIAssistantModule";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Assistant",
  description:
    "Get instant answers about Converge ICT Solutions services with our AI-powered assistant. Find the right connectivity, cloud, or managed service solution for your business.",
  path: "/ai-assistant",
});

export default function AIAssistantPage() {
  return (
    <MainLayout childrenClassName="!pt-0 !lg:pt-0">
      <AIAssistantModule />
    </MainLayout>
  );
}
