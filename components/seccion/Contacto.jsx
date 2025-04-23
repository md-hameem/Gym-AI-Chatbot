import React from "react";
import styles from "../../styles/contacto.module.scss";
import Link from "next/link";
import LogoFull from "../logoFull";

export default function Contact() {
  return (
    <div className={styles.containContacto}>
      <div className={styles.containMapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6551.830737828709!2d113.53581!3d34.808071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35d77b116d9739ed%3A0xc62173c1e443572d!2sZhengzhou%20University!5e0!3m2!1sen!2sus!4v1745366945988!5m2!1sen!2sus"
          style={{ border: "none" }}
          className={styles.mapa}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.containInfo}>
          <h2>Information</h2>

          <h3>Location</h3>
          <p>100 Ke Xue Avenue, Zhongyuan Zhengzhou 450001 Henan China</p>

          <h3>Phone</h3>
          <p>+8615617724195</p>

          <h3>Email</h3>
          <p>ishfar@gmail.com</p>
        </div>
      </div>

      <div className={styles.containData}>
        <div className={styles.containCopy}>
          <LogoFull />
          <p>
            Copyright © 2025 <br />
            Made by{" Ishfar Bin Rashid"}
          </p>
        </div>
        <div className={styles.containClases}>
          <h2>Our Classes</h2>
          <ul>
            <li>
              <a>Yoga</a>
            </li>
            <li>
              <a>Cardio</a>
            </li>
            <li>
              <a>Strength Training</a>
            </li>
            <li>
              <a>Boxing</a>
            </li>
          </ul>
        </div>
        <div className={styles.containHorarios}>
          <h2>About Me</h2>
          <ul>
            <li>
              <p>
                <strong> Monday - Friday</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> 8:00 AM to 10:00 PM</p>
            </li>
            <li>
              <p>
                <strong> Saturday</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> 9:00 AM to 8:00 PM</p>
            </li>
            <li>
              <p>
                <strong> Sunday</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> Closed</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
