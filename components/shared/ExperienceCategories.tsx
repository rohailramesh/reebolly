"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./ExperienceCategories.module.css";

const categories = [
  {
    id: "beginner",
    title: "BEGINNER",
    subtitle: "Begin your dance journey",
    description:
      "Perfect for those taking their first steps into Bollywood dance. Build confidence, learn fundamentals, and discover the joy of movement in a welcoming space.",
    image: "/assets/images/instructor.jpeg",
    duration: "4-8 weeks",
    level: "Absolute Beginner",
    highlights: [
      "No experience needed",
      "Fundamentals focused",
      "Supportive environment",
      "Small group sizes",
    ],
    cta: "Explore Beginner Experiences",
    href: "/#all-events?filter=beginner",
  },
  {
    id: "feminine-flow",
    title: "FEMININE FLOW",
    subtitle: "Confidence, expression and movement",
    description:
      "Embrace grace, power and feminine expression through movement. Explore fluidity, confidence and self-expression in this empowering dance experience.",
    image: "/assets/images/performer1.jpeg",
    duration: "Single session or series",
    level: "Open Level",
    highlights: [
      "Feminine energy",
      "Graceful movement",
      "Body confidence",
      "Expressive choreography",
    ],
    cta: "Explore Feminine Flow",
    href: "/#all-events?filter=feminine-flow",
  },
  {
    id: "fusion",
    title: "FUSION",
    subtitle: "Bollywood meets contemporary",
    description:
      "Experience the best of both worlds. Bollywood energy combined with contemporary, hip-hop, and other dance styles for a unique fusion experience.",
    image: "/assets/images/choreo1.jpeg",
    duration: "Workshops & series",
    level: "Improver",
    highlights: [
      "Genre blending",
      "Creative choreography",
      "Contemporary influence",
      "Dynamic movement",
    ],
    cta: "Explore Fusion",
    href: "/#all-events?filter=fusion",
  },
  {
    id: "special-events",
    title: "SPECIAL EVENTS",
    subtitle: "One-off themed experiences",
    description:
      "Limited-time themed workshops and special events. From festival celebrations to seasonal specials, these unique experiences bring something extra.",
    image: "/assets/images/mmuk-event.jpeg",
    duration: "One-time events",
    level: "Various",
    highlights: [
      "Themed experiences",
      "Seasonal celebrations",
      "Guest collaborations",
      "Unique choreography",
    ],
    cta: "See Upcoming Events",
    href: "/#all-events?filter=special",
  },
  {
    id: "private",
    title: "PRIVATE EXPERIENCES",
    subtitle: "Personalised group sessions",
    description:
      "Book a private session tailored to your group. Perfect for hen parties, birthday celebrations, team building, or friends wanting a bespoke dance experience.",
    image: "/assets/images/choreographer.jpeg",
    duration: "Custom",
    level: "All Levels",
    highlights: [
      "Fully customizable",
      "Your choice of music",
      "Flexible scheduling",
      "Group bonding",
    ],
    cta: "Enquire About Private Sessions",
    href: "/#contact-form",
  },
];

export default function ExperienceCategories() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Section Intro */}
        <div className={styles.intro}>
          <h2 className={styles.sectionHeading}>
            FIND YOUR EXPERIENCE
          </h2>
          <p className={styles.sectionDescription}>
            Whether you're a complete beginner or looking to expand your dance repertoire, 
            there's an experience designed for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${
                index === categories.length - 1 ? styles.fullWidth : ""
              }`}
            >
              {/* Image Section */}
              <div className={styles.imageWrapper}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
                
                {/* Badge */}
                <div className={styles.badge}>
                  <span className={styles.badgeText}>{category.level}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardSubtitle}>{category.subtitle}</p>
                </div>

                <p className={styles.cardDescription}>
                  {category.description}
                </p>

                {/* Details */}
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.detailIcon}>⏱️</span>
                    <span className={styles.detailText}>{category.duration}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailIcon}>📊</span>
                    <span className={styles.detailText}>{category.level}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {category.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlight}>
                      <span className={styles.checkmark}>✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button asChild className={styles.cta}>
                  <Link href={category.href}>{category.cta} →</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
