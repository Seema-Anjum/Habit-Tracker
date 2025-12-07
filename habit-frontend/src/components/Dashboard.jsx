import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const API = import.meta.env.VITE_API_URL;


export default function Dashboard() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get(`${API}/habits`).then(res => setHabits(res.data));
  }, []);
 


  return (
    <div className="dash-container">
      <div className="dash-header glass-card">
        <h1 className="dash-title">Habit Overview</h1>
        <br/>
        <Link to="/add" className="btn-primary add-btn">➕ Add Habit</Link>
        <Link to="/insights" className="dash-add-btn">📊 Insights</Link>
        {/* </div> */}
      </div>

      {/* Habit Grid */}
      <div className="habit-grid">
        {habits.map(h => (
          <Link key={h._id} to={`/habit/${h._id}`} className="habit-card glass-card">
            <h3 className="habit-name">{h.title}</h3>
            <p className="habit-streak">🔥 {h.streak} day streak</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
