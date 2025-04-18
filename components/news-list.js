import Image from "next/image";
import Link from "next/link";

export default function NewsList({news}){
  //console.log(NewsList)
    return <ul className="news-list bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col gap-4">
    {news.map((newsItem) => (
      <li key={newsItem.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
        <Link href={`/news/${newsItem.slug}`} className="flex flex-col items-center gap-2">
          {/* ✅ FIXED: Corrected `image` field name */}
          <Image 
            src={newsItem.image} 
            alt={newsItem.title} 
            width={300} 
            height={200} 
            className="rounded-md object-cover"
          />
          <span className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">
            {newsItem.title}
          </span>
        </Link>
      </li>
    ))}
  </ul>

}