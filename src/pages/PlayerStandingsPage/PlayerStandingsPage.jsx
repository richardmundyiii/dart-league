import { useEffect, useState } from "react";
import * as playerStandingsApi from "../../utilities/player-standings-api";
import "./PlayerStandingsPage.css";

export default function PlayerStandingsPage() {
  const [division, setDivision] = useState("A");
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function getPlayerStandings() {
      const standings = await playerStandingsApi.getPlayerStandings(division);
      setStandings(standings);
    }
    getStandings();
  }, []);

  return <h1>Player Standings Page</h1>;
}
