import Link from "next/link";
import NewsList from "@/components/newsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import { Suspense } from "react";

//This and the FilteredNews async functions could in theory be put into their own files
//But, since they are helper functions directly replated to the default export function
//This tutorial is leaving them here for simplicitiy
async function FilterHeader({ year, month }) {
  const availableYears =  await getAvailableNewsYears();
  let links = availableYears;

  //NOTE: the '+selectedYear/+selectedMonth uses the unary + operator, which
  //can be used to convert a variable to a number Type (https://www.w3schools.com/js/js_type_conversion.asp)
  if ((year && !availableYears.includes(year)) || 
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid Filter.')
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
    <nav>
      <ul>
        {links.map(link => {
          const href = year ? `/archive/${year}/${link}` : `archive/${link}`;
          return (
            <li key={link}>
              <Link href={href}>{link}</Link>
            </li>
          );  
        })}
      </ul>
    </nav>
  </header>
  )
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading month/year filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading News Via Suspense Component...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  )
}