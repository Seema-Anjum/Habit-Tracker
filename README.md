### 🌟 Habit Tracker — MERN App with Streaks, Insights & Analytics

A habit-building engine that tracks daily progress, visualizes behavior, sparks consistency, and turns personal routines into data-driven insights.

Built with MongoDB + Express + React + Node and enhanced with Recharts analytics, streak logic & habit intelligence.

### 🚀 Features

✔ Create and manage habits

✔ Daily check-ins with streak auto-calculation

✔ Individual habit logs

✔ Global analytics dashboard

✔ Charts: streak progression, heatmaps, habit frequency

✔ Fully responsive UI with a fresh custom theme

✔ Cloud-ready MongoDB connection (MongoDB Atlas)

✔ Production deployment for both frontend & backend

📁 Project Structure
/backend
  ├── models
  │    ├── Habit.js
  │    └── Log.js
  ├── routes
  │    └── habitRoutes.js
  ├── server.js
  └── config.js

/frontend
  ├── src
  │    ├── components
  │    ├── pages
  │    ├── hooks
  │    ├── App.jsx
  │    └── main.jsx
  ├── public
  └── package.json

### 🧠 Tech Stack
Frontend

React (Vite)

Axios

Recharts

Custom CSS theme

Backend

Node.js

Express.js

MongoDB + Mongoose

CORS

⚙️ Backend Setup
1️⃣ Install dependencies
cd backend
npm install

2️⃣ Add .env
MONGO_URI=your_mongo_atlas_url
PORT=5000

3️⃣ Start server
npm start


Backend runs on:

http://localhost:5000

🖥 Frontend Setup
1️⃣ Install
cd frontend
npm install

2️⃣ Update API base URL inside frontend

Example:

const API = "http://localhost:5000/api";

3️⃣ Run app
npm run dev


Frontend runs on:

http://localhost:5173

📊 API Endpoints
Habits
POST   /api/habits
GET    /api/habits

Logs
POST   /api/habits/:id/log
GET    /api/habits/:id/logs

Analytics
GET    /api/all-logs

### 📡 Deployment Guide
Backend (Render)

Push backend folder to GitHub

Create Render Web Service

Set:

Build command: npm install

Start command: node server.js

Add environment variables

Build:

npm run build


### 📈 Screens & Analytics

Habit list

Streak tracker

Daily log timeline

Progress charts

### Global insights dashboard

💡 Future Enhancements

AI habit recommendations

Weekly ritual engine

Habit dependency graphs

Mobile app version

Social leaderboard
