import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Homepage from "../Homepage/Homepage";
import AuthPage from "../AuthPage/AuthPage";
import TeamStandingsPage from "../TeamStandingsPage/TeamStandingsPage";
import PlayerStandingsPage from "../PlayerStandingsPage/PlayerStandingsPage";
import TeamDetailPage from "../TeamDetailPage/TeamDetailPage";
import PlayerDetailPage from "../PlayerDetailPage/PlayerDetailPage";
import NewsPage from "../NewsPage/NewsPage";
import DocumentsPage from "../DocumentsPage/DocumentsPage";
import SponsorsPage from "../SponsorsPage/SponsorsPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <>
        <Routes>
          <Route path="/" element={<Homepage setUser={setUser} />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route
            path="/teamstandings"
            element={<TeamStandingsPage user={user} setUser={setUser} />}
          />
          <Route
            path="/teams/:teamId"
            element={<TeamDetailPage setUser={setUser} />}
          />
          <Route
            path="/players/:playerId"
            element={<PlayerDetailPage user={user} setUser={setUser} />}
          />
          <Route
            path="/playerstandings"
            element={<PlayerStandingsPage setUser={setUser} />}
          />
          <Route
            path="/news"
            element={<NewsPage user={user} setUser={setUser} />}
          />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
