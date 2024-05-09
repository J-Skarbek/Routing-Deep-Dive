import Link from "next/link";
import NewsList from "@/components/newsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  //NOTE: the '+selectedYear/+selectedMonth uses the unary + operator, which
  //can be used to convert a variable to a number Type (https://www.w3schools.com/js/js_type_conversion.asp)
  if ((selectedYear && !getAvailableNewsYears().includes(+selectedYear)) || 
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid Filter.')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );  
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}