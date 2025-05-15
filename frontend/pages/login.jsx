import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/login.module.scss";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form data being sent:", formData); // Debugging log
    try {
      const response = await axios.post(
        "http://localhost:8000/token",
        new URLSearchParams(formData), // Send as application/x-www-form-urlencoded
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Required by FastAPI OAuth2PasswordRequestForm
          },
        }
      );
      setToken(response.data.access_token);
      localStorage.setItem("token", response.data.access_token); // Store token for profile page
      setMessage("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data && error.response.data.detail) {
        setMessage(error.response.data.detail);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Login - ZZU Gym</title>
        <meta name="description" content="Login to the ZZU Gym platform." />
        <link rel="icon" href="/ico.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Menu />
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
        {token && <p>Token: {token}</p>}
      </div>
      <Contacto />
    </div>
  );
}
