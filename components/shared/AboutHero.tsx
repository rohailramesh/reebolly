"use client";
import React from "react";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.container}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/images/intropic.jpeg"
                alt="Reeha Ramesh - Founder of ReeBolly"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={styles.contentColumn}>
            <p className={styles.eyebrow}>MEET REEHA</p>
            <h1 className={styles.heading}>
              Founder of ReeBolly
            </h1>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                I'm Reeha Ramesh, a dance artist, choreographer, and educator based 
                in London. Dance has been my passion since childhood, and I've been 
                fortunate to turn that passion into a profession.
              </p>
              <p className={styles.paragraph}>
                With a <strong>BA (Hons) in Dance</strong> and <strong>three years 
                of academic study in Physiotherapy</strong>, I bring together artistic 
                expression, technical training, and an understanding of movement and 
                body awareness to create unique dance experiences.
              </p>
              <p className={styles.paragraph}>
                Through styles like Afro, Hip-Hop, Contemporary, Semi-Classical, and 
                Bachata—all with a vibrant Bollywood twist—I help people of all levels 
                discover the joy of movement and build confidence through dance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
