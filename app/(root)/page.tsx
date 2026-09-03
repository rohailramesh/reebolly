"use client";
import React from "react";
import Hero from "@/components/shared/Hero";
import WhatBringsYouHere from "@/components/shared/WhatBringsYouHere";
import ReeBollyExperience from "@/components/shared/ReeBollyExperience";
import AllEvents from "@/components/shared/AllEvents";
import MeetReeha from "@/components/shared/MeetReeha";
import ReeBollyInAction from "@/components/shared/ReeBollyInAction";
import CommunityStory from "@/components/shared/CommunityStory";
import WorkWithReeBolly from "@/components/shared/WorkWithReeBolly";
import { ContactForm } from "@/components/shared/ContactForm";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import testimonials from "@/data/testimonials.json";

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
      <AllEvents />

      {/* Meet Reeha Section */}
      <MeetReeha />

      {/* ReeBolly In Action Section */}
      <ReeBollyInAction />

      {/* Community Story Section */}
      <CommunityStory />

      {/* Testimonials Section */}
      <section className="section-sm">
        <TestimonialSlider testimonials={testimonials} />
      </section>

      {/* Work With ReeBolly Section */}
      <WorkWithReeBolly />

      {/* Contact Form Section */}
      <section className="section-sm">
        <ContactForm />
      </section>
    </>
  );
};

export default HomePage;
