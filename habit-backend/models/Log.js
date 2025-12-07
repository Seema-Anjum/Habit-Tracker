const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  habitId: { type: mongoose.Schema.Types.ObjectId, ref: "Habit", required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model("Log", LogSchema);
