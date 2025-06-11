import React, { useState } from "react";

const SignIn = ({ onSignIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return alert("Fill all fields");
    const id = Date.now();
    onSignIn({ name, email, id });
  };

  return (
    <div className="center-box">
      <div style={{ textAlign: "center" }}>
        <img
          src="/Steel_Authority_of_India_logo.svg.png"
          alt="SAIL Logo"
          style={{ width: "80px", marginBottom: "20px" }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
