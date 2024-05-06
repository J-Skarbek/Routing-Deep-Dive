import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>This is the news page.</h1>
      <div>
        <ul className="news-list">
          { DUMMY_NEWS.map(newsItem => (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                <span>{newsItem.title}</span>
              </Link>
            </li>
          )
          )}
          <li><Link href='/news/article1' >Article 1</Link></li>
          <li><Link href='/news/article2' >Article 2 </Link></li>
          <li><Link href='/news/article3' >Article 3 </Link></li>
        </ul>
      </div>
    </div>
  );
}