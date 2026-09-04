"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./ChoreographyEnquiry.module.css";

export default function ChoreographyEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    numberOfPerformers: "",
    experienceLevel: "",
    songPreferences: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="choreography-enquiry" className={styles.section}>
      <div className="wrapper-narrow">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>LET'S CREATE SOMETHING SPECIAL</h2>
          <p className={styles.description}>
            Fill in the form below and we'll get back to you within 24 hours to 
            discuss your vision and how we can bring it to life.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/reebollyr@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_subject" value="New Choreography Enquiry" />
          <input type="hidden" name="_template" value="table" />

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+44 XXX XXX XXXX"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="eventType" className={styles.label}>
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="eventDate" className={styles.label}>
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="numberOfPerformers" className={styles.label}>
                Number of Performers
              </label>
              <input
                type="number"
                id="numberOfPerformers"
                name="numberOfPerformers"
                value={formData.numberOfPerformers}
                onChange={handleChange}
                className={styles.input}
                placeholder="e.g., 5"
                min="1"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="experienceLevel" className={styles.label}>
              Dance Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner (Never danced before)</option>
              <option value="some">Some Experience</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="mixed">Mixed Group</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="songPreferences" className={styles.label}>
              Song Preferences (Optional)
            </label>
            <input
              type="text"
              id="songPreferences"
              name="songPreferences"
              value={formData.songPreferences}
              onChange={handleChange}
              className={styles.input}
              placeholder="Do you have specific songs in mind?"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Tell Us More About Your Vision *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={styles.textarea}
              placeholder="Share any details about your event, what you're looking for, and any special requirements..."
            />
          </div>

          <Button type="submit" className={styles.submitButton}>
            Send Enquiry →
          </Button>
        </form>
      </div>
    </section>
  );
}
