"use client";
import React from "react";
import styles from "./ExperiencesHero.module.css";

export default function ExperiencesHero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.content}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>DISCOVER YOUR DANCE</p>

          {/* Main Heading */}
          <h1 className={styles.heading}>EXPLORE REEBOLLY</h1>

          {/* Supporting Text */}
          <p className={styles.description}>
            Dance experiences designed to help you move, express and connect.
            <br />
            Choose your journey and find the experience that speaks to you.
          </p>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className={styles.pattern}></div>
    </section>
  );
}
