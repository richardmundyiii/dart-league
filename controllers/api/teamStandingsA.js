const StandingsA = require("../../models/standingas");

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const standings = await StandingsA.find({});
    console.log("working", standings);
    res.json(standings);
  } catch (err) {
    res.status(400).json(err);
  }
}
