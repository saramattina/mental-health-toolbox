const express = require("express");
const router = express.Router();

const UserTool = require("../models/userTool.js");
const Tool = require("../models/tool.js");
// const Emotion = require("../models/emotion.js");

router.get("/", async (req, res) => {
   const toolData = await Tool.find({});
   res.render("tools/index.ejs", { tools: toolData});
});

router.get("/new", (req, res) => {
   const toolData = Tool.find({});
   res.render("tools/new.ejs", { tools: toolData });
})

router.get("/:toolId", async (req, res) => {
   try {
      // const currentUser = await User.findById(req.session.user._id);
      const toolData = await Tool.findById(req.params.toolId);
      console.log("tool:", toolData);
      res.render("tools/show.ejs", { tool: toolData });
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox");
   }
});







// router.get("/:toolId", async (req, res) => {
//    try {
//       const tool = await Tool.findById(req.params.toolId);
//       const userTool = await UserTool.findOne({
//          user: req.session.user._id,
//          tool: req.params.toolId,
//       }).populate();
//       res.render("tools/show.ejs", { tool, userTool });
//    } catch (error) {
//       console.log(error);
//       res.redirect("/toolbox");
//    }
// });








module.exports = router;