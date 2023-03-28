const Standings = require("../../models/standingas");

module.exports = {
  forDivision,
};

async function forDivision(req, res) {
  try {
    const standings = await Standings.find({});
    console.log("working", standings);
    res.json(standings);
  } catch (err) {
    res.status(400).json(err);
  }
}
