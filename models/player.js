const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    requrie: true,
  },
  stats: {
    type: Object,
  },
});

module.exports = mongoose.model("Player", playerSchema);
