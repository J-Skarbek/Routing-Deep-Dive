import NewsList from "@/components/newsList";
import { getAllNews } from "@/lib/news";

//By using Server Side Components, you can make the whole component async in nature
//as seen below. Then in the function, you can directly await the response and handle
//any errors -- additional Note: fetch is available and extended by nextJS to include
//some special functionality around its use and how data it fetches gets cached
export default async function NewsPage() {
  // const response = await fetch('http://localhost:8080/news');

  // if (!response.ok) {
  //   throw new Error('Failed to fetch news.');
  // }

  // const news = await response.json();

  //ABOVE IS ALL CALLING DATA VIA A SEPERATE BACKEND/DB LIKE SET UP EARLIER, BELOW
  //IS DOING THE SAME BUT PLACING THE DB FILE DIRECTLY IN THE NEXT APP

  const news = getAllNews();
   
  return (
    <div id="news">
      <h1>This is the news page.</h1>
      <div>
        <NewsList news={news} />
      </div>
    </div>
  );
}