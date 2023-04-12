import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as playerStandingsApi from "../../utilities/player-standings-api";
import "./PlayerStandingsPage.css";

export default function PlayerStandingsPage({ user, setUser }) {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("Win %");

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
          acc.cricketHighlights += match.cricketHighlights;
          acc.zeroOneHighlights += match.zeroOneHighlights;
          acc.zeroOnePoints += match.zeroOnePoints;
          return acc;
        },
        {
          wins: 0,
          losses: 0,
          cricketHighlights: 0,
          zeroOneHighlights: 0,
          zeroOnePoints: 0,
        }
      );
      playerStats.winPercentage =
        (playerStats.wins / (playerStats.wins + playerStats.losses)) * 100;

      return {
        _id: currentPlayer._id,
        name: currentPlayer.name,
        ...playerStats,
      };
    })
    .filter((player) => player.wins !== 0 || player.losses !== 0)
    .sort((a, b) => {
      if (sortOrder === "desc") {
        [a, b] = [b, a];
      }
      switch (sortBy) {
        case "Place":
          return proData.indexOf(a) - proData.indexOf(b);
        case "Player":
          return a.name.localeCompare(b.name);
        case "Wins":
          return b.wins - a.wins;
        case "Losses":
          return a.losses - b.losses;
        case "Win %":
          return b.winPercentage - a.winPercentage;
        case "Cr. Highlights":
          return b.cricketHighlights - a.cricketHighlights;
        case "'01 Highlights":
          return b.zeroOneHighlights - a.zeroOneHighlights;
        case "'01 Points":
          return b.zeroOnePoints - a.zeroOnePoints;
        default:
          return 0;
      }
    });

  function handleSort(name) {
    if (sortBy === name) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSortBy(name);
    }
  }

  return (
    <main className="player-standings-page m-4 p-4">
      <h1>Player {division} Standings</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      <div className="card p-5 mt-3">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Place</th>
                <th>Player</th>
                <th onClick={() => handleSort("Wins")}>Wins</th>
                <th onClick={() => handleSort("Losses")}>Losses</th>
                <th onClick={() => handleSort("Win %")}>Win %</th>
                <th onClick={() => handleSort("Cr. Highlights")}>
                  Cr. Highlights
                </th>
                <th onClick={() => handleSort("'01 Highlights")}>
                  01 Highlights
                </th>
                <th onClick={() => handleSort("'01 Points")}>01 Points</th>
              </tr>
            </thead>
            <tbody>
              {proData.map((player, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link
                      to={`/players/${player._id}`}
                      className="btn btn-success"
                      style={{ width: "100%" }}
                    >
                      {player.name}
                    </Link>
                  </td>
                  <td>{player.wins}</td>
                  <td>{player.losses}</td>
                  <td>{player.winPercentage.toFixed(2)}%</td>
                  <td>{player.cricketHighlights}</td>
                  <td>{player.zeroOneHighlights}</td>
                  <td>{player.zeroOnePoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
