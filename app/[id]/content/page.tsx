import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ContentModule } from "@/modules/content-module/ContentModule";

export const metadata: Metadata = generatePageMetadata({
    title: "Content Delivery",
    description:
        "Converge ICT Solutions content delivery provides fast, reliable digital content distribution with low latency and high availability for media, streaming, and enterprise applications.",
    path: "/cloud-data-centers-and-cyber-security/content",
});

export default function ContentPage() {
    return <ContentModule />;
}
