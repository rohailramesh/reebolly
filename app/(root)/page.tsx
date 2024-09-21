import React from "react";
import VideoDisplay from "@/components/shared/VideoDisplay";
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
      <section className="h-[80vh] w-full">
        {/* Video section */}
        <VideoDisplay />
      </section>
      <section>
        <h2 className="h2-bold">My upcoming workshops!</h2>
        <AllEvents />
      </section>
      <section
        className={`bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ${styles.mySelf}`}
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">ReeBolly</h1>
            <p className="p-regular-20 md:p-regular-24">
              Reeha is a trained dancer for 5+ years but has a passion of
              dancing since childhood. Spreading the love of dance and life
              through dance styles such as Afro, Hip-Hop, Contemppary,
              Semi-Classical and Bachata through Bollywood workshops and
              tutorials. Already on your toes after reading this? Join me in one
              of my workshops!
            </p>
          </div>

          <Image
            src="/assets/images/intro-pic.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />

          <Link href="/work">
            <Button
              className={`w-full flex flex-col justify-center ${styles.btn}`}
            >
              My Journey
            </Button>
          </Link>
        </div>
      </section>
      {/* <section>
        <Experience testimonials={testimonials} />
      </section> */}
      <div className="flex-1">
        <TestimonialSlider testimonials={testimonials} />
      </div>
      <div className={`flex-1 ${styles.contactForm}`}>
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;
