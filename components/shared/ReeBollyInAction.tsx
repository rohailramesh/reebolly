"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./ReeBollyInAction.module.css";

// Media items for the grid
const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "/assets/images/mmuk-event.jpeg",
    alt: "MMUK Diwali Event Performance",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    type: "image",
    src: "/assets/images/performer.jpeg",
    alt: "Wedding Performance",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    type: "image",
    src: "/assets/images/hounslow-mela.jpeg",
    alt: "Hounslow Mela Festival",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "image",
    src: "/assets/images/instructor.jpeg",
    alt: "Dance Workshop",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    type: "image",
    src: "/assets/images/choreographer.jpeg",
    alt: "Choreography Session",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    type: "image",
    src: "/assets/images/choreo1.jpeg",
    alt: "Group Choreography",
    span: "col-span-1 row-span-1",
  },
];

export default function ReeBollyInAction() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>REEBOLLY IN ACTION</h2>
          <p className={styles.description}>
            From workshops to performances, witness the energy and passion of dance.
          </p>
        </div>

        {/* Media Grid */}
        <div className={styles.grid}>
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.gridItem} ${item.span}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <p className={styles.caption}>{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className={styles.ctaWrapper}>
          <p className={styles.ctaText}>
            Follow the journey on Instagram
          </p>
          <Button asChild size="lg" className={styles.cta}>
            <Link 
              href="https://www.instagram.com/reebolly/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              FOLLOW @REEBOLLY →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
