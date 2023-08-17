const Teams = require("../../models/team");
const Players = require("../../models/player");

module.exports = {
  forTeamDetail,
  teamDetails,
  getTeams,
};

async function forTeamDetail(req, res) {
  try {
    const team = await Teams.findOne({ name: req.params.id });
    const players = await Players.find({ team: team._id });
    res.json({ players, team });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function teamDetails(req, res) {
  try {
    const team = Teams.findOne({ name: req.params.id });
    res.json(team);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getTeams(req, res) {
  try {
    const teams = Teams.find({});
    console.log(teams, "working");
    res.json(teams);
  } catch (err) {
    res.status(400).json(err);
  }
}
