import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Task Manager
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Login to continue
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#cbd5e1",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;