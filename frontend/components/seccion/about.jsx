import React from "react";
import styles from "../../styles/about.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import hamim from "../../public/hamim.jpg"; 
import { FaFacebook } from "react-icons/fa";
import Contacto from "./Contacto"; 

export default function About({ onLoadingComplete }) {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.aboutImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={hamim}
            priority
            alt="Mohammad Hamim"
            onLoadingComplete={onLoadingComplete}
            className="rounded-3xl shadow-lg"
            width={400}
            height={400}
          />
        </motion.div>

        <motion.div
          className={styles.aboutText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>MOHAMMAD HAMIM</h1>
          <p>Web Developer | Machine Learning Engineer</p>
          <p>
            Currently pursuing a B.Sc. in Software Engineering at Zhengzhou University.
            Passionate about building intelligent web applications with modern frontend
            technologies and AI-powered backends. Experienced in full-stack development
            using React.js, Next.js, Python Flask, and FastAPI.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/yourfacebook" // update with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} /> Visit Facebook
          </motion.a>
        </motion.div>
      </div>
      <Contacto />
    </div>
  );
}
