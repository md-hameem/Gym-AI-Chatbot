import React, { useState, useEffect } from "react";
import styles from "../styles/aiWorkoutPlans.module.scss";
import Head from "next/head";
import Menu from "../components/Menu";
import Contacto from "../components/seccion/Contacto";

const mockAIResponse = (goal, experience) => {
  // Custom AI-based recommendations for each goal and experience
  if (!goal) return null;
  if (goal === "Building Muscle") {
    if (experience === "Beginner") {
      return [
        "Day 1: Full Body Strength - Squats, Push-ups, Dumbbell Rows",
        "Day 2: Rest or Light Cardio",
        "Day 3: Upper Body - Bench Press, Shoulder Press, Lat Pulldown",
        "Day 4: Rest or Light Cardio",
        "Day 5: Lower Body - Lunges, Leg Press, Calf Raises",
        "Day 6: Core & Flexibility - Plank, Crunches, Stretching",
        "Day 7: Rest"
      ];
    } else if (experience === "Intermediate") {
      return [
        "Day 1: Push (Chest/Shoulders/Triceps) - Bench Press, Overhead Press, Tricep Dips",
        "Day 2: Pull (Back/Biceps) - Pull-ups, Barbell Rows, Bicep Curls",
        "Day 3: Legs - Squats, Deadlifts, Leg Extensions",
        "Day 4: Rest or Active Recovery",
        "Day 5: Upper Body - Incline Press, Lateral Raises, Face Pulls",
        "Day 6: Lower Body - Romanian Deadlift, Lunges, Calf Raises",
        "Day 7: Rest"
      ];
    } else {
      // Advanced
      return [
        "Day 1: Chest & Back - Bench Press, Weighted Pull-ups, Bent-over Rows",
        "Day 2: Legs - Squats, Deadlifts, Bulgarian Split Squats",
        "Day 3: Shoulders & Arms - Military Press, Skullcrushers, Hammer Curls",
        "Day 4: Rest or Mobility Work",
        "Day 5: Full Body - Power Cleans, Dips, Chin-ups",
        "Day 6: Core & Conditioning - Hanging Leg Raises, Planks, HIIT",
        "Day 7: Rest"
      ];
    }
  } else if (goal === "Loose weight") {
    if (experience === "Beginner") {
      return [
        "Day 1: Cardio - 30 min brisk walk or cycling",
        "Day 2: Full Body Circuit - Bodyweight Squats, Push-ups, Plank",
        "Day 3: Rest or Light Yoga",
        "Day 4: Cardio - 20 min jog or elliptical",
        "Day 5: Upper Body - Resistance Band Rows, Shoulder Press",
        "Day 6: Core & Flexibility - Crunches, Leg Raises, Stretching",
        "Day 7: Rest"
      ];
    } else if (experience === "Intermediate") {
      return [
        "Day 1: HIIT Cardio - 20 min intervals",
        "Day 2: Strength Training - Squats, Push-ups, Rows",
        "Day 3: Cardio - 30 min cycling or running",
        "Day 4: Rest or Yoga",
        "Day 5: Full Body Circuit - Lunges, Plank, Burpees",
        "Day 6: Core & Flexibility - Russian Twists, Mountain Climbers, Stretching",
        "Day 7: Rest"
      ];
    } else {
      // Advanced
      return [
        "Day 1: HIIT & Strength - Sprints, Deadlifts, Push-ups",
        "Day 2: Cardio - 45 min run or spin class",
        "Day 3: Full Body Circuit - Kettlebell Swings, Pull-ups, Box Jumps",
        "Day 4: Rest or Mobility",
        "Day 5: Strength - Squats, Bench Press, Rows",
        "Day 6: Core & Conditioning - Plank Variations, Burpees, Stretching",
        "Day 7: Rest"
      ];
    }
  } else if (goal === "ABS Exercise") {
    if (experience === "Beginner") {
      return [
        "Day 1: Core - Crunches, Plank, Leg Raises",
        "Day 2: Rest or Light Cardio",
        "Day 3: Core - Bicycle Crunches, Mountain Climbers, Flutter Kicks",
        "Day 4: Rest or Yoga",
        "Day 5: Core - Russian Twists, Plank, Heel Touches",
        "Day 6: Flexibility - Stretching, Cat-Cow, Cobra Pose",
        "Day 7: Rest"
      ];
    } else if (experience === "Intermediate") {
      return [
        "Day 1: Core Circuit - Hanging Leg Raises, Plank, V-Ups",
        "Day 2: Cardio - 20 min HIIT",
        "Day 3: Core - Ab Wheel Rollouts, Toe Touches, Side Plank",
        "Day 4: Rest or Yoga",
        "Day 5: Core - Cable Crunches, Mountain Climbers, Flutter Kicks",
        "Day 6: Flexibility - Stretching, Yoga",
        "Day 7: Rest"
      ];
    } else {
      // Advanced
      return [
        "Day 1: Core & HIIT - Dragon Flags, Plank Holds, Sprints",
        "Day 2: Core - Weighted Sit-ups, Hanging Leg Raises, Windshield Wipers",
        "Day 3: Cardio - 30 min run",
        "Day 4: Rest or Mobility",
        "Day 5: Core - Ab Wheel, L-Sit, V-Ups",
        "Day 6: Flexibility - Advanced Yoga, Stretching",
        "Day 7: Rest"
      ];
    }
  } else if (goal === "Flexibility Exercises") {
    if (experience === "Beginner") {
      return [
        "Day 1: Full Body Stretch - Neck, Shoulders, Hamstrings, Calves",
        "Day 2: Yoga - Sun Salutations, Child's Pose, Cat-Cow",
        "Day 3: Rest or Light Cardio",
        "Day 4: Lower Body Stretch - Hip Flexors, Quads, Glutes",
        "Day 5: Yoga - Downward Dog, Cobra, Pigeon Pose",
        "Day 6: Upper Body Stretch - Triceps, Chest, Back",
        "Day 7: Rest"
      ];
    } else if (experience === "Intermediate") {
      return [
        "Day 1: Dynamic Stretching - Leg Swings, Arm Circles, Hip Rotations",
        "Day 2: Yoga Flow - Warrior Series, Triangle Pose, Bridge Pose",
        "Day 3: Rest or Pilates",
        "Day 4: Lower Body Flexibility - Deep Lunges, Hamstring Stretch",
        "Day 5: Yoga - Crow Pose, Pigeon, Camel Pose",
        "Day 6: Upper Body Flexibility - Shoulder Mobility, Chest Opener",
        "Day 7: Rest"
      ];
    } else {
      // Advanced
      return [
        "Day 1: Advanced Yoga - Handstands, Splits, Wheel Pose",
        "Day 2: Mobility Drills - Deep Squats, Jefferson Curl, Pancake Stretch",
        "Day 3: Rest or Active Recovery",
        "Day 4: Flexibility Flow - Dynamic Yoga, Backbends, Hip Openers",
        "Day 5: Lower Body - Pistol Squats, Front Splits, Hamstring Stretch",
        "Day 6: Upper Body - Bridge, Shoulder Dislocates, Chest Stretch",
        "Day 7: Rest"
      ];
    }
  }
  return null;
};

export default function AIWorkoutPlans() {
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simple auth check: look for a token in localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setRecommendations(mockAIResponse(goal, experience));
      setLoading(false);
    }, 900); // Simulate API delay
  };

  return (
    <>
      <Head>
        <title>Workout Plan - ZZU Gym</title>
        <meta
          name="description"
          content="Track your fitness progress, activity, and goals at Triforce Club."
        />
      </Head>
      <Menu />
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h2>AI-Based Workout Recommendations</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            >
              <option value="">Select your fitness goal</option>
              <option value="Building Muscle">Building Muscle</option>
              <option value="Loose weight">Loose weight</option>
              <option value="ABS Exercise">ABS Exercise</option>
              <option value="Flexibility Exercises">Flexibility Exercises</option>
            </select>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <button type="submit" disabled={loading}>
              {loading ? "Generating..." : "Get Plan"}
            </button>
          </form>
          {recommendations && (
            <div className={styles.results}>
              <h3>Your Personalized Plan:</h3>
              <ul>
                {recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Contacto />
    </>
  );
}
