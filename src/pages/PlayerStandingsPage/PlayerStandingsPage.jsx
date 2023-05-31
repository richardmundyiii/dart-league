import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as playerStandingsApi from "../../utilities/player-standings-api";
import "./PlayerStandingsPage.css";

export default function PlayerStandingsPage({ user, setUser }) {
  const [division, setDivision] = useState("A");
  const [qualifiedPlayers, setQualifiedPlayers] = useState([]);
  const [unqualifiedPlayers, setUnqualifiedPlayers] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    async function getPlayerStandings() {
      const standings = await playerStandingsApi.getPlayerStandings(division);
      const qualified = [];
      const unqualified = [];

      standings.forEach((currentPlayer) => {
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

        const player = {
          _id: currentPlayer._id,
          name: currentPlayer.name,
          ...playerStats,
        };

        if (playerStats.wins === 0 && playerStats.losses === 0) {
          return;
        }

        if (
          (division === "A" && playerStats.wins + playerStats.losses < 13) ||
          (division === "B" && playerStats.wins + playerStats.losses < 15)
        ) {
          unqualified.push(player);
        } else {
          qualified.push(player);
        }
      });

      function sortPlayers(a, b) {
        if (a[sortField] < b[sortField]) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      }

      if (sortField) {
        qualified.sort(sortPlayers);
        unqualified.sort(sortPlayers);
      }

      setUnqualifiedPlayers(unqualified);
      setQualifiedPlayers(qualified);
    }
    getPlayerStandings();
  }, [division, sortField, sortDirection]);

  function handleSort(field) {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
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
                <th onClick={() => handleSort("name")}>Player</th>
                <th onClick={() => handleSort("wins")}>Wins</th>
                <th onClick={() => handleSort("losses")}>Losses</th>
                <th onClick={() => handleSort("winPercentage")}>Win %</th>
                <th onClick={() => handleSort("cricketHighlights")}>
                  Cr. Highlights
                </th>
                <th onClick={() => handleSort("zeroOneHighlights")}>
                  01 Highlights
                </th>
                <th onClick={() => handleSort("zeroOnePoints")}>01 Points</th>
              </tr>
            </thead>
            <tbody>
              {qualifiedPlayers.map((player, idx) => (
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
        <div className="table-responsive mt-4">
          <h3>Unqualified Players</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={() => handleSort("name")}>Player</th>
                <th onClick={() => handleSort("wins")}>Wins</th>
                <th onClick={() => handleSort("losses")}>Losses</th>
                <th onClick={() => handleSort("winPercentage")}>Win %</th>
                <th onClick={() => handleSort("cricketHighlights")}>
                  Cr. Highlights
                </th>
                <th onClick={() => handleSort("zeroOneHighlights")}>
                  01 Highlights
                </th>
                <th onClick={() => handleSort("zeroOnePoints")}>01 Points</th>
              </tr>
            </thead>
            <tbody>
              {unqualifiedPlayers.map((player, idx) => (
                <tr key={idx}>
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
