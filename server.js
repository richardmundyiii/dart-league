const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/database");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use(require("./config/checkToken"));

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/standings", require("./routes/api/standings"));
app.use("/api/teams", require("./routes/api/teams"));
app.use("/api/players", require("./routes/api/player"));
app.use("/api/playerstats", require("./routes/api/playerstats"));
app.use("/api/playerstandings", require("./routes/api/playerStandings"));
app.use("/api/news", require("./routes/api/news"));
app.use("/api/home", require("./routes/api/home"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
