import "./NewsPage.css";
import NewsForm from "../../components/NewsForm/NewsForm";

export default function NewsPage({ user }) {
  return (
    <>
      <div className="card m-3 p-3">
        <div className="card-header">
          <h1 className="m-3 p-3">News Around The League</h1>
        </div>
        <div className="card-body"></div>
      </div>
      <NewsForm user={user} />
    </>
  );
}
