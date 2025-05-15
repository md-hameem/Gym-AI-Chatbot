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
    age: "",
    height: "",
    weight: "",
    interest: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", formData); // Debugging log

    // Transform formData to match backend's expected snake_case format
    const transformedData = {
      username: formData.username,
      email: formData.email,
      date_of_birth: formData.dateOfBirth, // Convert to snake_case
      age: formData.age,
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
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
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
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <Contacto />
    </div>
  );
}
