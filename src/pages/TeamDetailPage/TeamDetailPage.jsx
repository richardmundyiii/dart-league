import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as teamDetailApi from "../../utilities/team-detail-api";
import "./TeamDetailPage.css";

export default function TeamDetailPage() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  const { teamId } = useParams();
  console.log(teamId);
  useEffect(() => {
    async function getTeamDetail() {
      const team = await teamDetailApi.getTeamDetail(teamId);
      setTeam(team);
    }
    getTeamDetail();
  }, [teamId]);

  if (!team) return null;

  return <main className="team-detail-page"></main>;
}
