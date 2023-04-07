import { useState } from "react";
import * as NewsApi from "../../utilities/news-api";

export default function NewsForm({ user }) {
  const [editingPost, setEditingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    headline: "",
    post: "",
  });

  async function handleSavePost(e) {
    e.preventDefault();
    if (editingPost) {
      const updateNews = await NewsApi.updateNews(newPost._id, newPost);
      setEditingPost(false);
      setNewPost(updateNews);
    } else {
      const createdNews = await NewsApi.createNews(newPost);
      setNewPost(createdNews);
    }
    setNewPost({
      headline: "",
      post: "",
    });
  }

  async function handleInputChange(e) {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      {user?.isAdmin ? (
        <div className="card m-3 p-3">
          <div className="card-body">
            <form onSubmit={handleSavePost}>
              <input
                onChange={handleInputChange}
                className="form-control"
                type="text"
                placeholder="Headline"
                name="headline"
              />
              <br />
              <textarea
                onChange={handleInputChange}
                name="post"
                cols="30"
                rows="10"
                type="text"
                className="form-control"
                placeholder="Your post here..."
              ></textarea>
              <button
                className="btn btn-primary mt-4"
                type="submit"
                style={{ width: "100%" }}
              >
                POST
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
