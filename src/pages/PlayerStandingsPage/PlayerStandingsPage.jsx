import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  }, [division]);

  return (
    <main className="player-standings-page m-4 p-4">
      <h1>Player {division} Standings</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      <div className="card p-5 mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Place</th>
              <th>Player</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Points</th>
              <th>01 Avg</th>
              <th>Cr Avg</th>
            </tr>
          </thead>
          {/* <tbody className="team-standings-table">
            {playerStandings.map((s) => (
              <tr key={s._id}>
                <td>{s.place}</td>
                <td>
                  {s.name}
                  <Link className="btn btn-info" to={`/teams/${s.teamName}`}>
                    {s.teamName}
                  </Link>
                </td>
                <td>{s.points}</td>
                <td>{s.matchesWon}</td>
                <td>{s.matchesPlayed - s.matchesWon}</td>
                <td>{s.legWonPct}</td>
                <td>{s.zeroOneAvg}</td>
                <td>{s.cricketAvg}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </main>
  );
}
