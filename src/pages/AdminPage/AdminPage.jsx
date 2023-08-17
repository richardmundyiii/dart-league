import "./AdminPage.css";
import Venue from "../../components/Venue/Venue";
import Team from "../../components/Team/Team";

export default function AdminPage() {
  return (
    <>
      <h1>Admin Page</h1>
      <Venue />
      <section>
        <h3>Add / Edit Team</h3>
      </section>
      <section>
        <Team />
      </section>
      <section>
        <h3>New Season</h3>
        <button id="newSeasonBtn">Warning / Confirm </button>
      </section>
    </>
  );
}
