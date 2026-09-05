"use client";
import React, { useState } from "react";
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
    icon: "💃",
  },
  {
    id: 2,
    title: "I WANT TO PERFORM",
    description:
      "Bring ReeBolly energy to your next event or celebration.",
    image: "/assets/images/performer1.jpeg",
    cta: "BOOK A PERFORMANCE →",
    href: "/#contact-form",
    icon: "🎭",
  },
  {
    id: 3,
    title: "I WANT TO CREATE",
    description:
      "Personalised choreography for weddings, celebrations and special occasions.",
    image: "/assets/images/choreographer.jpeg",
    cta: "BOOK CHOREOGRAPHY →",
    href: "/#contact-form",
    icon: "✨",
  },
  {
    id: 4,
    title: "I WANT TO COLLABORATE",
    description: "Let's create something meaningful together.",
    image: "/assets/images/choreo1.jpeg",
    cta: "LET'S COLLABORATE →",
    href: "/#contact-form",
    icon: "🤝",
  },
];

export default function WhatBringsYouHere() {
  const [openDoor, setOpenDoor] = useState<number | null>(null);

  const handleDoorClick = (id: number) => {
    setOpenDoor(openDoor === id ? null : id);
  };

  return (
    <section id="what-brings-you-here" className={styles.section}>
      <div className="wrapper">
        {/* Section Heading */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.mainHeading}>WHAT BRINGS YOU HERE?</h2>
          <p className={styles.subHeading}>Click on each door to discover your path</p>
        </div>

        {/* Doors Grid */}
        <div className={styles.doorsGrid}>
          {pathways.map((pathway) => (
            <div
              key={pathway.id}
              className={`${styles.doorContainer} ${
                openDoor === pathway.id ? styles.doorOpen : ""
              }`}
            >
              {/* Door Front */}
              <div
                className={styles.doorFront}
                onClick={() => handleDoorClick(pathway.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleDoorClick(pathway.id);
                  }
                }}
                aria-label={`Open ${pathway.title}`}
                aria-expanded={openDoor === pathway.id}
              >
                <div className={styles.doorPanel}>
                  <div className={styles.doorIcon} aria-hidden="true">{pathway.icon}</div>
                  <h3 className={styles.doorTitle}>{pathway.title}</h3>
                  <div className={styles.doorHandle} aria-hidden="true"></div>
                  <div className={styles.doorKnockPrompt} aria-hidden="true">
                    <span className={styles.tapIcon}>👆</span>
                    <span className={styles.tapText}>Tap to open</span>
                  </div>
                </div>
              </div>

              {/* Door Back (Revealed Content) */}
              <div className={styles.doorBack}>
                <div className={styles.doorBackContent}>
                  {/* Image */}
                  <div className={styles.revealedImageContainer}>
                    <Image
                      src={pathway.image}
                      alt={pathway.title}
                      fill
                      className={styles.revealedImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>

                  {/* Content */}
                  <div className={styles.revealedContent}>
                    <h3 className={styles.revealedTitle}>{pathway.title}</h3>
                    <p className={styles.revealedDescription}>
                      {pathway.description}
                    </p>
                    <Link href={pathway.href} className={styles.revealedCta}>
                      {pathway.cta}
                    </Link>
                  </div>

                  {/* Close Button */}
                  <button
                    className={styles.closeButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDoor(null);
                    }}
                    aria-label="Close door"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
