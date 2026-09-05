"use client";
import React from "react";
import styles from "./ReeBollyStory.module.css";

export default function ReeBollyStory() {
  return (
    <section className={styles.section}>
      <div className="wrapper-narrow">
        {/* Main Quote */}
        <div className={styles.quoteWrapper}>
          <h2 className={styles.quote}>
            "Dance is how I connect, create, and express."
          </h2>
        </div>

        {/* Story */}
        <div className={styles.storyWrapper}>
          <div className={styles.storyBox}>
            <h3 className={styles.storyTitle}>The Story Behind "ReeBolly"</h3>
            <p className={styles.storyText}>
              The name <strong>"ReeBolly"</strong> combines the first three letters 
              of my name, <strong>"Ree"</strong>, with my deep passion for Bollywood 
              dance, represented by <strong>"Bolly"</strong>. Together, they form 
              the perfect expression of my vibrant and creative spirit.
            </p>
          </div>

          <div className={styles.philosophy}>
            <h3 className={styles.philosophyTitle}>What I Believe</h3>
            <p className={styles.philosophyText}>
              Dance shouldn't be about being the best dancer in the room. It should 
              be about feeling confident enough to move, express yourself, and enjoy 
              the experience. That's what ReeBolly is all about—creating a space where 
              everyone feels welcome to explore movement, build confidence, and have fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
