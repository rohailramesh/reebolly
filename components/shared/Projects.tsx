"use client";

import { useState } from "react";
import Image from "next/image";
import events from "@/data/events.json"; // Import the events data
import styles from "@/components/shared/HomePage.module.css";
export default function Project() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <>
      <h1
        className={`text-center text-2xl font-bold mb-2 ${styles.projectsHeading}`}
      >
        PROJECTS
      </h1>
      {/* Grid Container */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${styles.experienceGrid}`}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className={`relative w-full h-96 transition-all duration-500 transform-style-preserve-3d ${
              flippedIndex === event.id ? "rotate-y-180" : ""
            }`}
            onClick={() =>
              setFlippedIndex(flippedIndex === event.id ? null : event.id)
            }
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 backface-hidden transition-opacity duration-500 rounded-xl  ${
                flippedIndex === event.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full p-5">
                {/* Event Name */}
                <p className="mt-15 text-lg font-semibold text-black">
                  {event.name}
                </p>
                {/* Event Image */}
                <Image
                  src={event.imgSrc}
                  alt={event.name}
                  width={event.width}
                  height={event.height}
                  className="rounded-lg object-cover mt-1"
                />
                {/* Click Prompt */}
                <div className="mt-4 flex flex-col items-center">
                  <img
                    src="/assets/icons/tap.svg"
                    alt="Click Icon"
                    className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  <span className="text-lg font-semibold text-black transition-opacity duration-300 group-hover:opacity-75">
                    Click Me!
                  </span>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 backface-hidden rotate-y-180 transition-opacity duration-500 rounded-xl shadow-lg bg-white ${
                flippedIndex === event.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full p-6 flex flex-col justify-center text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-500 underline"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
