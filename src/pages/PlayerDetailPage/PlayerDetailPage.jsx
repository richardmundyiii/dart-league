import { useEffect, useState } from "react";
import "./PlayerDetailPage.css";
import * as playerDetailApi from "../../utilities/player-detail-api";
import { useParams } from "react-router-dom";
import * as PlayerStats from "../../utilities/player-stats-api";

export default function PlayerDetailPage({ user, setUser }) {
  const [player, setPlayer] = useState(null);

  const [editingRow, setEditingRow] = useState(false);

  const [newRow, setNewRow] = useState({
    week: 0,
    opp: "",
    wins: 0,
    losses: 0,
    sevenMarks: 0,
    eightMarks: 0,
    nineMarks: 0,
    fourBulls: 0,
    fiveBulls: 0,
    sixBulls: 0,
    hatTricks: 0,
    nineFivePlus: 0,
    points: 0,
  });

  const { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      const player = await playerDetailApi.getPlayerDetail(playerId);
      setPlayer(player);
    }
    getPlayer();
  }, [playerId]);

  function handleInputChange(e) {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSaveRow(e) {
    e.preventDefault();
    // let row;
    if (editingRow) {
      const updatedPlayer = await PlayerStats.updateRow(newRow._id, newRow);
      // const updatedRows = rows.map((r) => (r._id === editingRow._id ? row : r));
      // setRows(updatedRows);
      setEditingRow(false);
      setPlayer(updatedPlayer);
    } else {
      const updatedPlayer = await PlayerStats.addRow(newRow, player._id);
      // setRows([...rows, row]);
      setPlayer(updatedPlayer);
    }
    setNewRow({
      week: 0,
      opp: "",
      wins: 0,
      losses: 0,
      sevenMarks: 0,
      eightMarks: 0,
      nineMarks: 0,
      fourBulls: 0,
      fiveBulls: 0,
      sixBulls: 0,
      hatTricks: 0,
      nineFivePlus: 0,
      points: 0,
    });
  }

  async function handleEditClick(row) {
    setEditingRow(true);
    setNewRow({ ...row });
  }

  async function handleDeleteClick(id) {
    const updatedPlayer = await PlayerStats.deleteRow(id);
    setPlayer(updatedPlayer);
  }

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
                  <th>HT</th>
                  <th>95+</th>
                  {/* <th>Highlights</th> */}
                  <th>Points</th>
                  {user?.isAdmin ? (
                    <>
                      <th>Edit</th>
                      <th>Delete</th>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              </thead>
              <tbody>
                {player &&
                  player.stats &&
                  player.stats.map((s, id) => (
                    <tr key={id}>
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
                      <td>{s.hatTricks}</td>
                      <td>{s.nineFivePlus}</td>
                      <td>{s.points}</td>
                      {user?.isAdmin ? (
                        <>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={() => handleEditClick(s)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteClick(s._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {user?.isAdmin ? (
          <div className="card m-4 p-3">
            <form onSubmit={handleSaveRow}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Opp</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>7M</th>
                    <th>8M</th>
                    <th>9M</th>
                    <th>4B</th>
                    <th>5B</th>
                    <th>6B</th>
                    <th>HT</th>
                    <th>95+</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="add-player-stats-row">
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.week}
                        name="week"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        value={newRow.opp}
                        name="opp"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.wins}
                        name="wins"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.losses}
                        name="losses"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.sevenMarks}
                        name="sevenMarks"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.eightMarks}
                        name="eightMarks"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.nineMarks}
                        name="nineMarks"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.fourBulls}
                        name="fourBulls"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.fiveBulls}
                        name="fiveBulls"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.sixBulls}
                        name="sixBulls"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.hatTricks}
                        name="hatTricks"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.nineFivePlus}
                        name="nineFivePlus"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.points}
                        name="points"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {editingRow ? (
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Update
                </button>
              ) : (
                <button className="btn btn-info" style={{ width: "100%" }}>
                  Save
                </button>
              )}
            </form>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
