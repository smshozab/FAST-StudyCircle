import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher"); // Default to teacher
  const [isLogin, setIsLogin] = useState(true); // Toggle for login/signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "/login" : "/register"; // Determine API endpoint
    try {
      const response = await axios.post(`http://localhost:4000${endpoint}`, {
        email,
        password,
        role,
      });

      alert(response.data.message);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isLogin ? "Login" : "Sign Up"} to Your Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && (
          <div>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
        )}

        <button type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </div>
  );
};

export default HomePage;
