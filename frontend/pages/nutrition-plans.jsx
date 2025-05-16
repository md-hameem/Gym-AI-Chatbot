import React, { useState } from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";
import styles from "../styles/nutritionPlans.module.scss";
import { useRouter } from "next/router";

export default function NutritionPlans() {
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login?redirect=/nutrition-plans");
      }
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mockup logic for recommendations
    let rec = "";
    if (goal === "weight_loss") {
      rec = "Low-calorie, high-protein meals. Try grilled chicken salad, Greek yogurt, and steamed veggies.";
    } else if (goal === "muscle_gain") {
      rec = "High-protein, moderate-carb meals. Try lean beef, brown rice, eggs, and cottage cheese.";
    } else if (goal === "maintenance") {
      rec = "Balanced meals with lean protein, whole grains, and healthy fats. Try salmon, quinoa, and avocado.";
    } else {
      rec = "Please select a goal.";
    }
    if (diet === "vegetarian") {
      rec += " For vegetarian: tofu, lentils, chickpeas, and lots of greens.";
    } else if (diet === "vegan") {
      rec += " For vegan: tempeh, beans, quinoa, nuts, and seeds.";
    }
    setRecommendation(rec);
  };

  return (
    <>
      <Head>
        <title>Nutrition Plans & Meal Recommendations - ZZU Gym</title>
        <meta
          name="description"
          content="Personalized nutrition plans and meal recommendations for your fitness goals at Triforce Club."
        />
      </Head>
      <Menu />
      <div className={styles.nutritionPageBg}>
        <div className={styles.nutritionContainer}>
          <h1 className={styles.nutritionTitle}>Nutrition Plans & Meal Recommendations</h1>
          <form className={styles.nutritionForm} onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label>Your Goal:</label><br />
              <select value={goal} onChange={e => setGoal(e.target.value)} required>
                <option value="">Select goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Diet Preference:</label><br />
              <select value={diet} onChange={e => setDiet(e.target.value)}>
                <option value="">No preference</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
            <button type="submit">Get Recommendation</button>
          </form>
          {recommendation && (
            <div className={styles.nutritionResult}>
              <h3>Recommended Meals:</h3>
              <p>{recommendation}</p>
            </div>
          )}
        </div>
      </div>
      <Contacto />
    </>
  );
}
