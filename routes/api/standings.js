const express = require("express");
const router = express.Router();
const standingsCtrl = require("../../controllers/api/standings");

//GET /api/standings/:div
router.get("/:div", standingsCtrl.forDivision);

module.exports = router;
