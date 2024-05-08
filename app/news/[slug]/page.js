import { notFound } from "next/navigation";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    //This provided function will cause the not-found.js page with the closest
    //proximity to the component in the file structure
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`${newsItem.slug}/image`} >
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
        <p>{newsItem.content}</p>
    </article>
  )
}

