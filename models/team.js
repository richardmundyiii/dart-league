const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  wins: { type: Number },
  losses: { type: Number },
  season: { type: String }, // 2023H1 2023H2 => creating seasons that sort
});

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    divison: { type: String, enum: ["A", "B"], required: true },
    venue: { type: String, required: true },
    stats: [statsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
