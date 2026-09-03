"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./MeetReeha.module.css";

export default function MeetReeha() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.container}>
          {/* Left Side - Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/images/intropic.jpeg"
                alt="Reeha Ramesh - Dance Artist, Choreographer & Educator"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.contentColumn}>
            <div className={styles.content}>
              {/* Eyebrow */}
              <p className={styles.eyebrow}>MEET REEHA</p>

              {/* Title */}
              <h2 className={styles.title}>
                Founder of ReeBolly
              </h2>

              {/* Main Headline */}
              <h3 className={styles.headline}>
                DANCE IS HOW I CONNECT, CREATE AND EXPRESS.
              </h3>

              {/* Bio Content */}
              <div className={styles.bioContent}>
                <p className={styles.paragraph}>
                  Reeha has been passionately dancing since childhood and is professionally 
                  trained with a <strong>BA (Hons) in Dance</strong>. She brings the joy of 
                  movement to life through styles like Afro, Hip-Hop, Contemporary, 
                  Semi-Classical, and Bachata, all with a vibrant Bollywood twist.
                </p>

                <p className={styles.paragraph}>
                  With <strong>three years of academic study in Physiotherapy</strong>, Reeha 
                  brings together artistic expression, dance training and an understanding of 
                  movement and body awareness—creating a unique approach that helps dancers 
                  of all levels build confidence and find their rhythm.
                </p>

                <p className={styles.paragraph}>
                  Whether you're a complete beginner or a seasoned dancer, ReeBolly workshops 
                  are designed to inspire, energise, and help you discover the joy of movement. 
                  It's not about being perfect—it's about expressing yourself and having fun.
                </p>

                {/* Story Behind ReeBolly */}
                <div className={styles.storyBox}>
                  <h4 className={styles.storyTitle}>The Story Behind "ReeBolly"</h4>
                  <p className={styles.storyText}>
                    The name <strong>"ReeBolly"</strong> combines <em>Reeha's</em> first 
                    three letters, <strong>"Ree"</strong>, with her deep passion for 
                    Bollywood dance, represented by <strong>"Bolly"</strong>. Together, 
                    they form the perfect expression of her vibrant and creative spirit.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Button asChild size="lg" className={styles.cta}>
                <Link href="/work">MY STORY →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
