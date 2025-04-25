import Head from "next/head";
import Menu from "../components/Menu";
import BtonTop from "../components/btonTop";
import Spinner from "../components/spinner";
import axios from "axios";

import React, { useState, useEffect } from "react";
import styles from "../styles/chatbot.module.scss";

export default function AIChatbot() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate a loading delay to mimic data fetching or initialization
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput("");

      try {
        // Send the user message to the backend
        const response = await axios.post("http://localhost:8000/chat", {
          message: input,
        });

        // Add the AI response to the chat
        setMessages((prev) => [...prev, { user: false, text: response.data.response }]);
      } catch (error) {
        // Handle errors (e.g., backend not reachable)
        setMessages((prev) => [...prev, { user: false, text: "Error: Unable to connect to the AI service." }]);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>AI Chatbot - ZZU Gym</title>
        <meta name="description" content="Chat with our AI assistant" />
        <link rel="icon" href="/ico.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {loading && <Spinner />}
      <main>
        <Menu />
        <div className={styles.chatbotContainer}>
          <h1 className={styles.title}>AI Chatbot</h1>
          <div className={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.user ? styles.userMessage : styles.aiMessage}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
        <BtonTop />
      </main>
    </div>
  );
}