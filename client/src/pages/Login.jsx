import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/users/login", {
        regNumber,
        password,
      });
      const { loginUser, accessToken } = res.data.data;
      const role = loginUser.role;

      console.log("loginUser", loginUser);

      localStorage.setItem("token", accessToken);

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
        type="text"
        placeholder="Id"
        onChange={(e) => setRegNumber(e.target.value)}
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
