const express = require("express");
const router = express.Router();
const newsCtrl = require("../../controllers/api/news");

router.post("/", newsCtrl.createNews);

module.exports = router;
