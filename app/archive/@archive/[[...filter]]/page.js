import Link from "next/link";
import NewsList from "@/components/newsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
          </li>)}
        </ul>
      </nav>
    </header>
  )
}