import { client } from "@/lib/microcms";
export async function fetchWorksData() {
    const data = await client.get({
        endpoint: "works",
        queries: {
            fields: "id,title,eyecatch,category",
            limit: 10,
            orders: "-publishedAt"
        },
    });
    return data.contents;
}