"use client";
import React from "react";
import styles from "./PerformanceTypes.module.css";

const performanceTypes = [
  {
    id: 1,
    icon: "🎪",
    title: "Festivals",
    description: "Energetic performances for cultural festivals, community celebrations, and outdoor events.",
  },
  {
    id: 2,
    icon: "🎭",
    title: "Cultural Events",
    description: "Authentic Bollywood and fusion performances for Diwali, Navratri, and cultural showcases.",
  },
  {
    id: 3,
    icon: "🏢",
    title: "Corporate Events",
    description: "Professional entertainment for corporate functions, team building, and company celebrations.",
  },
  {
    id: 4,
    icon: "💒",
    title: "Weddings",
    description: "Spectacular performances to make wedding celebrations even more memorable and vibrant.",
  },
  {
    id: 5,
    icon: "🎉",
    title: "Private Events",
    description: "Tailored performances for birthday parties, anniversaries, and special milestone celebrations.",
  },
  {
    id: 6,
    icon: "🌍",
    title: "Community Events",
    description: "Engaging performances for schools, universities, and community outreach programs.",
  },
];

export default function PerformanceTypes() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>PERFORMANCE EXPERIENCES</h2>
          <p className={styles.description}>
            From intimate gatherings to large-scale festivals, we bring energy, 
            professionalism, and unforgettable entertainment to every event.
          </p>
        </div>

        {/* Types Grid */}
        <div className={styles.grid}>
          {performanceTypes.map((type) => (
            <div key={type.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{type.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{type.title}</h3>
              <p className={styles.cardDescription}>{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
