import React from "react";
import styles from "../../styles/planes.module.scss";

export default function Plans() {
  return (
    <div className={styles.containPlanes}>
      <div className={styles.titleSeccion}>
        <h1>PLANS</h1>
      </div>
      <div className={styles.containCards}>
        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>Pass for</h2>
          </div>

          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Day
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>FREE</h2>
            <button>Select Plan</button>
          </div>
        </div>

        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>Pass for</h2>
          </div>
          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Month
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>$ 3000</h2>
            <button>Select Plan</button>
          </div>
        </div>

        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>Pass for</h2>
          </div>
          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Week
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>$ 1000</h2>
            <button>Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
