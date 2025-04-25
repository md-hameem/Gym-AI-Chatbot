import React from "react";
import styles from "../../styles/inicio.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import ishfar from "../../public/ishfar.jpg";

export default function Contact({ onLoadingComplete }) {
  return (
    <div className={styles.containInicio}>
      <div className={styles.containText}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30">
          {/* Right: Career Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ml-0 md:ml-8 mt-6 md:mt-0 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Ishfar Bhai
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-2">
              Software Engineer | Web & AI Developer
            </p>

            {/* Fun Animated Career Highlights */}
            <motion.div
              className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.p
                whileHover={{ scale: 1.1, color: "#4A90E2" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                💻 Full-Stack Web Developer (React, Next.js, Flask)
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#E74C3C" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                🤖 AI & Machine Learning Engineer
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#16A085" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                🎮 Founder of SAS Consultancy Services
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#F1C40F" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                📜 Published Researcher Paper
              </motion.p>
            </motion.div>

            {/* Contact Links */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:your-email@example.com"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                📧 Email Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                🔗 Facebook
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="px-4 py-2 bg-green-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                🔗 WeChat
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.fondoInicio}>
        <Image
          src={ishfar}
          priority
          alt="fondo inicio"
          onLoadingComplete={onLoadingComplete}
        />
      </div>
    </div>
  );
}
