import { useState, useEffect } from "react";
import "./NewsPage.css";
import NewsForm from "../../components/NewsForm/NewsForm";
import * as NewsFeedApi from "../../utilities/news-api";

export default function NewsPage({ user }) {
  const [newsArticle, setNewsArticle] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newPost, setNewPost] = useState({
    headline: "",
    post: "",
  });

  useEffect(() => {
    async function getArticles() {
      const newsArticle = await NewsFeedApi.getAllArticles();
      setNewsArticle(newsArticle);
    }
    getArticles();
  }, []);

  async function handleSavePost(e) {
    e.preventDefault();
    if (isEditing) {
      const updatedPost = await NewsFeedApi.updatePost(newPost._id, newPost);
      setIsEditing(false);
      setNewPost(updatedPost);
    } else {
      const savedArticle = await NewsFeedApi.createNews(newPost);
      setNewPost(savedArticle);
    }
    setNewPost({
      headline: "",
      post: "",
    });
  }

  function handleInputChange(e) {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  }

  async function handleDeleteClick(id) {
    const updatedArticle = await NewsFeedApi.deletePost(id);
    setNewPost(updatedArticle);
  }

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
                {user?.isAdmin ? (
                  <section>
                    <button
                      className="btn btn-info"
                      style={{ width: "40vmin" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(n._id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                  </section>
                ) : null}
                <hr />
              </div>
            ))}
        </div>
      </div>
      {user?.isAdmin ? (
        <div className="card m-3 p-3">
          <form onSubmit={handleSavePost}>
            <input
              name="headline"
              type="text"
              placeholder="Headline"
              className="form-control"
              onChange={handleInputChange}
              value={newPost.headline}
            />
            <br />
            <textarea
              name="post"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Your Post Goes Here..."
              onChange={handleInputChange}
              value={newPost.post}
              spellCheck="true"
            ></textarea>
            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              type="submit"
            >
              POST
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
