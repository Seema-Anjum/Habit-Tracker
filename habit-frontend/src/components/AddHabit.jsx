import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddHabit.css";

const API = "https://habit-tracker-kvb3.onrender.com/api";

export default function AddHabit() {
  const [title, setTitle] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const navigate = useNavigate();

  const createHabit = () => {
    axios.post(`${API}/habits`, { title, frequency }).then(() => navigate("/"));
  };

  return (
    <div className="add-habit-container">
      <h1 className="add-habit-title">Add Habit</h1>
      <input
        className="habit-input"
        placeholder="Habit name"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <select
        className="habit-select"
        value={frequency}
        onChange={e => setFrequency(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>

      <button className="habit-btn" onClick={createHabit}>
        Save
      </button>
    </div>
  );
}
