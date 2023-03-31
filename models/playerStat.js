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
    required: true,
    default: 0,
  },
  losses: {
    type: Number,
    required: true,
    default: 0,
  },
  sevenMark: {
    type: Number,
    required: true,
    default: 0,
  },
  eightMark: {
    type: Number,
    required: true,
    default: 0,
  },
  nineMark: {
    type: Number,
    required: true,
    default: 0,
  },
  fourBull: {
    type: Number,
    required: true,
    default: 0,
  },
  fiveBull: {
    type: Number,
    required: true,
    default: 0,
  },
  sixBull: {
    type: Number,
    required: true,
    default: 0,
  },
  hatTrick: {
    type: Number,
    required: true,
    default: 0,
  },
  highlight: {
    type: Number,
    required: true,
    default: 0,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("PlayerStat", playerStatSchema);
