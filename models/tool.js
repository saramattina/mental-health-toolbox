const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: String, 
   link: String,
   emotions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Emotion" }],
   reference: String, 
   isCustom: Boolean,
})

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;