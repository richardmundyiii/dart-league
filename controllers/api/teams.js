const Teams = require("../../models/team");
const Players = require("../../models/player");

module.exports = {
  forTeamDetail,
  teamDetails,
};

async function forTeamDetail(req, res) {
  try {
    const team = await Teams.findOne({ name: req.params.id });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function teamDetails(req, res) {
  try {
    const players = await Players.find({});
    const team = await Teams.findOne({ name: req.params.id });
    console.log(players);
  } catch (err) {
    res.status(400).json(err);
  }
}
