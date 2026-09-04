"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./EmptyState.module.css";

export default function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Icon */}
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>📅</span>
        </div>

        {/* Heading */}
        <h3 className={styles.heading}>Nothing scheduled just yet.</h3>

        {/* Description */}
        <p className={styles.description}>
          We're working on new workshops and classes. Be the first to know when
          they're available!
        </p>

        {/* CTA */}
        <Button asChild size="lg" className={styles.cta}>
          <Link href="/#contact-form">JOIN THE MAILING LIST</Link>
        </Button>

        {/* Secondary CTA */}
        <Link href="/" className={styles.secondaryLink}>
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
