"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video
          className={styles.heroVideo}
          src="https://errgx59tzy.ufs.sh/f/iYlJlfjQAbJKcNCJF5I60ad1LGYziMIrZmwDsce5FW8fvjtE"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/intropic.jpeg"
        />
        {/* Gradient overlay for better text readability */}
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className="wrapper">
          <div className={styles.contentWrapper}>
            {/* Eyebrow */}
            <p className={styles.eyebrow}>WELCOME TO REEBOLLY</p>

            {/* Main Headlines */}
            <h1 className={styles.mainHeadline}>
              <span className={styles.headlineLine}>MOVE.</span>
              <span className={styles.headlineLine}>EXPRESS.</span>
              <span className={styles.headlineLine}>BECOME.</span>
            </h1>

            {/* Supporting Copy */}
            <p className={styles.supportingCopy}>
              Bollywood & fusion dance experiences in London
              <br />
              for every body and every story.
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <Button asChild size="lg" className={styles.primaryCta}>
                <Link href="/#all-events">JOIN A WORKSHOP</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={styles.secondaryCta}
              >
                <Link href="#what-brings-you-here">EXPLORE EXPERIENCES</Link>
              </Button>
            </div>

            {/* Credibility Line */}
            <p className={styles.credibility}>
              Founded by Reeha Ramesh — Dance Artist, Choreographer & Educator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
