"use client";
import React from "react";
import AboutHero from "@/components/shared/AboutHero";
import ReeBollyStory from "@/components/shared/ReeBollyStory";
import Credentials from "@/components/shared/Credentials";
import Experience from "@/components/shared/Experience";
import Project from "@/components/shared/Projects";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <ReeBollyStory />
      <Credentials />
      
      {/*/!* Experience Showcase *!/*/}
      {/*<section className="wrapper py-16 md:py-24 bg-champagne">*/}
      {/*  <Experience />*/}
      {/*</section>*/}

      {/*/!* Projects Showcase *!/*/}
      {/*<section className="wrapper py-16 md:py-24">*/}
      {/*  <Project />*/}
      {/*</section>*/}
    </>
  );
};

export default AboutPage;
