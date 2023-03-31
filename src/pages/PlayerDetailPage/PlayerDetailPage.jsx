import { useEffect, useState } from "react";
import "./PlayerDetailPage.css";
import * as playerDetailApi from "../../utilities/player-detail-api";
import { useParams } from "react-router-dom";
import * as PlayerStats from "../../utilities/player-stats-api";

export default function PlayerDetailPage({ user }) {
  const index = 0;
  const [player, setPlayer] = useState(null);
  const [rows, setRows] = useState((player && player.stats) || []);
  const [deletedRow, setDeletedRow] = useState({});

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
    highlights: 0,
    points: 0,
  });

  const { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      const player = await playerDetailApi.getPlayerDetail(playerId);
      setPlayer(player);
    }
    getPlayer();
  }, [playerId, rows, deletedRow]);

  function handleInputChange(e) {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSaveRow(e) {
    e.preventDefault();
    const row = await PlayerStats.addRow(newRow, player._id);
    const updateRow = [...rows, row];
    setRows(updateRow);
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
      highlights: 0,
      points: 0,
    });
  }

  async function handleDeleteClick(id) {
    const row = await PlayerStats.deleteRow(id);
    setDeletedRow(row);
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
                  <th>Points</th>
                  <th>Delete</th>
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
                      <td>{s.sevenMark}</td>
                      <td>{s.eightMark}</td>
                      <td>{s.nineMark}</td>
                      <td>{s.fourBull}</td>
                      <td>{s.fiveBull}</td>
                      <td>{s.sixBull}</td>
                      <td>{s.hatTrick}</td>
                      <td>{s.highlight}</td>
                      <td>{s.points}</td>
                      {user.isAdmin ? (
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteClick(s._id)}
                          >
                            Delete
                          </button>
                        </td>
                      ) : (
                        <td>&nbsp;</td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {user.isAdmin ? (
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
                        name="hatTrick"
                      />
                    </td>
                    <td>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={newRow.highlights}
                        name="highlights"
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
              <button className="btn btn-info" style={{ width: "100%" }}>
                Save
              </button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
