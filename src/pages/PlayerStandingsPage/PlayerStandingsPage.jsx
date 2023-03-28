import { useEffect, useState } from "react";
import * as playerStandingsApi from "../../utilities/player-standings-api";
import "./PlayerStandingsPage.css";

export default function PlayerStandingsPage() {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getPlayerStandings() {
      const standings = await playerStandingsApi.getPlayerStandings(division);
      setStandings(standings);
    }
    getPlayerStandings();
  }, []);

  return (
    <main className="player-standings-page">
      <h1>Player {division} Standings</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
    </main>
  );
}
