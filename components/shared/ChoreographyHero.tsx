"use client";
import React from "react";
import styles from "./ChoreographyHero.module.css";

export default function ChoreographyHero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.content}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>PERSONALISED CHOREOGRAPHY</p>

          {/* Main Headlines */}
          <h1 className={styles.heading}>
            <span className={styles.headlineLine}>YOUR MOMENT.</span>
            <span className={styles.headlineLine}>YOUR MUSIC.</span>
            <span className={styles.headlineLine}>YOUR CHOREOGRAPHY.</span>
          </h1>

          {/* Supporting Text */}
          <p className={styles.description}>
            Personalised Bollywood choreography for weddings, celebrations 
            and special moments. Make your event unforgettable with bespoke 
            dance routines created just for you.
          </p>
        </div>
      </div>

      {/* Decorative Overlay */}
      <div className={styles.overlay}></div>
    </section>
  );
}
