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
  sevenMarks: {
    type: Number,
    default: 0,
    required: true,
  },
  eightMarks: {
    type: Number,
    default: 0,
    required: true,
  },
  nineMarks: {
    type: Number,
    default: 0,
    required: true,
  },
  fourBulls: {
    type: Number,
    default: 0,
    required: true,
  },
  fiveBulls: {
    type: Number,
    default: 0,
    required: true,
  },
  sixBulls: {
    type: Number,
    default: 0,
    required: true,
  },
  hatTricks: {
    type: Number,
    default: 0,
    required: true,
  },
  nineFivePlus: {
    type: Number,
    default: 0,
  },
  points: {
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
