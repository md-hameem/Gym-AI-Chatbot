import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/menu.module.scss";
import LogoFull from "./logoFull";

export default function Menu() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
    const handleStorage = () => setLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

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
        <div className={styles.infoMenu} ref={dropdownRef} style={{ position: "relative" }}>
          <button
            onClick={() => setDropdownOpen((open) => !open)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600 }}
          >
            Services &#9662;
          </button>
          {dropdownOpen && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#232526",
              border: "1px solid #393e46",
              borderRadius: 8,
              minWidth: 140,
              zIndex: 100,
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
              animation: "dropdownFadeIn 0.4s cubic-bezier(.4,0,.2,1)",
            }}>
              <Link legacyBehavior href="/ai-chatbot">
                <a style={{ display: "block", padding: "10px 18px", color: "#ffe600", textDecoration: "none", fontWeight: 500, transition: "background 0.2s", }} onClick={() => setDropdownOpen(false)}>
                  AI Chatbot
                </a>
              </Link>
              <Link legacyBehavior href="/booking">
                <a style={{ display: "block", padding: "10px 18px", color: "#ffe600", textDecoration: "none", fontWeight: 500, transition: "background 0.2s", borderTop: "1px solid #393e46" }} onClick={() => setDropdownOpen(false)}>
                  Booking System
                </a>
              </Link>
            </div>
          )}
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
