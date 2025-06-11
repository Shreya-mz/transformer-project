
import React, { useState } from "react";
const Login = ({ onLogin, onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <div className="flex justify-center mb-4">
        <img src="https://upload.wikimedia.org/wikipedia/en/3/3b/SAIL_Logo.svg" alt="SAIL Logo" className="h-16" />
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" placeholder="Email" className="w-full border p-2" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full border p-2" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
      </form>
      <p className="text-center mt-4 text-sm">Don't have an account? <button className="text-blue-500" onClick={onSwitch}>Sign Up</button></p>
    </div>
  );
};
export default Login;