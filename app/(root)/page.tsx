"use client";
import React from "react";
import Hero from "@/components/shared/Hero";
import WhatBringsYouHere from "@/components/shared/WhatBringsYouHere";
import ReeBollyExperience from "@/components/shared/ReeBollyExperience";
import AllEvents from "@/components/shared/AllEvents";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/shared/ContactForm";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import testimonials from "@/data/testimonials.json";
import { Button } from "@/components/ui/button";
import styles from "@/components/shared/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      {/* New Hero Section */}
      <Hero />

      {/* What Brings You Here Section */}
      <WhatBringsYouHere />

      {/* The ReeBolly Experience Section */}
      <ReeBollyExperience />
      {/* Upcoming Events Section */}
      <section>
        <AllEvents />
      </section>
      {/* Testimonials Section */}
      <section className="section-sm">
        <TestimonialSlider testimonials={testimonials} />
      </section>

      {/* Contact Form Section */}
      <section className="section-sm">
        <ContactForm />
      </section>
    </>
  );
};

export default HomePage;
