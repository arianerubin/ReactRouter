import React, { useState } from "react";
import Avatar from "./Avatar";
import Authenticate from "./Authenticate";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters long.");
      return;
    } else {
      setUsernameError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to sign up");
      }
      const result = await response.json();
      console.log(result);
      setError(null);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="Form">
      <Avatar img="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/39/original/fullstack-academy-logo-square-lg.jpg" />
      <h2>SignUpForm</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        <label>
          Password:{""}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
