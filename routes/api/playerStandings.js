const express = require("express");
const router = express.Router();
const playerStandingsCtrl = require("../../controllers/api/playerStandings");

router.get("/:div", playerStandingsCtrl.forDivision);

module.exports = router;
