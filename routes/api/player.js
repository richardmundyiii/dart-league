const express = require("express");
const router = express.Router();
const playerCtrl = require("../../controllers/api/players");

router.get("/:id", playerCtrl.forPlayerDetail);

module.exports = router;
