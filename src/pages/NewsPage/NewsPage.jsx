import { useState, useEffect } from "react";
import "./NewsPage.css";
import NewsForm from "../../components/NewsForm/NewsForm";
import * as NewsApi from "../../utilities/news-api";

export default function NewsPage({ user }) {
  const [newsArticle, setNewsArticle] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const newsArticle = await NewsApi.getAllArticles();
      setNewsArticle(newsArticle);
    }
    getArticles();
  }, []);

  console.log(newsArticle);
  return (
    <>
      <div className="card m-3 p-3">
        <div className="card-header">
          <h1 className="m-3 p-3">News Around The League</h1>
        </div>
        <div className="card-body">
          {newsArticle
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((n, idx) => (
              <div key={idx}>
                <h3>{n.headline}</h3>
                <p className="post-content">{n.post}</p>
                <hr />
              </div>
            ))}
        </div>
      </div>
      {user?.isAdmin ? <NewsForm user={user} /> : null}
    </>
  );
}
