import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/HabitDetails.css";

const API = import.meta.env.VITE_API_URL;


export default function HabitDetails() {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [logs, setLogs] = useState([]);

//   const load = async () => {
//     const h = await axios.get(`${API}/habits/${id}`);
//     console.log(h);
//     setHabit(h.data);

//     const l = await axios.get(`${API}/habits/${id}/logs`);
//     console.log(l);
//     setLogs(l.data);
//   };

useEffect(() => {
  axios.get(`${API}/habits/${id}`).then(res => setHabit(res.data));
  axios.get(`${API}/habits/${id}/logs`).then(res => setLogs(res.data));
}, []);

  useEffect(() => {
    load();
  }, []);

  const logToday = async () => {
    await axios.post(`${API}/habits/${id}/log`);
    load();
  };

  if (!habit) return <div className="loading">Loading...</div>;

  return (
    <div className="habit-details-container">
      <div className="habit-header glass-card">
        <h1>{habit.title}</h1>
        <p className="streak">🔥 {habit.streak} day streak</p>
        <button className="btn-primary log-btn" onClick={logToday}>
          Log Today
        </button>
      </div>

      <div className="history glass-card">
        <h2>History</h2>

        <div className="history-list">
          {logs.length === 0 && <p>No logs yet.</p>}

          {logs.map(l => (
            <div key={l._id} className="history-item">
              {new Date(l.date).toDateString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
