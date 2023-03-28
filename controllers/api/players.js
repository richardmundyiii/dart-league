const Team = require("../../models/team");

module.exports = {
  forDivision,
};

async function forDivision(req, res) {
  try {
    const standings = await Standings.find({ division: req.params.div });
    console.log(standings);
    res.json(standings);
  } catch (err) {
    res.status(400).json(err);
  }
}
