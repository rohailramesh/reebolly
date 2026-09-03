"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./ReeBollyExperience.module.css";

const stages = [
  {
    number: "01",
    title: "FOUNDATION",
    description:
      "Build a strong base with the fundamentals of movement and Bollywood dance.",
  },
  {
    number: "02",
    title: "MOVEMENT",
    description:
      "Develop coordination, musicality, technique and body awareness.",
  },
  {
    number: "03",
    title: "EXPRESSION",
    description: "Find your style, confidence and unique expression.",
  },
  {
    number: "04",
    title: "PERFORMANCE",
    description:
      "Take your learning to the stage and experience the power of performance.",
  },
];

export default function ReeBollyExperience() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>THE REEBOLLY EXPERIENCE</h2>
          <h3 className={styles.subHeading}>
            A JOURNEY THROUGH MOVEMENT AND EXPRESSION.
          </h3>
          <p className={styles.description}>
            Our approach is designed to help you build confidence, understand
            your body and fall in love with dance.
          </p>
        </div>

        {/* Journey Stages */}
        <div className={styles.journeyContainer}>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.number}>
              <div className={styles.stage}>
                {/* Stage Number */}
                <div className={styles.stageNumber}>{stage.number}</div>

                {/* Stage Content */}
                <div className={styles.stageContent}>
                  <h4 className={styles.stageTitle}>{stage.title}</h4>
                  <p className={styles.stageDescription}>
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector (except after last stage) */}
              {index < stages.length - 1 && (
                <div className={styles.connector}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrow}
                  >
                    <path
                      d="M15 10L25 20L15 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Button asChild size="lg" className={styles.cta}>
            <Link href="/work">OUR APPROACH →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
