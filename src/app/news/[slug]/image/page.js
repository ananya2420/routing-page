import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../dummy-news";

export default function ImagePage({ params }) {  // ✅ Accept params as a prop
    const newsItemSlug = params.slug;  // ✅ Use params from props

    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
           
           <img src={newsItem.image} alt={newsItem.title} />

        </div>
    );
}
