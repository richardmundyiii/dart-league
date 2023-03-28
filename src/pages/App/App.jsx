import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Homepage from "../Homepage/Homepage";
import AuthPage from "../AuthPage/AuthPage";
import TeamStandingsPage from "../TeamStandingsPage/TeamStandingsPage";
import PlayerStandingsPage from "../PlayerStandingsPage/PlayerStandingsPage";

function App() {
  return (
    <main className="App">
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/teamstandings" element={<TeamStandingsPage />} />
          <Route path="/playerstandings" element={<PlayerStandingsPage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
