"use client";
import React from "react";
import Image from "next/image";
import styles from "./PerformancePortfolio.module.css";

const caseStudies = [
  {
    id: 1,
    name: "Hounslow Mela",
    type: "Festival",
    image: "/assets/images/hounslow-mela.jpeg",
    brief: "Deliver a high-energy Bollywood performance for a large outdoor crowd at one of London's premier cultural festivals.",
    performance: "A dynamic 15-minute Bollywood fusion performance showcasing traditional and contemporary choreography, engaging an audience of over 2,000 festival attendees.",
    impact: "Received outstanding feedback from event organizers and audience members, with many citing it as a festival highlight.",
  },
  {
    id: 2,
    name: "MMUK Diwali Event",
    type: "Cultural Event",
    image: "/assets/images/mmuk-event.jpeg",
    brief: "Create an authentic Diwali celebration performance combining traditional and modern Bollywood elements.",
    performance: "A culturally rich performance celebrating the Festival of Lights with vibrant choreography and stunning traditional costuming.",
    impact: "Standing ovation from 500+ guests, with requests for return bookings at future cultural celebrations.",
  },
  {
    id: 3,
    name: "Wedding Celebration",
    type: "Private Event",
    image: "/assets/images/performer1.jpeg",
    brief: "Provide entertainment for a wedding reception that would engage guests of all ages and create memorable moments.",
    performance: "An interactive performance featuring popular Bollywood hits, encouraging guest participation and creating an electric atmosphere.",
    impact: "Guests dancing along, viral social media moments, and glowing reviews from the bride and groom.",
  },
];

export default function PerformancePortfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>REEBOLLY IN ACTION</h2>
          <p className={styles.description}>
            See how we've brought energy, culture, and unforgettable entertainment 
            to events across London and beyond.
          </p>
        </div>

        {/* Case Studies */}
        <div className={styles.caseStudies}>
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.caseStudy} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
            >
              {/* Image */}
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={study.image}
                    alt={study.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.badge}>{study.type}</div>
                </div>
              </div>

              {/* Content */}
              <div className={styles.contentColumn}>
                <h3 className={styles.studyName}>{study.name}</h3>

                <div className={styles.studySection}>
                  <h4 className={styles.sectionTitle}>THE BRIEF</h4>
                  <p className={styles.sectionText}>{study.brief}</p>
                </div>

                <div className={styles.studySection}>
                  <h4 className={styles.sectionTitle}>THE PERFORMANCE</h4>
                  <p className={styles.sectionText}>{study.performance}</p>
                </div>

                <div className={styles.studySection}>
                  <h4 className={styles.sectionTitle}>THE IMPACT</h4>
                  <p className={styles.sectionText}>{study.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
