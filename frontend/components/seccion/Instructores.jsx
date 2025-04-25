import React from "react";

import Image from "next/image";
import styles from "../../styles/Instructores.module.scss";
import Logo from "../logo";

export default function Instructors() {
  return (
    <div className={styles.containInstructores}>
      <div className={styles.titleSeccion}>
        <h1>OUR TEAM</h1>
      </div>

      <div className={styles.containTrainers}>
        <div className={styles.imgTrainers}>
          <Image
            src="/imgTeam/trainer1.jpg"
            width={640}
            height={960}
            alt="Instructor photo"
          />
          <span className={styles.nameTrainer}>
            <h3>Federico Gonzalez</h3>
            <p>Strength Training</p>
          </span>
        </div>
        <div className={styles.imgTrainers}>
          <Image
            src="/imgTeam/trainer2.jpg"
            width={640}
            height={960}
            alt="Instructor photo"
          />
          <span className={styles.nameTrainer}>
            <h3>Marcos Ferreyra</h3>
            <p>Boxing</p>
          </span>
        </div>
        <div className={styles.imgTrainers}>
          <Image
            src="/imgTeam/trainer3.jpg"
            width={640}
            height={960}
            alt="Instructor photo"
          />
          <span className={styles.nameTrainer}>
            <h3>Esteban Lopez</h3>
            <p>Cardio</p>
          </span>
        </div>
        <div className={styles.imgTrainers}>
          <Image
            src="/imgTeam/trainer4.jpg"
            width={640}
            height={960}
            alt="Instructor photo"
          />
          <span className={styles.nameTrainer}>
            <h3>Belen Garcia</h3>
            <p>Yoga</p>
          </span>
        </div>
      </div>

      <div className={styles.decoBack}>
        <Logo />
      </div>
    </div>
  );
}
