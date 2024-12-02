"use client";
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
      {/* Origin Story Section */}
      <section>
        {/* <h2 className="h2-bold">My upcoming workshops!</h2> */}
        <AllEvents />
      </section>
      <section
        className={`bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ${styles.mySelf}`}
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-[#643a4e]">ReeBolly</h1>
            <div className="bg-[#f9f1f5] p-5 rounded-lg border-l-4 border-[#643a4e] shadow-sm">
              <h2 className="font-semibold text-xl md:text-2xl text-[#643a4e] mb-2">
                The Story Behind "ReeBolly"
              </h2>
              <p className="text-gray-700 md:text-lg">
                The name{" "}
                <span className="font-bold text-[#643a4e]">"ReeBolly"</span> was
                born from
                <span className="italic text-[#643a4e]"> Reeha's</span> first
                three letters,
                <span className="font-semibold text-[#643a4e]"> "Ree"</span>,
                and her deep passion for Bollywood dance, represented by{" "}
                <span className="font-semibold text-[#643a4e]">"Bolly"</span>.
                Together, they form the perfect expression of her vibrant and
                creative spirit.
              </p>
            </div>
          </div>

          <Image
            src="/assets/images/intropic.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg"
          />
          <p className="p-regular-20 md:p-regular-24">
            Reeha has been passionately dancing since childhood and is
            professionally trained. She brings the joy of movement to life
            through styles like Afro, Hip-Hop, Contemporary, Semi-Classical, and
            Bachata, with a Bollywood twist. Whether you're a beginner or a
            seasoned dancer, her workshops and tutorials are designed to
            inspire, energise, and get you moving. Ready to hit the dance floor?
            Join one of her workshops today!
          </p>
          <Link href="/work">
            <Button
              className={`w-full flex flex-col justify-center ${styles.btn}`}
            >
              What I offer?
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
