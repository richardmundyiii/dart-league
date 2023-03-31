const Player = require("../../models/player");

module.exports = {
  forPlayerStats,
};

async function forPlayerStats(req, res) {
  console.log(req.body);

  const player = await Player.findOne({ _id: req.params.id });
  player.stats.push(req.body);
  await player.save();
  res.json(player.stats[player.stats.length - 1]);
}
