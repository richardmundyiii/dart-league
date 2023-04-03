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
    required: true,
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
  sevenMark: {
    type: Number,
    default: 0,
    required: true,
  },
  eightMark: {
    type: Number,
    default: 0,
    required: true,
  },
  nineMark: {
    type: Number,
    default: 0,
    required: true,
  },
  fourBull: {
    type: Number,
    default: 0,
    required: true,
  },
  fiveBull: {
    type: Number,
    default: 0,
    required: true,
  },
  sixBull: {
    type: Number,
    default: 0,
    required: true,
  },
  hatTricks: {
    type: Number,
    default: 0,
    required: true,
  },
  highlights: {
    type: Number,
    default: 0,
    required: true,
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
