const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", ensuredLoggedIn, usersCtrl.checkToken);

module.exports = router;
