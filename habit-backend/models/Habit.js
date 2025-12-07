const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    title:{type: String, required: true},
    frequency: {type: String, enum: ["daily", "weekly"], default: "daily"},
    streak: {type: Number, default:0},
}); 

module.exports = mongoose.model("Habit", HabitSchema);