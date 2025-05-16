import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";
import styles from "../styles/fitnessDashboard.module.scss";

export default function FitnessDashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = typeof window !== "undefined" && localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
    // Fetch profile data from backend (reuse logic from profile page)
    fetch("http://localhost:8000/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, [router]);

  // Calculate BMI and Body Fat if data is available
  let bmi = null, bodyFat = null, todaySteps = null, todayCalories = null, todayWorkout = null, weeklySteps = null, goalSteps = null, goalCalories = null, goalWorkouts = null;
  if (profile && profile.height && profile.weight) {
    const heightM = profile.height / 100;
    bmi = (profile.weight / (heightM * heightM)).toFixed(1);
    // Simple body fat estimate (for demo):
    // Body Fat % = (1.20 × BMI) + (0.23 × age) − 10.8 × gender − 5.4
    const age = profile.age || 25;
    const gender = 1; // 1=male, 0=female (customize as needed)
    bodyFat = ((1.20 * bmi) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(1);

    // Generate demo values based on weight/height
    todaySteps = Math.round(7000 + (profile.weight - 60) * 30 + (170 - profile.height) * 10);
    todayCalories = Math.round(400 + (profile.weight - 60) * 4 + (profile.height - 160) * 2);
    todayWorkout = Math.round(30 + (profile.weight - 60) * 0.2 + (profile.height - 160) * 0.1) + ' min';
    // Weekly steps: simulate a week with some variation
    weeklySteps = {
      Mon: todaySteps - 200,
      Tue: todaySteps,
      Wed: todaySteps + 300,
      Thu: todaySteps - 400,
      Fri: todaySteps + 100,
      Sat: todaySteps + 800,
      Sun: todaySteps - 100,
    };
    // Goals: set based on BMI
    goalSteps = bmi < 23 ? 8000 : 10000;
    goalCalories = bmi < 23 ? 500 : 600;
    goalWorkouts = bmi < 23 ? 3 : 4;
  }

  return (
    <>
      <Head>
        <title>Fitness Dashboard - ZZU Gym</title>
        <meta name="description" content="Track your fitness progress, activity, and goals at Triforce Club." />
      </Head>
      <Menu />
      <div className={styles.dashboardContainer}>
        <h1 className={styles.title} style={{
          fontFamily: 'Oswald, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '2.1rem',
          color: '#00ffb3',
          textTransform: 'none',
          letterSpacing: '1px',
          margin: '0 0 18px 0',
          textShadow: 'none',
        }}>
          Fitness Tracking & Progress Dashboard
        </h1>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h2>Today's Activity</h2>
            <div className={styles.metricsRow}>
              <div className={styles.metricBox}><div><b>{todaySteps !== null ? todaySteps : '--'}</b><br/>Steps</div></div>
              <div className={styles.metricBox}><div><b>{todayCalories !== null ? todayCalories : '--'}</b><br/>kcal</div></div>
              <div className={styles.metricBox}><div><b>{todayWorkout !== null ? todayWorkout : '--'}</b><br/>Workout</div></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Weekly Progress</h2>
            <ul style={{padding:0, margin:0, listStyle:'none', fontSize:'1rem'}}>
              {weeklySteps ? (
                Object.entries(weeklySteps).map(([day, steps]) => (
                  <li key={day}>{day}: {steps} steps</li>
                ))
              ) : (
                <>
                  <li>Mon: -- steps</li>
                  <li>Tue: -- steps</li>
                  <li>Wed: -- steps</li>
                  <li>Thu: -- steps</li>
                  <li>Fri: -- steps</li>
                  <li>Sat: -- steps</li>
                  <li>Sun: -- steps</li>
                </>
              )}
            </ul>
          </div>
          <div className={styles.card}>
            <h2>Body Metrics</h2>
            <div className={styles.metricsRow}>
              <div className={styles.metricBox}><div><b>{profile?.weight ? `${profile.weight} kg` : '--'}</b><br/>Weight</div></div>
              <div className={styles.metricBox}><div><b>{profile?.height ? `${profile.height} cm` : '--'}</b><br/>Height</div></div>
              <div className={styles.metricBox}><div><b>{bmi || '--'}</b><br/>BMI</div></div>
              <div className={styles.metricBox}><div><b>{bodyFat || '--'}%</b><br/>Body Fat</div></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Goals</h2>
            <ul className={styles.goalsList}>
              <li>{goalSteps ? `${goalSteps} steps/day` : '7,000 steps/day'}</li>
              <li>{goalCalories ? `${goalCalories} kcal/day` : '400 kcal/day'}</li>
              <li>{goalWorkouts ? `${goalWorkouts} workouts/week` : '4 workouts/week'}</li>
            </ul>
          </div>
        </div>
      </div>
      <Contacto />
    </>
  );
}
