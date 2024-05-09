import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>This is the news page.</h1>
      <div>
        <NewsList news={DUMMY_NEWS} />
      </div>
    </div>
  );
}