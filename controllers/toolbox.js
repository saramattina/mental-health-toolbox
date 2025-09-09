const express = require("express");
const router = express.Router();

const UserTool = require("../models/userTool.js");
const Tool = require("../models/tool.js");

router.get("/", (req, res) => {
   res.render("tools/index.ejs");
});










module.exports = router;
