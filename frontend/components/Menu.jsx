import React from "react";
import styles from "../styles/menu.module.scss";
import Contact from "./seccion/about"; // assuming the Contact component is inside the "about" file
import LogoFull from "./logoFull";
import Link from "next/link"; // Import Link from Next.js

export default function Menu() {
  return (
    <div className={styles.containMenu}>
      <div className={styles.centerMenu}>
        <div>
          <LogoFull />
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/about">
            <a> {/* Wrap the WeChat text with <a> tag inside Link */}
              <p>WeChat: Hrishfar02</p>
            </a>
          </Link>
        </div>
        <Link legacyBehavior href="/ai-chatbot">
          <a>
            <p>AI Chatbot</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
