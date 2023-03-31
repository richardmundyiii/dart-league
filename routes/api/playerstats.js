const express = require("express");
const router = express.Router();
const playerStatsCtrl = require("../../controllers/api/playerstats");

router.post("/:id/stats", playerStatsCtrl.forPlayerStats);

router.delete("/:id/stats", playerStatsCtrl.deleteRow);

module.exports = router;
