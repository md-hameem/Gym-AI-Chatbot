import React from "react";
import styles from "../../styles/about.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ishfar from "../../public/ishfar.jpg";
import { FaFacebook } from "react-icons/fa";

export default function About({ onLoadingComplete }) {
  return (
    <div className={styles.aboutContainer}>
      <motion.div
        className={styles.aboutImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={ishfar}
          priority
          alt="Ishfar Bhai"
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
        <h1>Ishfar Bhai</h1>
        <p>Software Engineer | Web & AI Developer</p>
        <p>
          Passionate about building scalable web applications and exploring the
          world of artificial intelligence. Founder of SAS Consultancy Services
          and a published researcher.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.facebook.com/hr.ishfar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <FaFacebook size={20} /> Visit Facebook
        </motion.a>
      </motion.div>
    </div>
  );
}
