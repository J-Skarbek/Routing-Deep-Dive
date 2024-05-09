import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {

  const newsItemSlug = params.slug;
  //NOTE: nested routes also have access to parent route params

  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    //This provided function will cause the not-found.js page with the closest
    //proximity to the component in the file structure
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  )
}