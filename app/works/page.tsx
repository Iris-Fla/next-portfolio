import { fetchWorksData } from "@/components/works/api/fetchworksdata";
import WorksGrid from "@/components/works/worksgrid";

export default async function WorksPage() {
    const data = await fetchWorksData();

    return (
        <div className="px-4 py-8">
            <WorksGrid data={data} />
        </div>
    );
}