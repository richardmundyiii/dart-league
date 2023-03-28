require("dotenv").config();
require("./config/database");
const Standing = require("./models/standing");
const StandingA = require("./models/standingas");
const StandingB = require("./models/standingbs");

const standingsa = await StandingA.find({});
// const standingsb = await StandingB.find({});

// await Standing.create(standingsa);
// await Standing.create(standingsb);

const standings = await Standing.find({});

console.log(standingsa);
