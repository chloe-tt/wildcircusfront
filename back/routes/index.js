const express = require("express");
const router = express.Router();
const users = require("./users");
const news = require("./news");

router.use("/news", news);
router.use("/users", users);

module.exports = router;