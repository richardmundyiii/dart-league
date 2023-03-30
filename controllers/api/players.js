const Player = require("../../models/player");

module.exports = {
  forPlayerDetail,
};

async function forPlayerDetail(req, res) {
  try {
    console.log(req.params.id);
    const player = await Player.findOne({ _id: req.params.id });
    res.json(player);
  } catch (err) {
    res.status(400).json(err);
  }
}
