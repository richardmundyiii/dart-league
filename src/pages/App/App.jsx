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

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} />
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/teamstandings" element={<TeamStandingsPage />} />
          <Route path="/teams/:teamId" element={<TeamDetailPage />} />
          <Route
            path="/players/:playerId"
            element={<PlayerDetailPage user={user} />}
          />
          <Route path="/playerstandings" element={<PlayerStandingsPage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
