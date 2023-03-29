import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as teamDetailApi from "../../utilities/team-detail-api";
import "./TeamDetailPage.css";
import TeamDetailCard from "../../components/TeamDetailCard/TeamDetailCard";

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

  if (!teamId) return null;

  return (
    <>
      <TeamDetailCard />
    </>
  );
}
