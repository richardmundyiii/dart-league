import { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  convertToRaw,
  ContentState,
} from "draft-js";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import "./NewsPage.css";
import * as NewsFeedApi from "../../utilities/news-api";

export default function NewsPage({ user }) {
  const [newsArticle, setNewsArticle] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newPost, setNewPost] = useState({
    headline: "",
    post: "",
    editorState: EditorState.createEmpty(),
  });
  const [headline, setHeadline] = useState("");
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    async function getArticles() {
      const newsArticle = await NewsFeedApi.getAllArticles();
      setNewsArticle(newsArticle);
    }
    getArticles();
  }, []);

  async function handleSavePost(e) {
    e.preventDefault();
    const contentState = newPost.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const postToSave = {
      _id: articleId,
      headline: headline,
      post: JSON.stringify(rawContent),
    };

    if (isEditing) {
      const updatedPost = await NewsFeedApi.updatePost(
        postToSave._id,
        postToSave
      );
      setIsEditing(false);
      setNewsArticle(
        newsArticle.map((article) =>
          article._id === updatedPost._id ? updatedPost : article
        )
      );
    } else {
      const savedArticle = await NewsFeedApi.createNews(postToSave);
      setNewsArticle([...newsArticle, savedArticle]);
    }
    setNewPost({
      _id: null,
      headline: "",
      post: "",
      editorState: EditorState.createEmpty(),
    });
  }

  function handleEditClick(article) {
    setIsEditing(true);
    setArticleId(article._id);
    setHeadline(article.headline);
    setNewPost({
      ...newPost,
      editorState: EditorState.createWithContent(
        jsonStringToContentState(article.post)
      ),
    });
  }

  function handleEditorChange(editorState) {
    const contentState = editorState.getCurrentContent();
    const postText = JSON.stringify(convertToRaw(contentState));
    setNewPost({
      ...newPost,
      editorState: editorState,
      post: postText,
    });
  }

  function handleInputChange(e) {
    if (e.target.name === "headline") {
      setHeadline(e.target.value);
    } else {
      setNewPost({
        ...newPost,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleDeleteClick(id) {
    await NewsFeedApi.deletePost(id);
    const updatedArticles = newsArticle.filter((article) => article._id !== id);
    setNewsArticle(updatedArticles);
  }

  function jsonStringToContentState(jsonString) {
    if (isValidJSON(jsonString)) {
      const rawContent = JSON.parse(jsonString);
      return convertFromRaw(rawContent);
    } else {
      return ContentState.createFromText(jsonString);
    }
  }

  function isValidJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
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
                <div className="post-content">
                  <Editor
                    editorState={EditorState.createWithContent(
                      jsonStringToContentState(n.post)
                    )}
                    readOnly={true}
                  />
                </div>
                {user?.isAdmin ? (
                  <section>
                    <button
                      className="btn btn-info"
                      style={{ width: "40vmin" }}
                      onClick={() => handleEditClick(n)}
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
              value={headline}
            />
            <br />
            <RichTextEditor
              onChange={handleEditorChange}
              editorState={newPost.editorState}
              readOnly={false}
            />
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
