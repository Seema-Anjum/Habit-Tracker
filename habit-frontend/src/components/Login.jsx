import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import "../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try{
      const response = await axios.post(
        "https://habit-tracker-kvb3.onrender.com/api/login",
        { email, password }
      )

      const { user, token } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      navigate("/")
    }
    catch(err){
      console.error(err)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card glass-card">
        <h2 className="auth-title">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary auth-btn">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don't have an account? <Link to="/register" className="switch-link">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
