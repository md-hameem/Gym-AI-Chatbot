import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/menu.module.scss";
import LogoFull from "./logoFull";

export default function Menu() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
    // Listen for storage changes (logout/login in other tabs)
    const handleStorage = () => setLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
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
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.infoMenu}>
          <Link legacyBehavior href="/about">
            <a>About</a>
          </Link>
        </div>
        {!loggedIn && (
          <>
            <div className={styles.infoMenu}>
              <Link legacyBehavior href="/register">
                <a>Register</a>
              </Link>
            </div>
            <div className={styles.infoMenu}>
              <Link legacyBehavior href="/login">
                <a>Login</a>
              </Link>
            </div>
          </>
        )}
        {loggedIn && (
          <>
            <div className={styles.infoMenu}>
              <Link legacyBehavior href="/profile">
                <a>Profile</a>
              </Link>
            </div>
            <div className={styles.infoMenu}>
              <button onClick={handleLogout} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
