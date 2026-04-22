import type { Metadata } from "next";
import { fetchWorkById, fetchWorksData } from "@/components/works/api/fetchworksdata";
import { notFound } from "next/navigation";
import WorkDetail from "@/components/works/workdetail";
import { buildMetadata } from "@/lib/metadata";

function excerpt(text: string, maxLength = 120) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength)}...`;
}

export async function generateStaticParams() {
  const works = await fetchWorksData();
  return works.map((work) => ({
    id: work.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = await fetchWorkById(id);

  if (!work) {
    return buildMetadata({
      title: "作品が見つかりません | Works | Iris-Fla",
      description: "お探しの作品は見つかりませんでした。",
      path: `/works/${id}`,
    });
  }

  return buildMetadata({
    title: `${work.title} | Works | Iris-Fla`,
    description: excerpt(work.description || "作品詳細ページです。"),
    path: `/works/${id}`,
    image: work.images?.[0]?.urls.detail || work.thumbnail,
  });
}

export default async function WorkDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const work = await fetchWorkById(id);

  if (!work) {
    notFound();
  }

  return <WorkDetail work={work} />;
}
