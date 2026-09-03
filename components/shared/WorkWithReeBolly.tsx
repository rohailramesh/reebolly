"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./WorkWithReeBolly.module.css";

const services = [
  {
    id: 1,
    icon: "🎭",
    title: "EVENTS",
    description: "Bring vibrant Bollywood performances to your festivals, celebrations, and corporate events.",
  },
  {
    id: 2,
    icon: "💒",
    title: "WEDDINGS",
    description: "Personalised choreography for your special day. Make your wedding unforgettable.",
  },
  {
    id: 3,
    icon: "🎓",
    title: "SCHOOLS & UNIVERSITIES",
    description: "Educational dance workshops and performances designed for students of all ages.",
  },
  {
    id: 4,
    icon: "🤝",
    title: "BRANDS & ORGANISATIONS",
    description: "Creative collaborations, campaigns, and bespoke dance experiences for your brand.",
  },
];

export default function WorkWithReeBolly() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>HAVE AN IDEA?</h2>
          <h3 className={styles.subHeading}>LET'S CREATE SOMETHING.</h3>
          <p className={styles.description}>
            From performances and choreography to workshops and creative collaborations, 
            let's build something memorable together.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Button asChild size="lg" className={styles.cta}>
            <Link href="/#contact-form">WORK WITH REEBOLLY →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
