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

  useEffect(function () {
    console.log("useEffect runs after every render");
  });

  useEffect(function () {
    console.log("useEffect runs after something else");
  }, []);

  return (
    <main className="team-standings-page">
      <h1>Standings {division} League</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      <div className="card p-5 mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Place</th>
              <th>Team</th>
              <th>Points</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>LW %</th>
              <th>01 Avg</th>
              <th>Cr Avg</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((s) => (
              <tr key={s._id}>
                <td>{s.place}</td>
                <td>
                  <a href={`/teams/${s.teamName}`}>{s.teamName}</a>
                </td>
                <td>{s.points}</td>
                <td>{s.matchesWon}</td>
                <td>{s.matchesPlayed - s.matchesWon}</td>
                <td>{s.legWonPct}</td>
                <td>{s.zeroOneAvg}</td>
                <td>{s.cricketAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
