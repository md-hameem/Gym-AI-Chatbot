import React from "react";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";
import styles from "../styles/fitnessDashboard.module.scss";

export default function FitnessDashboard() {
  return (
    <>
      <Menu />
      <section className={styles.heroSection}>
        <h1 className={styles.title} style={{
          fontFamily: 'Oswald, Arial, sans-serif',
          fontWeight: 900,
          fontSize: '2.8rem',
          color: '#ffe600',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: 0,
          textShadow: '2px 2px 8px #232526, 0 2px 0 #00ffb3',
        }}>
          <span role="img" aria-label="chart">📈</span> Fitness Tracking & Progress Dashboard
        </h1>
        <p className={styles.subtitle}>
          Visualize your daily activity, track your progress, and stay motivated with your personalized fitness dashboard.
        </p>
      </section>
      <div className={styles.dashboardContainer}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h2>Today's Activity</h2>
            <div className={styles.metricsRow}>
              <div className={styles.metricBox}><span>👣</span><div><b>8,200</b><br/>Steps</div></div>
              <div className={styles.metricBox}><span>🔥</span><div><b>520</b><br/>kcal</div></div>
              <div className={styles.metricBox}><span>⏱️</span><div><b>45 min</b><br/>Workout</div></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Weekly Progress</h2>
            <div className={styles.weeklyBar}>
              <div className={styles.barLabel}>Mon</div><div className={styles.bar} style={{width:'75%'}}></div>
              <div className={styles.barLabel}>Tue</div><div className={styles.bar} style={{width:'82%'}}></div>
              <div className={styles.barLabel}>Wed</div><div className={styles.bar} style={{width:'90%'}}></div>
              <div className={styles.barLabel}>Thu</div><div className={styles.bar} style={{width:'68%'}}></div>
              <div className={styles.barLabel}>Fri</div><div className={styles.bar} style={{width:'81%'}}></div>
              <div className={styles.barLabel}>Sat</div><div className={styles.bar} style={{width:'100%'}}></div>
              <div className={styles.barLabel}>Sun</div><div className={styles.bar} style={{width:'79%'}}></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Body Metrics</h2>
            <div className={styles.metricsRow}>
              <div className={styles.metricBox}><span>⚖️</span><div><b>72 kg</b><br/>Weight</div></div>
              <div className={styles.metricBox}><span>📏</span><div><b>22.5</b><br/>BMI</div></div>
              <div className={styles.metricBox}><span>💧</span><div><b>16%</b><br/>Body Fat</div></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Goals</h2>
            <ul className={styles.goalsList}>
              <li>🏃‍♂️ <b>10,000</b> steps/day</li>
              <li>🔥 <b>600</b> kcal/day</li>
              <li>💪 <b>4</b> workouts/week</li>
            </ul>
          </div>
        </div>
        <div className={styles.progressSection}>
          <h2>Progress Chart</h2>
          <div className={styles.chartPlaceholder}>
            <span role="img" aria-label="bar chart" style={{fontSize: 48}}>📊</span>
            <p>Progress chart coming soon!</p>
          </div>
        </div>
      </div>
      <Contacto />
    </>
  );
}
