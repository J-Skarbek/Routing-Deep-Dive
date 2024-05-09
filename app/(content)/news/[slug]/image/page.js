import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {

  const newsItemSlug = params.slug;
  //NOTE: nested routes also have access to parent route params
  const newsItem =  await getNewsItem(newsItemSlug);

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