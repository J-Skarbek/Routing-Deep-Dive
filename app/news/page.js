import Link from "next/link";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>This is the news page.</h1>
      <div>
        <ul>
          <li><Link href='/news/article1' >Article 1</Link></li>
          <li><Link href='/news/article2' >Article 2 </Link></li>
          <li><Link href='/news/article3' >Article 3 </Link></li>
        </ul>
      </div>
    </div>
  );
}