const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const habitRoutes = require("./routes/habitRoutes"); 
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(`${process.env.MONGODB_URL}/habit_tracker`)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log(err));

app.use("/api", habitRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT
app.listen(5000, () => console.log(`Server running on port ${PORT}`));