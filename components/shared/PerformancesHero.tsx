"use client";
import React from "react";
import Link from "next/link";
import styles from "./PerformancesHero.module.css";

export default function PerformancesHero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.content}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>PROFESSIONAL PERFORMANCES</p>

          {/* Main Headline */}
          <h1 className={styles.heading}>
            BRING REEBOLLY TO YOUR EVENT
          </h1>

          {/* Supporting Text */}
          <p className={styles.description}>
            Energetic Bollywood and fusion performances for festivals, 
            celebrations, corporate events, and cultural gatherings. 
            Create unforgettable moments with dynamic choreography and 
            professional presentation.
          </p>

          {/* CTA */}
          <div className={styles.ctaWrapper}>
            <Link href="#performance-enquiry" className={styles.cta}>
              Book a Performance
            </Link>
            <Link href="#portfolio" className={styles.secondaryCta}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Overlay */}
      <div className={styles.overlay}></div>
    </section>
  );
}
