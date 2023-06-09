const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const standingSchema = new Schema(
  {
    place: {
      type: Number,
      require: true,
    },
    points: {
      type: Number,
      require: true,
    },
    matchesPlayed: {
      type: Number,
      require: true,
    },
    matchesWon: {
      type: Number,
      require: true,
    },
    teamName: {
      type: String,
      require: true,
    },
    legWonPct: {
      type: String,
      require: true,
    },
    zeroOneAvg: {
      type: String,
      require: true,
    },
    cricketAvg: {
      type: String,
      require: true,
    },
    division: {
      type: String,
      enum: ["A", "B"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Standing", standingSchema);
