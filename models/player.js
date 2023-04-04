const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerStatSchema = new Schema({
  week: {
    type: Number,
    required: true,
  },
  opp: {
    type: String,
    default: "",
  },
  wins: {
    type: Number,
    default: 0,
    required: true,
  },
  losses: {
    type: Number,
    default: 0,
    required: true,
  },
  cricketHighlights: {
    type: Number,
    default: 0,
    required: true,
  },
  zeroOneHighlights: {
    type: Number,
    default: 0,
  },
  zeroOnePoints: {
    type: Number,
    default: 0,
    required: true,
  },
});

const playerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
    require: true,
  },
  division: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  stats: [playerStatSchema],
});

module.exports = mongoose.model("Player", playerSchema);
