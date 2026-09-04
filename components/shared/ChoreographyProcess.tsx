"use client";
import React from "react";
import styles from "./ChoreographyProcess.module.css";

const steps = [
  {
    number: "01",
    title: "ENQUIRE",
    description: "Tell us about your event, your vision, and what you'd like to achieve.",
  },
  {
    number: "02",
    title: "CREATE",
    description: "We develop the concept and choreography tailored to your group and music.",
  },
  {
    number: "03",
    title: "LEARN",
    description: "Rehearsals are adapted to your group's skill level and schedule.",
  },
  {
    number: "04",
    title: "PERFORM",
    description: "Bring it to life and create unforgettable memories on your special day.",
  },
];

export default function ChoreographyProcess() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>HOW IT WORKS</h2>
          <p className={styles.description}>
            A simple, personalized journey from initial enquiry to your spectacular performance.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
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
      </div>
    </section>
  );
}
