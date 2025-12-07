import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

import "../styles/Insights.css";

const API = "https://habit-tracker-kvb3.onrender.com/api";

export default function Insights() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/habits`).then(res => setHabits(res.data));
    axios.get(`${API}/all-logs`).then(res => setLogs(res.data));
  }, []);

  // --------- COMPUTED ANALYTICS ----------
  const totalLogs = logs.length;

  const streakData = habits.map(h => ({
    name: h.title,
    streak: h.streak
  }));

  const logsByDay = logs.reduce((acc, log) => {
    const d = new Date(log.date).toLocaleDateString();
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});

  const dailyData = Object.keys(logsByDay).map(d => ({
    day: d,
    count: logsByDay[d]
  }));

  const habitStrength = habits.map(h => ({
    name: h.title,
    value: Math.min(100, h.streak * 10) // simple scoring formula
  }));

  const pieColors = ["#6a5acd", "#836FFF", "#483D8B", "#b39ddb"];

  return (
    <div className="insights-container">
      <h1 className="insights-title">Insights Dashboard</h1>

      <div className="stats-row">
        <div className="stat-card">
          <h2>{habits.length}</h2>
          <p>Total Habits</p>
        </div>

        <div className="stat-card">
          <h2>{totalLogs}</h2>
          <p>Total Check-ins</p>
        </div>
      </div>

      {/* ---- Streak Bar Chart ---- */}
      <div className="chart-card">
        <h3>Streak Comparison</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={streakData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streak" fill="#6a5acd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ---- Daily Activity Line Chart ---- */}
      <div className="chart-card">
        <h3>Daily Habit Activity</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dailyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#836FFF" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ---- Habit Strength Pie ---- */}
      <div className="chart-card">
        <h3>Habit Strength Score</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={habitStrength}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >
              {habitStrength.map((_, i) => (
                <Cell key={i} fill={pieColors[i % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
