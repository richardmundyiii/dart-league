import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as standingsApi from "../../utilities/team-standings-api";
import * as PlayerApi from "../../utilities/player-api";
import "./TeamStandingsPage.css";

export default function Standing({ user, setUser }) {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getTeamStandings() {
      const standings = await standingsApi.getTeamStandings(division);
      setStandings(standings);
    }
    getTeamStandings();
  }, [division]);

  standings.sort((a, b) => a.place - b.place);

  function handleCreatePlayerClick() {}

  async function handleInputChange(e) {
    e.preventDefault();
    const player = await PlayerApi.createPlayer();
  }

  return (
    <main className="team-standings-page">
      <h1>Standings {division} League</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      <div className="card p-5 m-3">
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
          <tbody className="team-standings-table">
            {standings.map((s) => (
              <tr key={s._id}>
                <td>{s.place}</td>
                <td>
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
          </tbody>
        </table>
      </div>
      {user?.isAdmin ? (
        <div className="card p-5 m-3">
          <div className="card-header">
            <h2 className="'m-2">Create Player</h2>
          </div>
          <form onSubmit={handleCreatePlayerClick}>
            <input
              type="text"
              placeholder="Player Name (last, first)"
              className="form-control"
            />
            <select className="form-control">
              {standings.map((team) => (
                <option name={team.teamName} value={team._id} key={team._id}>
                  {team.teamName}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={division}
              className="form-control"
              disabled
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Player Email"
            />
            <button
              type="submit"
              className="btn btn-secondary"
              style={{ width: "100%" }}
            >
              Add Player
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
