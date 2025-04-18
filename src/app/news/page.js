import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "../../../dummy-news";
import NewsList from "../../../components/news-list";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">News Page</h1>

     <NewsList news={DUMMY_NEWS}/>
    </div>
  );
}
