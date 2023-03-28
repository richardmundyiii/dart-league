import { useEffect, useState } from "react";
import * as standingsApi from "../../utilities/team-standings-api";
import "./TeamStandingsPage.css";

export default function Standing() {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getTeamStandings() {
      const standings = await standingsApi.getTeamStandings(division);
      setStandings(standings);
    }
    getTeamStandings();
  }, [division]);

  return (
    <main className="team-standings-page">
      <h1>Standings {division} League</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      {standings.map((s) => (
        <p key={s._id}>
          {s.place} - {s.teamName}
        </p>
      ))}
    </main>
  );
}
