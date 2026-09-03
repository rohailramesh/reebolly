"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WhatBringsYouHere.module.css";

const pathways = [
  {
    id: 1,
    title: "I WANT TO DANCE",
    description:
      "Join workshops and classes designed for different levels and experience.",
    image: "/assets/images/instructor.jpeg",
    cta: "EXPLORE CLASSES →",
    href: "/#all-events",
  },
  {
    id: 2,
    title: "I WANT TO PERFORM",
    description:
      "Bring ReeBolly energy to your next event or celebration.",
    image: "/assets/images/performer1.jpeg",
    cta: "BOOK A PERFORMANCE →",
    href: "/#contact-form",
  },
  {
    id: 3,
    title: "I WANT TO CREATE",
    description:
      "Personalised choreography for weddings, celebrations and special occasions.",
    image: "/assets/images/choreographer.jpeg",
    cta: "BOOK CHOREOGRAPHY →",
    href: "/#contact-form",
  },
  {
    id: 4,
    title: "I WANT TO COLLABORATE",
    description: "Let's create something meaningful together.",
    image: "/assets/images/choreo1.jpeg",
    cta: "LET'S COLLABORATE →",
    href: "/#contact-form",
  },
];

export default function WhatBringsYouHere() {
  return (
    <section id="what-brings-you-here" className={styles.section}>
      <div className="wrapper">
        {/* Section Heading */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.mainHeading}>WHAT BRINGS YOU HERE?</h2>
        </div>

        {/* Pathway Cards Grid */}
        <div className={styles.cardsGrid}>
          {pathways.map((pathway) => (
            <Link
              key={pathway.id}
              href={pathway.href}
              className={styles.card}
            >
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={pathway.image}
                  alt={pathway.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{pathway.title}</h3>
                <p className={styles.cardDescription}>{pathway.description}</p>
                <span className={styles.cardCta}>{pathway.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
