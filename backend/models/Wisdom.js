const mongoose = require("mongoose");

const wisdomSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,

  // 🔥 ADD THESE LINES
  elderName: String,
  region: String,
  language: String,
audio: String,
  tags: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
  type: String,
  enum: ["under-review", "approved"],
  default: "under-review"
}
});

module.exports = mongoose.model("Wisdom", wisdomSchema);