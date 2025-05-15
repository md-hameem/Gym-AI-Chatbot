import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/register.module.scss";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    interest: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "dateOfBirth") {
      // Calculate age
      const today = new Date();
      const dob = new Date(value);
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18) {
        setAgeError("You must be at least 18 years old to register.");
      } else {
        setAgeError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Calculate age from dateOfBirth
    const today = new Date();
    const dob = new Date(formData.dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 18) {
      setAgeError("You must be at least 18 years old to register.");
      return;
    }
    setAgeError("");

    // Transform formData to match backend's expected snake_case format
    const transformedData = {
      username: formData.username,
      email: formData.email,
      date_of_birth: formData.dateOfBirth,
      age: age,
      height: formData.height,
      weight: formData.weight,
      interest: formData.interest,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        transformedData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure proper headers
          },
        }
      );
      console.log("Server response:", response.data); // Debugging log
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error during registration:", error); // Debugging log
      if (error.response) {
        console.error("Validation errors:", error.response.data); // Log validation errors
        if (error.response.data && error.response.data.detail) {
          const errorDetails = error.response.data.detail;
          if (Array.isArray(errorDetails)) {
            setMessage(errorDetails.map((err) => `${err.loc[1]}: ${err.msg}`).join("\n"));
          } else {
            setMessage(errorDetails);
          }
        } else {
          setMessage("An unexpected error occurred.");
        }
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Register - ZZU Gym</title>
        <meta name="description" content="Register for the ZZU Gym platform." />
        <link rel="icon" href="/ico.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Menu />
      <div className={styles.registerContainer}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          {/* Age is calculated automatically and not shown as input */}
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="interest"
            placeholder="Interest"
            value={formData.interest}
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
          {ageError && <p style={{ color: '#ff3b6b', fontWeight: 600 }}>{ageError}</p>}
          <button type="submit" disabled={!!ageError}>Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <Contacto />
    </div>
  );
}
