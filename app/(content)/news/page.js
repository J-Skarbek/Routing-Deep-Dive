'use client';

import { useEffect, useState } from "react";
// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [news, setNews] =  useState();

  useEffect(() => {
    //NOTE: apparently it is best practice to not make the useEffect hook itself
    //async, but rather define a function within it and make it async instead
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
        setIsLoading(false);
      }

      const news = await response.json();

      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <p>{error}</p>
    )
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />
  }

  return (
    <div id="news">
      <h1>This is the news page.</h1>
      <div>
        {newsContent}
      </div>
    </div>
  );
}