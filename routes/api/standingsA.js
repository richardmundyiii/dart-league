const express = require("express");
const router = express.Router();
const teamStandingsACtrl = require("../../controllers/api/teamStandingsA");

router.get("/", teamStandingsACtrl.index);

module.exports = router;
