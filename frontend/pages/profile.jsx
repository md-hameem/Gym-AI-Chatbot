import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/profile.module.scss";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please log in to view your profile.");
        router.push("/login");
        return;
      }
      try {
        console.log("Sending GET /profile with token:", token);
        const response = await axios.get("http://localhost:8000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Profile response:", response.data);
        setProfile(response.data);
      } catch (error) {
        setMessage(error.response?.data?.detail || "An error occurred");
      }
    };

    fetchProfile();

    // Load bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <Head>
        <title>Profile - ZZU Gym</title>
        <meta name="description" content="View your profile on the ZZU Gym platform." />
        <link rel="icon" href="/ico.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Menu />
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imgGym/man.png"
            alt="Profile Avatar"
            className={styles.avatar}
          />
          <div className={styles.profileTitle}>Profile</div>
          {message && <p style={{ color: '#ffe600', fontWeight: 600 }}>{message}</p>}
          {profile && (
            <div className={styles.profileInfo}>
              <p><strong>Username:</strong> {profile.username}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              {profile.age && <p><strong>Age:</strong> {profile.age}</p>}
              {profile.height && <p><strong>Height:</strong> {profile.height} cm</p>}
              {profile.weight && <p><strong>Weight:</strong> {profile.weight} kg</p>}
              {profile.interest && <p><strong>Interest:</strong> {profile.interest}</p>}
              {profile.date_of_birth && <p><strong>Date of Birth:</strong> {profile.date_of_birth}</p>}
              <button onClick={handleLogout} style={{marginTop: '1.2rem', background: '#ffe600', color: '#222', border: 'none', borderRadius: '6px', padding: '0.6rem 1.5rem', fontWeight: 700, cursor: 'pointer'}}>Logout</button>
            </div>
          )}
        </div>
        {/* Booked Classes Section */}
        <div className={styles.bookingsCard}>
          <div className={styles.profileTitle} style={{marginBottom: '1rem'}}>My Booked Classes</div>
          {bookings.length === 0 ? (
            <p style={{ color: '#ffe600', fontWeight: 500 }}>No classes booked yet.</p>
          ) : (
            <ul className={styles.bookingsList}>
              {bookings.map((b, i) => (
                <li key={i} className={styles.bookingItem}>
                  <span className={styles.className}>{b.className}</span>
                  <span className={styles.classDate}>{b.date}</span>
                  <span className={styles.classTime}>{b.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Contacto />
    </div>
  );
}
