import { useState, useEffect } from "react";
import * as teamDetailApi from "../../utilities/team-detail-api";

export default function Team() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    async function getTeamDetail() {
      const { teams } = await teamDetailApi.getTeams();
      setTeams(teams);
      console.log(teams, "working");
    }
    getTeamDetail();
  }, []);

  // if (!teams) return null;

  return (
    <>
      <main>
        <select></select>
      </main>
    </>
  );
}
