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
    cricketHighlights: 0,
    zeroOneHighlights: 0,
    zeroOnePoints: 0,
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
    if (editingRow) {
      const updatedPlayer = await PlayerStats.updateRow(newRow._id, newRow);
      setEditingRow(false);
      setPlayer(updatedPlayer);
    } else {
      const updatedPlayer = await PlayerStats.addRow(newRow, player._id);
      setPlayer(updatedPlayer);
    }
    setNewRow({
      week: 0,
      opp: "",
      wins: 0,
      losses: 0,
      cricketHighlights: 0,
      zeroOneHighlights: 0,
      zeroOnePoints: 0,
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
                  <th>Cricket Highlights</th>
                  <th>'01 Highlights</th>
                  <th>'01 Points</th>
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
                      <td>{s.cricketHighlights}</td>
                      <td>{s.zeroOneHighlights}</td>
                      <td>{s.zeroOnePoints}</td>
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
                    <th>Cricket Highlights</th>
                    <th>'01 Highlights</th>
                    <th>'01 Points</th>
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
                        value={newRow.cricketHighlights}
                        name="cricketHighlights"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.zeroOneHighlights}
                        name="zeroOneHighlights"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.zeroOnePoints}
                        name="zeroOnePoints"
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
