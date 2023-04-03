const Player = require("../../models/player");

module.exports = {
  forPlayerDetail,
  createPlayer,
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

async function createPlayer(req, res) {
  try {
    const player = await Player.create(req.body);
    console.log(player);
    res.json(player);
  } catch (err) {
    res.status(400).json(err);
  }
}
