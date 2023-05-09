const express = require("express");
const router = express.Router();
const NewsCtrl = require("../../controllers/api/news");

router.get("/", NewsCtrl.index);

router.post("/", NewsCtrl.createNews);

router.put("/:id", NewsCtrl.updateArticle);

router.delete("/:id", NewsCtrl.deleteArticle);

module.exports = router;
