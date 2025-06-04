import { fetchWorksData } from "@/components/works/api/fetchworksdata";
import WorksGrid from "@/components/works/worksgrid";

export default async function WorksPage() {
    const data = await fetchWorksData();

    return (
        <div className="px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Works</h1>
            <WorksGrid data={data} />
        </div>
    );
}