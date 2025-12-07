import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddHabit from "./components/AddHabit";
import HabitDetails from "./components/HabitDetails"; 
import Insights from "./components/Insights";

function App() {
  return(
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddHabit />} />
      <Route path="/habit/:id" element={<HabitDetails />} />
      <Route path="/insights" element={<Insights />} />
    </Routes>
  )
}

export default App;