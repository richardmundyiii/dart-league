const Teams = require("../../models/team");

module.exports = {
  forTeamDetail,
};

async function forTeamDetail(req, res) {
  try {
    const team = await Teams.findOne({ name: req.params.id });
    console.log(team);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
}
