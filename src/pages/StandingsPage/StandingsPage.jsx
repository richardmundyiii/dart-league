import { useEffect, useState } from "react";
import * as standingsApi from "../../utilities/standings-api";
import "./StandingsPage.css";

export default function Standing() {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getStandings() {
      const standings = await standingsApi.getLeagueStandings(division);
      setStandings(standings);
    }
    getStandings();
  }, []);

  return (
    <main>
      <h1>Standings {division} League</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
    </main>
  );
}
