import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/booking.module.scss";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";

const classOptions = [
  { name: "Yoga", color: "#ffe600" },
  { name: "Boxing", color: "#ff6f00" },
  { name: "Cardio", color: "#00e6d0" },
  { name: "Strength", color: "#ff3b6b" },
];

export default function Booking() {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      router.push("/login?redirect=booking");
    }
  }, [router]);

  const handleBook = (e) => {
    e.preventDefault();
    if (selectedClass && date && time) {
      // Save booking to localStorage
      const booking = {
        className: selectedClass,
        date,
        time,
        bookedAt: new Date().toISOString(),
      };
      const prev = JSON.parse(localStorage.getItem("bookings") || "[]");
      localStorage.setItem("bookings", JSON.stringify([...prev, booking]));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
      setSelectedClass(null);
      setDate("");
      setTime("");
    }
  };

  return (
    <>
      <Menu />
      <div className={styles.bookingContainer}>
        {!isLoggedIn ? (
          <div style={{ color: '#ffe600', fontWeight: 600, fontSize: '1.2rem', marginTop: '2rem' }}>
            Please log in to book a class.
          </div>
        ) : (
          <>
            <h1 className={styles.title}>Book a Gym Class</h1>
            <form className={styles.bookingForm} onSubmit={handleBook}>
              <div className={styles.classOptions}>
                {classOptions.map((option) => (
                  <button
                    type="button"
                    key={option.name}
                    className={`${styles.classBtn} ${selectedClass === option.name ? styles.selected : ""}`}
                    style={{ borderColor: option.color, color: option.color }}
                    onClick={() => setSelectedClass(option.name)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
              <input
                type="date"
                className={styles.input}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="time"
                className={styles.input}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <button
                type="submit"
                className={styles.bookBtn}
                disabled={!selectedClass || !date || !time}
              >
                Book Now
              </button>
              {success && (
                <div className={styles.successMsg}>
                  <span>✅ Booking Confirmed!</span>
                </div>
              )}
            </form>
            <div className={styles.animatedBg}></div>
          </>
        )}
      </div>
      <Contacto />
    </>
  );
}
