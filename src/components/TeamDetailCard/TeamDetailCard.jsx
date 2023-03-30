import { useParams } from "react-router-dom";
import * as playerStandingsApi from "../../utilities/player-standings-api";

export default function TeamDetailCard() {
  const { teamId } = useParams();

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
                  <th>01 Avg</th>
                  <th>Cricket Avg</th>
                  <th>Total Highlights</th>
                  <th>Hightlight Points</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
