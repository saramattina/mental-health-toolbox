const mongoose = require("mongoose");

const emotionSchema = new mongoose.Schema({
   name: String,
})

const Emotion = mongoose.model("Emotion", emotionSchema);

module.exports = Emotion;