import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modalBackdrop";
import { getNewsItem } from "@/lib/news";

//NOTE: this intercepted path will be navigated to by people who are trying to visit the path
//While viewing another existing component in the app:
//https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export default async function InterceptedImagePage({ params }) {

  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      {/* <h1>INTERCEPTED!</h1> */}
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} width='350' />
        </div>
      </dialog>
    </>
  )
}