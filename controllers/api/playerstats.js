const Player = require("../../models/player");

module.exports = {
  forPlayerStats,
  deleteRow,
  update,
};

async function forPlayerStats(req, res) {
  const player = await Player.findById(req.params.id);
  player.stats.push(req.body);
  await player.save();
  res.json(player);
}

async function deleteRow(req, res) {
  const player = await Player.findOne({ "stats._id": req.params.id });
  player.stats.remove(req.params.id);
  await player.save();
  res.json(player);
}

async function update(req, res) {
  const player = await Player.findOne({ "stats._id": req.params.id });
  const statIndex = player.stats.findIndex((s) => s._id.equals(req.params.id));
  const updatedStat = req.body;
  player.stats[statIndex] = updatedStat;
  await player.save();
  res.json(player);
}
