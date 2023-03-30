const Player = require("../../models/player");

module.exports = {
  forPlayerDetail,
};

function forPlayerDetail(req, res) {
  const player = Player.findOne({ name: req.params.name });
  console.log(player);
  res.json(player);
}
