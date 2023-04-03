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

  const playerStats = standings.map((m, idx) => {
    const stats = m.stats;
    const totalWins = stats.reduce((acc, player) => acc + player.wins, 0);

    return totalWins;
  });

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
          <tbody className="team-standings-table">
            {standings.map((s) => (
              <tr key={s._id}>
                <td>{s.place}</td>
                <td>
                  <Link className="btn btn-info" to={`/players/${s._id}`}>
                    {s.name}
                  </Link>
                </td>
                <td>{s.points}</td>
                <td>{playerStats}</td>
                <td>{s.totalWins}</td>
                <td>{s.legWonPct}</td>
                <td>{s.zeroOneAvg}</td>
                <td>{s.cricketAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/yxtRh-exLBymBNQnrCq8hQ/348s.jpg"
          alt="xxx"
        />
      </div>
    </main>
  );
}
