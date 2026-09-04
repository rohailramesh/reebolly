"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";
import styles from "./ClassCard.module.css";

type Event = {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
  startDateTime: Date;
  endDateTime: Date;
};

interface ClassCardProps {
  event: Event;
}

export default function ClassCard({ event }: ClassCardProps) {
  return (
    <div className={styles.card}>
      {/* Image */}
      <Link href={`/events/${event._id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <Link href={`/events/${event._id}`}>
          <h3 className={styles.title}>{event.title}</h3>
        </Link>

        <p className={styles.description}>{event.description}</p>

        {/* Details */}
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.icon}>📍</span>
            <span className={styles.detailText}>{event.location}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.icon}>📅</span>
            <span className={styles.detailText}>
              {formatDateTime(event.startDateTime).dateOnly}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.icon}>🕒</span>
            <span className={styles.detailText}>
              {formatDateTime(event.startDateTime).timeOnly}
            </span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className={styles.footer}>
          <span className={styles.price}>
            {event.price > 0 ? `£${event.price}` : "FREE"}
          </span>
          <Button
            asChild
            className={styles.cta}
            size="sm"
          >
            <Link href={`/events/${event._id}`}>Book Now →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
