import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DetailSolutionPage } from "@/modules/detail-page/DetailSolutionPage";
import { notFound } from "next/navigation";

const VALID_IDS: string[] = [];

const PAGE_META: Record<string, { title: string; description: string }> = {
  "cloud-data-centers-and-cyber-security": {
    title: "Cloud, Data Centers & Cyber Security",
    description:
      "Converge ICT Solutions delivers integrated cloud platforms, carrier-neutral colocation data centers, and cybersecurity services to power your digital transformation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = PAGE_META[id];
  if (!meta) return {};
  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/${id}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!VALID_IDS.includes(id)) {
    notFound();
  }

  return (
    <MainLayout>
      <DetailSolutionPage id={id} />
    </MainLayout>
  );
}
