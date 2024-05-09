//This file MUST be called default.js. This file allows you to define a fallback
//view/route when working with parallel routes. Without this, you can see errors
//because in this example, there exists an '/archive/year' but not a 'latest/year
//path. This can also be used to replace the page.js if the content in the page.js
//file is the same as the default.js file contents

import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}