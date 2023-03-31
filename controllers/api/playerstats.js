const Player = require("../../models/player");

module.exports = {
  forPlayerStats,
  deleteRow,
};

async function forPlayerStats(req, res) {
  const player = await Player.findOne({ _id: req.params.id });
  player.stats.push(req.body);
  await player.save();
  res.json(player.stats[player.stats.length - 1]);
}

async function deleteRow(req, res) {
  const player = await Player.findOne({ "stats._id": req.params.id });
  player.stats.remove(req.params.id);
  await player.save();
  res.json(player);
}
