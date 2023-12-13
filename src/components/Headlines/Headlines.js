import { useEffect, useState } from "react";
import * as NewsFeedApi from "../../utilities/news-api";

export default function Headlines() {
  const [newsHeadline, setNewsHeadline] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const newsHeadline = await NewsFeedApi.getAllArticles();
      const sortedHeadlines = newsHeadline.sort((a, b) => {
        if (a.isSticky && !b.isSticky) return -1;
        if (!a.isSticky && b.isSticky) return 1;

        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setNewsHeadline(newsHeadline);
    }
  }, []);

  return (
    <>
      <main>
        <section>
          <h2>News Headlines</h2>
          <section>
            <table>
              {newsHeadline.map((n, idx) => (
                <tr>{n.headline}</tr>
              ))}
            </table>
          </section>
        </section>
      </main>
    </>
  );
}
