import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as playerStandingsApi from "../../utilities/player-standings-api";
import "./PlayerStandingsPage.css";

export default function PlayerStandingsPage({ user, setUser }) {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getPlayerStandings() {
      const standings = await playerStandingsApi.getPlayerStandings(division);
      setStandings(standings);
    }
    getPlayerStandings();
  }, [division]);

  const proData = standings
    .map((currentPlayer) => {
      const playerStats = currentPlayer.stats.reduce(
        (acc, match) => {
          acc.wins += match.wins;
          acc.losses += match.losses;
          acc.points += match.points;
          return acc;
        },
        { wins: 0, losses: 0, points: 0 }
      );
      return {
        name: currentPlayer.name,
        ...playerStats,
      };
    })
    .sort((a, b) => {
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      } else if (a.losses !== b.losses) {
        return a.losses - b.losses;
      } else {
        return b.points - a.points;
      }
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
            </tr>
          </thead>
          <tbody>
            {proData.map((player, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{player.name}</td>
                <td>{player.wins}</td>
                <td>{player.losses}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
