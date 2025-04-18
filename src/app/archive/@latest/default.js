import { getLatestNews } from "@/app/news/lib/news"
import NewsList from "../../../../components/news-list";

export default function LatestNewsPage(){
    const latestNews = getLatestNews();
    return <>
    <h2>Latest News page</h2>
    <NewsList news={latestNews} />

    </>
}