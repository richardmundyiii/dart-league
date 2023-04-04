import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as teamDetailApi from "../../utilities/team-detail-api";
import "./TeamDetailPage.css";

export default function TeamDetailPage({ user, setUser }) {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  const { teamId } = useParams();

  useEffect(() => {
    async function getTeamDetail() {
      const { team, players } = await teamDetailApi.getTeamDetail(teamId);
      setTeam(team);
      setPlayers(players);
    }
    getTeamDetail();
  }, [teamId]);

  if (!teamId || !team) return null;

  return (
    <>
      <main>
        <div className="card m-4 p-3">
          <div className="card-header">
            <h1>{team.name}</h1>
          </div>
          <div className="card-body">
            <div className="team-info p-3">
              <img src={team.imgUrl} alt="" className="team-image" />
              <div className="p-5">
                <h3>{team.venue}</h3>
                <p>{team.address}</p>
              </div>
            </div>
            <div className="team-players">
              {players.map((p, idx) => (
                <div key={idx} style={{ margin: "2vmin" }}>
                  <p>
                    <Link className="btn btn-warning" to={`/players/${p._id}`}>
                      {p.name}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
