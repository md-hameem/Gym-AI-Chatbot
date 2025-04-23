import React, { useState, useRef } from "react";
import styles from "../../styles/imc.module.scss";

import Image from "next/image";
import backgroundPhoto from "../../public/imgGym/imc.jpg";

export default function BmiCalculator() {
  const inputWeight = useRef(null);
  const inputHeight = useRef(null);

  const [result, setResult] = useState({
    bmi: "--",
    weightStatus: "--",
  });

  const [data, setData] = useState({
    weight: "",
    height: "",
  });

  function validateInput(value) {
    return value.length !== 0 && value > 0;
  }

  function handleClick(e) {
    e.preventDefault();
    if (validateInput(data.weight) && validateInput(data.height)) {
      const calculatedBMI = (data.weight / Math.pow(data.height, 2)).toFixed(2);

      if (calculatedBMI < 18.5) {
        setResult({
          bmi: calculatedBMI,
          weightStatus: "Underweight",
        });
      } else if (calculatedBMI < 24.9) {
        setResult({
          bmi: calculatedBMI,
          weightStatus: "Normal Weight",
        });
      } else if (calculatedBMI < 29.9) {
        setResult({
          bmi: calculatedBMI,
          weightStatus: "Overweight",
        });
      } else {
        setResult({
          bmi: calculatedBMI,
          weightStatus: "Obese",
        });
      }
    } else {
      if (validateInput(data.weight)) {
        inputHeight.current.focus();
      } else {
        inputWeight.current.focus();
      }

      setResult({
        bmi: "--",
        weightStatus: "--",
      });
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <div className={styles.containImc}>
      <div className={styles.deco}>
        <Image
          src={backgroundPhoto}
          width={1920}
          height={1280}
          quality={100}
          alt="decorative photo"
        />
      </div>

      <div className={styles.containCentrar}>
        <div className={styles.containTabla}>
          <div className={styles.titleSeccion}>
            <h2>
              <strong>BMI</strong> Calculator
            </h2>
            <p>
              Easily determine your Body Mass Index with our accurate calculation tool.
            </p>
          </div>
        </div>

        <div className={styles.containTabla}>
          <div className={styles.containFila}>
            <span className={styles.containForm}>
              <label htmlFor="weight">Weight: (Kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                ref={inputWeight}
                onChange={handleChange}
              />
            </span>
            <span className={styles.containForm}>
              <label htmlFor="height">Height: (M)</label>
              <input
                type="number"
                id="height"
                name="height"
                ref={inputHeight}
                onChange={handleChange}
              />
            </span>
          </div>

          <div className={styles.containFila}>
            <span className={styles.resultadoIMC}>
              <p>
                Your BMI is: <strong>{result.bmi}</strong>
              </p>
            </span>

            <span className={styles.resultadoIMC}>
              <p>
                Your weight status is: <strong>{result.weightStatus}</strong>
              </p>
            </span>
          </div>

          <div className={styles.containFila}>
            <button onClick={handleClick}>Calculate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
