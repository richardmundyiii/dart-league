import { useEffect, useState } from "react";
import "./PlayerDetailPage.css";
import * as playerDetailApi from "../../utilities/player-detail-api";
import { useParams } from "react-router-dom";

export default function PlayerDetailPage() {
  const [player, setPlayer] = useState([]);

  const { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      const player = await playerDetailApi.getPlayerDetail(playerId);
      setPlayer(player);
    }
    getPlayer();
  }, [playerId]);

  //   console.log(player);

  let playerNameSplit = playerId.split(", ");
  let playerName = playerNameSplit[1] + " " + playerNameSplit[0];

  return (
    <>
      <main>
        {/* <h1>Player Detail Page</h1> */}
        <div className="card m-4 p-3">
          <div className="card-header">{playerName}</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Opponent</th>
                  <th>Won</th>
                  <th>Losses</th>
                  <th>7M</th>
                  <th>8M</th>
                  <th>9M</th>
                  <th>4B</th>
                  <th>5B</th>
                  <th>6B</th>
                  <th>95+</th>
                  <th>Points</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
