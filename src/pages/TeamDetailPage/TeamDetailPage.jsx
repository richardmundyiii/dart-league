import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as teamDetailApi from "../../utilities/team-detail-api";
import "./TeamDetailPage.css";

export default function TeamDetailPage() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  const { teamId } = useParams();

  useEffect(() => {
    async function getTeamDetail() {
      const players = await teamDetailApi.getTeamDetail(teamId);
      setPlayers(players);
    }
    getTeamDetail();
  }, [teamId]);

  if (!teamId) return null;

  return (
    <>
      <main>
        <div className="card m-4 p-3">
          <div className="card-header">
            <h1>{teamId}</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>4B</th>
                  <th>5B</th>
                  <th>6B</th>
                  <th>7M</th>
                  <th>8M</th>
                  <th>9M</th>
                  <th>95+</th>
                  <th>Hightlight Points</th>
                </tr>
              </thead>
              <tbody className="team-detail-table">
                {players.map((p, idx) => (
                  <tr key={idx}>
                    <td>
                      <Link
                        className="btn btn-warning"
                        to={`/players/${p._id}`}
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td>{p.stats.wins}</td>
                    <td>{p.stats.losses}</td>
                    <td>{p.stats.fourBull}</td>
                    <td>{p.stats.fiveBull}</td>
                    <td>{p.stats.sixBull}</td>
                    <td>{p.stats.sevenMark}</td>
                    <td>{p.stats.eightMark}</td>
                    <td>{p.stats.nineMark}</td>
                    <td>{p.stats.highlights}</td>
                    <td>{p.stats.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
