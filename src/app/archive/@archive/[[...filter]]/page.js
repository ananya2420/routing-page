// src/app/(auth)/training/page.js

import { getAvailableNewsYears } from "@/app/news/lib/news";  // Import necessary helper functions
import NewsList from "../../../../../components/news-list";  // Import your NewsList component
import Link from "next/link";
import { DUMMY_NEWS } from "../../../../../dummy-news";

// Mapping the years to the specific items to display
const yearToItemsMap = {
  "2022": ["n2", "n3"],
  "2023": ["n3", "n4"],
  "2024": ["n4", "n5"],
  "2025": ["n5", "n1"]
};

export default function FilteredNewsPage({ params }) {
  const filter = params.filter || [];
  const selectedYear = filter[0];  // The year part of the filter

  // Find the correct items based on the selected year
  const selectedItemsIds = yearToItemsMap[selectedYear] || [];
  
  // Filter the DUMMY_NEWS array to only include the selected items
  const news = DUMMY_NEWS.filter(newsItem => selectedItemsIds.includes(newsItem.id));

  // Show the filtered news items
  const newsContent =
    news.length > 0 ? (
      <NewsList news={news} />
    ) : (
      <p className="text-gray-600 p-4">No news found for the selected year.</p>
    );

  return (
    <>
      <header id="archive-header" className="p-4">
        <nav>
          <ul className="flex gap-4 flex-wrap">
            {/* Links for years (2022, 2023, 2024, 2025) */}
            {["2022", "2023", "2024", "2025"].map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`} className="text-blue-600 hover:underline">
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
