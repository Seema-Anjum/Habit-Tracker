const express = require("express");
const Habit = require("../models/Habit.js");
const Log = require("../models/Log.js");
const router = express.Router();

// Create Habit 
router.post("/habits", async(req, res) => {
    try{
        const habit = await Habit.create(req.body);
        res.json(habit);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});


// Get all habits
router.get("/habits", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Log a check-in
router.post("/habits/:id/log", async (req, res) => {
  try {
    const habitId = req.params.id;
    const today = new Date().setHours(0, 0, 0, 0);

    // prevent duplicate same-day log
    const exists = await Log.findOne({ habitId, date: today });
    if (exists) return res.json({ message: "Already logged today" });

    await Log.create({ habitId, date: today });

// update streak
const logs = await Log.find({ habitId }).sort({ date: 1 });
let streak = 1;

for (let i = logs.length - 1; i > 0; i--) {
    const diff =
    (logs[i].date - logs[i - 1].date) / (1000 * 60 * 60 * 24);
    if (diff === 1) streak++;
    else break;
}

await Habit.findByIdAndUpdate(habitId, { streak });

res.json({ message: "Logged", streak });
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

// Get logs for insights
router.get("/habits/:id/logs", async (req, res) => {
  try {
    const logs = await Log.find({ habitId: req.params.id });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get ALL logs for analytics
router.get("/all-logs", async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: 1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;