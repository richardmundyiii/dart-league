import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Homepage from "../Homepage/Homepage";
import AuthPage from "../AuthPage/AuthPage";
import StandingsA from "../StandingsA/StandingsA";
import StandingsB from "../StandingsB/StandingsB";
import PlayersA from "../PlayersA/PlayersA";
import PlayersB from "../PlayersB/PlayersB";

function App() {
  return (
    <main className="App">
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/api/standingsA" element={<StandingsA />} />
          <Route path="/standingsB" element={<StandingsB />} />
          <Route path="/playersA" element={<PlayersA />} />
          <Route path="/playersB" element={<PlayersB />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
