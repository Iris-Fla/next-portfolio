import { fetchWorkById, fetchWorksData } from "@/components/works/api/fetchworksdata";
import { notFound } from "next/navigation";
import WorkDetail from "@/components/works/workdetail";

export async function generateStaticParams() {
  const works = await fetchWorksData();
  return works.map((work) => ({
    id: work.id.toString(),
  }));
}

export default async function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = await fetchWorkById(params.id);

  if (!work) {
    notFound();
  }

  return <WorkDetail work={work} />;
}
