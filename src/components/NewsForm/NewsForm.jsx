import { useState } from "react";
import * as NewsFeedApi from "../../utilities/news-api";

export default function NewsForm({ user }) {
  const [newPost, setNewPost] = useState({
    headline: "",
    post: "",
  });

  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <>
      <main>
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
      </main>
    </>
  );
}
