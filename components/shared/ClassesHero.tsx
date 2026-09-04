"use client";
import React from "react";
import styles from "./ClassesHero.module.css";

export default function ClassesHero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.content}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>BOOK YOUR SPOT</p>

          {/* Main Heading */}
          <h1 className={styles.heading}>FIND YOUR NEXT CLASS</h1>

          {/* Supporting Text */}
          <p className={styles.description}>
            Browse upcoming workshops, classes, and dance experiences.
            <br />
            Filter by level, style, or format to find the perfect fit for you.
          </p>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className={styles.pattern}></div>
    </section>
  );
}
