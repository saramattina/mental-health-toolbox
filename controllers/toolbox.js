const express = require("express");
const router = express.Router();

const UserTool = require("../models/userTool.js");
const Tool = require("../models/tool.js");
const User = require("../models/user.js");
// const Emotion = require("../models/emotion.js");

router.get("/", async (req, res) => {
   try {
      const toolData = await Tool.find({});
      res.render("tools/index.ejs", { tools: toolData});
   } catch (error) {
      console.log(error);
      res.redirect("/");
   }
 
});

router.get("/myTools", async (req, res) => {
   try {
      const userTools = await UserTool.find({ user: req.session.user._id })
         .populate("tool");
      res.render("toolbox/index.ejs", { userTools });
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox");
   }
})

router.get("/myTools/:userToolId", async (req, res) => {
   try {
      const userTool = await UserTool.findOne({
         _id: req.params.userToolId,
         user: req.session.user._id,
      }).populate("tool");

      if (!userTool) {
         console.log("usertool not found")
         return res.redirect("/toolbox/myTools")};

      res.render("toolbox/show.ejs", { userTool });
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox/myTools");
   }
});

router.get("/myTools/:userToolId/edit", async (req, res) => {
   try {
      const userTool = await UserTool.findOne({
         _id: req.params.userToolId,
         user: req.session.user._id,
      }).populate("tool");
      if (!userTool) {
         return res.redirect("/toolbox/myTools")};
      res.render("toolbox/edit.ejs", { userTool });
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox/myTools");
   }
});

router.put("/myTools/:userToolId", async (req, res) => {
   try {
      const userTool = await UserTool.findOne({
         _id: req.params.userToolId,
         user: req.session.user._id,
      }).populate("tool");
      
      userTool.set(req.body);
      await userTool.save();

      res.redirect(`/toolbox/myTools/${req.params.userToolId}`);

   } catch (error) {
      console.log(error);
      res.redirect("/toolbox/myTools");
   }
});

router.delete("/myTools/:userToolId", async (req, res) => { 
   try {
      const userTool = await UserTool.findOne({
         _id: req.params.userToolId,
         user: req.session.user._id,
      });

      await userTool.deleteOne();
    
      // await userTool.save();

      res.redirect(`/toolbox/myTools`);

   } catch (error) {
      console.log(error);
      res.redirect("/toolbox/myTools");
   }
})

router.get("/:toolId", async (req, res) => {
   try {
      const toolData = await Tool.findById(req.params.toolId);
      res.render("tools/show.ejs", { tool: toolData });
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox");
   }
});


router.post("/:toolId", async (req, res) => {
   try {
      const existingUserTool = await UserTool.findOne({
         user: req.session.user._id,
         tool: req.params.toolId,
      });
      //check if tool is already in user's toolbox
      if (existingUserTool) {
         return res.redirect("/toolbox/myTools");
      }
      const newUserTool = new UserTool({
         user: req.session.user._id,
         tool: req.params.toolId,
      });
      await newUserTool.save();
      res.redirect("/toolbox/myTools");
   } catch (error) {
      console.log(error);
      res.redirect("/toolbox/myTools");
   }
})



module.exports = router;