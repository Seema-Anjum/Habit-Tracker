import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/Register.css"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        { name, email, password }
      )
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card glass-card">
        <h2 className="auth-title">Create Account</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

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
            Register
          </button>
        </form>

        <p className="switch-text">
          Already have an account? <Link className="switch-link" to="/">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
