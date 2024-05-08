import Link from "next/link";
import NewsList from "@/components/newsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>)}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}