import React from "react";
import styles from "../styles/menu.module.scss";
import Contact from "./seccion/about"; // assuming the Contact component is inside the "about" file
import LogoFull from "./logoFull";
import Link from "next/link"; // Import Link from Next.js
import { FaHome, FaRobot, FaUserPlus, FaSignInAlt, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.containMenu}>
      <div className={styles.centerMenu}>
        <div>
          <Link legacyBehavior href="/">
            <a className={styles.logoLink}>
              <LogoFull />
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/">
            <a>
              <FaHome className={styles.icon} />
              <p>Home</p>
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/ai-chatbot">
            <a>
              <FaRobot className={styles.icon} />
              <p>AI Chatbot</p>
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/register">
            <a>
              <FaUserPlus className={styles.icon} />
              <p>Register</p>
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/login">
            <a>
              <FaSignInAlt className={styles.icon} />
              <p>Login</p>
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/profile">
            <a>
              <FaUser className={styles.icon} />
              <p>Profile</p>
            </a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <button onClick={handleLogout} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
