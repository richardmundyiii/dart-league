const express = require("express");
const router = express.Router();
const NewsCtrl = require("../../controllers/api/news");

router.post("/", NewsCtrl.createNews);

module.exports = router;
