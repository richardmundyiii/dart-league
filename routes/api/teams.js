const express = require("express");
const router = express.Router();
const teamCtrl = require("../../controllers/api/teams");

// GET /api/teams/:id
router.get("/:id", teamCtrl.forTeamDetail);

module.exports = router;
