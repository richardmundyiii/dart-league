const Player = require("../../models/player");

module.exports = {
  forDivision,
};

async function forDivision(req, res) {
  try {
    const player = await Player.find({ div: req.params.div });
    res.json(player);
  } catch (err) {
    res.status(400).json(err);
  }
}
