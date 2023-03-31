import { useEffect, useState } from "react";
import "./PlayerDetailPage.css";
import * as playerDetailApi from "../../utilities/player-detail-api";
import { useParams } from "react-router-dom";

export default function PlayerDetailPage() {
  const index = 0;
  const [player, setPlayer] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      week: "",
      opp: "",
      wins: "",
      losses: "",
      sevenMarks: "",
      eightMarks: "",
      nineMarks: "",
      fourBulls: "",
      fiveBulls: "",
      sixBulls: "",
      nineFivePlus: "",
      points: "",
    },
  ]);
  const [newRow, setNewRow] = useState({
    id: rows.length + 1,
    week: "",
    opp: "",
    wins: "",
    losses: "",
    sevenMarks: "",
    eightMarks: "",
    nineMarks: "",
    fourBulls: "",
    fiveBulls: "",
    sixBulls: "",
    nineFivePlus: "",
    points: "",
  });

  const [showNewRow, setShowNewRow] = useState(false);

  const { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      const player = await playerDetailApi.getPlayerDetail(playerId);
      setPlayer(player);
    }
    getPlayer();
  }, [playerId]);

  //   let playerNameSplit = playerId.split(",");
  //   let playerName = playerNameSplit[1] + " " + playerNameSplit[0];

  function handleEdit() {}

  function handleAddRow() {
    setRows((prevRows) => [
      {
        id: rows.length + 1,
        opp: "",
        week: "",
        wins: "",
        losses: "",
        sevenMarks: "",
        eightMarks: "",
        nineMarks: "",
        fourBulls: "",
        fiveBulls: "",
        sixBulls: "",
        nineFivePlus: "",
        points: "",
      },
    ]);
    setShowNewRow(true);
  }

  function handleInputChange(e) {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSaveRow() {
  //   setRows([...rows, newRow]);
  //   setNewRow({
  //     id: rows.length + 2,
  //     week: "",
  //     opp: "",
  //     wins: "",
  //     losses: "",
  //     sevenMarks: "",
  //     eightMarks: "",
  //     nineMarks: "",
  //     fourBulls: "",
  //     fiveBulls: "",
  //     sixBulls: "",
  //     nineFivePlus: "",
  //     points: "",
  //   });
  // }

  return (
    <>
      <main>
        <div className="card m-4 p-3">
          <div className="card-header">{player && player.name}</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Week</th>
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
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {player &&
                  player.stats.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.week}</td>
                      <td>{s.opp}</td>
                      <td>{s.wins}</td>
                      <td>{s.losses}</td>
                      <td>{s.sevenMarks}</td>
                      <td>{s.eightMarks}</td>
                      <td>{s.nineMarks}</td>
                      <td>{s.fourBulls}</td>
                      <td>{s.fiveBulls}</td>
                      <td>{s.sixBulls}</td>
                      <td>{s.nineFivePlus}</td>
                      <td>{s.points}</td>
                      <td>
                        <button className="btn btn-danger" onClick={handleEdit}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                {showNewRow && index === rows.length - 1 && (
                  <tr>
                    <td>{newRow.id}</td>
                    <td>
                      <input type="text" value={newRow.week} />
                    </td>
                    <td>
                      <input type="text" value={newRow.wins} />
                    </td>
                    <td>
                      <input type="text" value={newRow.losses} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col4} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                    <td>
                      <input type="text" value={newRow.col5} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button className="btn btn-info" onClick={handleAddRow}>
            Add
          </button>
        </div>
      </main>
    </>
  );
}
