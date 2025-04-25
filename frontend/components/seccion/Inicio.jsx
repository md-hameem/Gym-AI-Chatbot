import React from "react";
import styles from "../../styles/inicio.module.scss";

import Image from "next/image";
import fondo from "../../public/imgGym/inicio.jpg";

export default function Inicio({ onLoadingComplete }) {
  return (
    <div className={styles.containInicio}>
      <div className={styles.containText}>
        <h1>
          Zhengzhou University <br /> <strong>GYM</strong>
        </h1>
        <p>
          Zhengzhou University offers a comprehensive range of sports and
          fitness facilities designed to support the health and well-being of
          its students and staff. The university's gymnasium is a modern
          facility equipped with various amenities, including treadmills,
          dumbbells, and spaces for yoga and muscle-strengthening exercises.
          These facilities are distributed across all campuses, ensuring
          accessibility for all students
        </p>
        <button>Talk with AI Bot</button>
      </div>

      <div className={styles.fondoInicio}>
        <Image
          src={fondo}
          priority
          alt="fondo inicio"
          onLoadingComplete={onLoadingComplete}
        />
      </div>
    </div>
  );
}
