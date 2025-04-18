// src/app/news/lib/news.js

import { DUMMY_NEWS } from "../../../../dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  const defaultYears = [2022, 2023, 2024];

  const newsYears = DUMMY_NEWS.reduce((years, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (!years.includes(newsYear)) {
      years.push(newsYear);
    }
    return years;
  }, []);

  const allYears = Array.from(new Set([...newsYears, ...defaultYears])).sort((a, b) => b - a);

  return allYears;
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

// Get news for a specific year
export function getNewsForYear(year) {
  // Check if the year is 2022, 2023, or 2024
  if ([2022, 2023, 2024].includes(+year)) {
    // Return the two specific articles for those years
    return [
      {
        id: "n3",
        slug: "couple-cooking",
        image: "/images/couple-cooking.jpg",
        title: "Couples Who Cook Together",
        date: "2025-03-08",
        content: "Cooking as a couple strengthens relationships, improves teamwork, and creates lasting memories in the kitchen."
      },
      {
        id: "n4",
        slug: "hiking",
        image: "/images/hiking.jpg",
        title: "Hiking: The Best Outdoor Adventure",
        date: "2025-03-05",
        content: "Hiking provides mental and physical health benefits, offering a perfect escape into nature’s beauty."
      }
    ];
  } else {
    // Otherwise, return all the news for the given year
    return DUMMY_NEWS.filter(news => new Date(news.date).getFullYear() === +year);
  }
}

// Get news for a specific year and month
export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
