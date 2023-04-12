const express = require("express");
const router = express.Router();
const homeCtrl = require("../../controllers/api/home");

router.get("/", homeCtrl.index);

module.exports = router;
