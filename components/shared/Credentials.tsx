"use client";
import React from "react";
import styles from "./Credentials.module.css";

const credentials = [
  {
    id: 1,
    icon: "🎓",
    title: "BA (Hons) Dance",
    description: "University degree in Dance, combining practical performance skills with theoretical knowledge and choreographic development.",
  },
  {
    id: 2,
    icon: "🩺",
    title: "Physiotherapy Studies",
    description: "Three years of academic study in Physiotherapy, providing deep understanding of movement, anatomy, and body awareness.",
  },
  {
    id: 3,
    icon: "🎭",
    title: "Professional Performer",
    description: "Experienced performer at festivals, cultural events, weddings, and corporate functions across London.",
  },
  {
    id: 4,
    icon: "✨",
    title: "Choreographer",
    description: "Creating bespoke choreography for weddings, celebrations, and special events, tailored to each client's vision.",
  },
  {
    id: 5,
    icon: "👩‍🏫",
    title: "Dance Educator",
    description: "Teaching Bollywood and fusion dance to students of all levels, from complete beginners to experienced dancers.",
  },
  {
    id: 6,
    icon: "🌟",
    title: "Multi-Style Specialist",
    description: "Trained in Afro, Hip-Hop, Contemporary, Semi-Classical, Bachata, and Bollywood dance styles.",
  },
];

export default function Credentials() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>EXPERIENCE & CREDENTIALS</h2>
          <p className={styles.description}>
            A unique blend of artistic training, academic study, and professional experience.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className={styles.grid}>
          {credentials.map((credential) => (
            <div key={credential.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{credential.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{credential.title}</h3>
              <p className={styles.cardDescription}>{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
