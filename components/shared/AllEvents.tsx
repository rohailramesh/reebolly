"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Use Next.js Image for optimization
import styles from "@/components/shared/HomePage.module.css"; // Adjust the path as necessary
import cardStyles from "@/components/shared/Card.module.css"; // Adjust the path as necessary
import { formatDateTime } from "@/lib/utils"; // Assuming you have a utility for formatting dates
import { Button } from "../ui/button";

type Event = {
  _id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;
};

const AllEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div id="all-events" className="section bg-champagne">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="heading-editorial text-4xl md:text-5xl mb-4">
              WHAT'S COMING UP
            </h2>
            <p className="font-sans text-lg text-espresso/80 max-w-2xl mx-auto">
              Join us for upcoming workshops, classes, and dance experiences designed for all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.length === 0 ? (
              <div className="col-span-full">
                <h3
                  className={`text-center text-2xl font-bold mb-8 ${cardStyles.noEvents}`}
                >
                  No events found... Check back later!
                </h3>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event._id}
                  className="group relative flex flex-col bg-ivory border-2 border-champagne rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:border-terracotta hover:-translate-y-2 min-h-[600px]"
                >
                  <Link href={`/events/${event._id}`} className="relative h-48 overflow-hidden">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <Link href={`/events/${event._id}`}>
                      <h2 className="text-xl font-semibold font-serif text-espresso hover:text-terracotta transition-colors">
                        {event.title}
                      </h2>
                    </Link>
                    
                    <p className="text-sm text-espresso/80 font-sans line-clamp-2 flex-shrink-0">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col gap-2 mt-auto">
                      <p className="text-sm text-espresso/70 font-sans flex items-center gap-2">
                        <span>📍</span> {event.location}
                      </p>
                      <p className="text-sm text-espresso/70 font-sans flex items-center gap-2">
                        <span>🕒</span> {formatDateTime(event.startDateTime).dateTime}
                      </p>
                      <p className="text-xl font-bold text-terracotta font-sans mt-2">
                        {event.price > 0 ? `£${event.price}` : "FREE"}
                      </p>
                    </div>
                    
                    <Button
                      asChild
                      className="rounded-full w-full mt-4 bg-terracotta text-ivory hover:bg-terracotta-dark"
                      size="default"
                    >
                      <Link href={`/events/${event._id}`}>View Details →</Link>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvents;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// type Event = {
//   _id: string;
//   title: string;
//   description: string;
//   location: string;
//   imageUrl: string;
//   startDateTime: Date;
//   endDateTime: Date;
//   price: number;
// };

// const AllEvents = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch("/api/events");
//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         const data = await res.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error as Error);
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <>
//       <div>
//         <h1>All Events</h1>
//         {events.length === 0 ? (
//           <p>No events found.</p>
//         ) : (
//           events.map((event) => (
//             <div key={event._id}>
//               <h2>{event.title}</h2>
//               <p>{event.description}</p>
//               <p>{event.location}</p>
//               <img src={event.imageUrl} alt={event.title} width="200" />
//               <p>Start: {new Date(event.startDateTime).toLocaleString()}</p>
//               <p>End: {new Date(event.endDateTime).toLocaleString()}</p>
//               <p>{event.price}</p>
//               <Link href={`/events/${event._id}`}>
//                 <button>View Details</button>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default AllEvents;
