"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./PerformanceEnquiry.module.css";

export default function PerformanceEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    eventDate: "",
    location: "",
    audienceSize: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="performance-enquiry" className={styles.section}>
      <div className="wrapper-narrow">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>BOOK A PERFORMANCE</h2>
          <p className={styles.description}>
            Ready to bring vibrant Bollywood energy to your event? Fill in the 
            details below and we'll get back to you within 24 hours with availability 
            and pricing.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/reebollyr@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_subject" value="New Performance Booking Enquiry" />
          <input type="hidden" name="_template" value="table" />

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Contact Name *
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
              <label htmlFor="organization" className={styles.label}>
                Organization (if applicable)
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={styles.input}
                placeholder="Company or organization name"
              />
            </div>
          </div>

          <div className={styles.row}>
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
                <option value="festival">Festival</option>
                <option value="cultural">Cultural Event</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding</option>
                <option value="private">Private Event</option>
                <option value="community">Community Event</option>
                <option value="other">Other</option>
              </select>
            </div>

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
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="location" className={styles.label}>
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={styles.input}
                placeholder="City or venue"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="audienceSize" className={styles.label}>
                Expected Audience Size
              </label>
              <input
                type="text"
                id="audienceSize"
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleChange}
                className={styles.input}
                placeholder="Approximate number"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget" className={styles.label}>
              Budget Range (Optional)
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select budget range</option>
              <option value="under-500">Under £500</option>
              <option value="500-1000">£500 - £1,000</option>
              <option value="1000-2000">£1,000 - £2,000</option>
              <option value="2000-plus">£2,000+</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Event Details & Requirements *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={styles.textarea}
              placeholder="Tell us about your event, performance requirements, timing, and any special requests..."
            />
          </div>

          <Button type="submit" className={styles.submitButton}>
            Send Booking Enquiry →
          </Button>
        </form>
      </div>
    </section>
  );
}
