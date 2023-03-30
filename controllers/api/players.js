const Player = require("../../models/player");

module.exports = {
  forPlayerDetail,
};

async function forPlayerDetail(req, res) {
  console.log(req.params.id);
  const player = await Player.findOne({ _id: req.params.id });
  res.json(player);
}
