"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./CommunityStory.module.css";

// Sample community photos (using existing images as placeholders)
const communityPhotos = [
  {
    id: 1,
    src: "/assets/images/hounslow-mela.jpeg",
    alt: "Workshop group photo",
  },
  {
    id: 2,
    src: "/assets/images/performer1.jpeg",
    alt: "Performance moment",
  },
  {
    id: 3,
    src: "/assets/images/mmuk-event.jpeg",
    alt: "Event celebration",
  },
  {
    id: 4,
    src: "/assets/images/instructor.jpeg",
    alt: "Dance class in action",
  },
];

// Featured testimonials for this section
const featuredTestimonials = [
  {
    id: 1,
    quote: "ReeBolly is a safe, fun and empowering space. I grew in confidence and found my people.",
    name: "Saira T.",
    role: "Student",
  },
  {
    id: 2,
    quote: "Getting to work with Reeha in any capacity is always a pleasure. Her passion for dance shines through.",
    name: "Alyssa C.",
    role: "Dancer",
  },
];

export default function CommunityStory() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>MORE THAN A CLASS.</h2>
          <h3 className={styles.subHeading}>IT'S A COMMUNITY.</h3>
          <p className={styles.description}>
            Join a welcoming space where dancers of all levels come together to move, 
            express, and grow. This is where confidence blooms and friendships form.
          </p>
        </div>

        {/* Photo Grid */}
        <div className={styles.photoGrid}>
          {communityPhotos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={styles.photo}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={styles.testimonialsWrapper}>
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>
              <div className={styles.author}>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorRole}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Button asChild size="lg" className={styles.cta}>
            <Link href="#all-events">JOIN THE COMMUNITY →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
