const Standings = require("../../models/standing");

module.exports = {
  forDivision,
};

async function forDivision(req, res) {
  try {
    const standings = await Standings.find({ division: req.params.div });
    res.json(standings);
  } catch (err) {
    res.status(400).json(err);
  }
}
