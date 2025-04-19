import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/users/login", {
        email,
        password,
      });
      const { token, role } = res.data;

      localStorage.setItem("token", token);

      // Redirect based on role
      if (role === "student") {
        navigate("/dashboard/student");
      } else if (role === "supervisor") {
        navigate("/dashboard/supervisor");
      } else if (role === "admin") {
        navigate("/dashboard/admin");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
