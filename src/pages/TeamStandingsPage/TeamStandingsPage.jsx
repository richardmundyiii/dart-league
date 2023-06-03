import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as standingsApi from "../../utilities/team-standings-api";
import "./TeamStandingsPage.css";

export default function Standing({ user, setUser }) {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getTeamStandings() {
      let standings = await standingsApi.getTeamStandings(division);

      standings = standings.map((team) => {
        if (team.teamName === "Harbor Ratz") {
          return {
            ...team,
            points: team.points + 17,
            matchesWon: team.matchesWon + 1,
          };
        } else {
          return team;
        }
      });

      standings = standings.map((team) => {
        if (team.teamName === "Packin' Bulls") {
          return {
            ...team,
            matchesPlayed: team.matchesPlayed + 1,
          };
        } else {
          return team;
        }
      });

      setStandings(standings);
    }
    getTeamStandings();
  }, [division]);

  standings.sort((a, b) => a.place - b.place);

  return (
    <main className="team-standings-page">
      <h1>Standings {division} League</h1>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="A">A League</option>
        <option value="B">B League</option>
      </select>
      <div className="card p-5 m-3">
        <div className="table-responsive">
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
      </div>
    </main>
  );
}
