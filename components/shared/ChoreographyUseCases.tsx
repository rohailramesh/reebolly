"use client";
import React from "react";
import Link from "next/link";
import styles from "./ChoreographyUseCases.module.css";

const useCases = [
  {
    id: 1,
    icon: "💒",
    title: "Weddings",
    description: "Make your special day unforgettable with personalized wedding choreography for you and your loved ones.",
  },
  {
    id: 2,
    icon: "🎂",
    title: "Birthdays",
    description: "Celebrate in style with choreographed performances that make birthday celebrations truly memorable.",
  },
  {
    id: 3,
    icon: "👨‍👩‍👧‍👦",
    title: "Family Performances",
    description: "Bring your family together with fun, coordinated routines everyone can enjoy and perform.",
  },
  {
    id: 4,
    icon: "🎉",
    title: "Special Celebrations",
    description: "From anniversaries to engagements, add dance to your milestone moments.",
  },
  {
    id: 5,
    icon: "🏢",
    title: "Corporate Events",
    description: "Energize your team with unique choreographed performances for corporate gatherings.",
  },
  {
    id: 6,
    icon: "✨",
    title: "Friends & Groups",
    description: "Create lasting memories with choreography designed for friend groups and special occasions.",
  },
];

export default function ChoreographyUseCases() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>PERFECT FOR EVERY OCCASION</h2>
          <p className={styles.description}>
            From intimate gatherings to grand celebrations, create unforgettable 
            moments with bespoke choreography tailored to your event.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className={styles.grid}>
          {useCases.map((useCase) => (
            <div key={useCase.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{useCase.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.cardDescription}>{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Link href="#choreography-enquiry" className={styles.cta}>
            Start Your Journey →
          </Link>
        </div>
      </div>
    </section>
  );
}
