const mongoose = require("mongoose");

const userToolSchema = new mongoose.Schema({
   user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   tool: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tool"
   },
   note: String,  
   emotions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Emotion" }],
})


const UserTool = mongoose.model("UserTool", userToolSchema);

module.exports = UserTool;