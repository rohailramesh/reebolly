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
      <div id="all-events">
        <h1
          className={`text-center text-2xl font-bold mb-2 mt-2 text-white ${styles.workHeadings}`}
        >
          UPCOMING EVENTS
        </h1>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${cardStyles.eventsContainer}`}
        >
          {events.length === 0 ? (
            <h3
              className={`text-center text-2xl flex justify-center font-bold mb-8 text-orange-500 ${cardStyles.noEvents}`}
            >
              No events found... Check back later!
            </h3>
          ) : (
            events.map((event) => (
              <div
                key={event._id}
                className={`group relative flex flex-col overflow-hidden rounded-x shadow-md transition-all hover:shadow-lg ${cardStyles.card}`}
              >
                <Link href={`/events/${event._id}`}>
                  <div className={cardStyles.imageContainer}>
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      layout="responsive"
                      width={400}
                      height={400}
                      className="rounded-t-xl"
                    />
                  </div>
                </Link>

                <div className="flex flex-col p-5 gap-5">
                  <Link href={`/events/${event._id}`}>
                    <h2
                      className={`text-lg font-semibold ${styles.fontColour}`}
                    >
                      Event: {event.title}
                    </h2>
                  </Link>
                  <p className={`text-gray-400 ${styles.fontColour}`}>
                    Event info:{" "}
                    {event.description.length > 100
                      ? `${event.description.substring(0, 100)}...`
                      : event.description}
                  </p>
                  <p className={`text-gray-300 ${styles.fontColour}`}>
                    Location: {event.location}
                  </p>
                  <p className={`text-gray-300 ${styles.fontColour}`}>
                    Start: {formatDateTime(event.startDateTime).dateTime}
                  </p>
                  <p className={`text-gray-300 ${styles.fontColour}`}>
                    End: {formatDateTime(event.endDateTime).dateTime}
                  </p>
                  <p className={`text-gray-300 ${styles.fontColour}`}>
                    Price: {event.price > 0 ? `£${event.price}` : "FREE"}
                  </p>
                </div>
                <div className="flex justify-end p-3">
                  <Button
                    asChild
                    className={`rounded-full ${styles.btn}`}
                    size="sm"
                  >
                    <Link href={`/events/${event._id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))
          )}
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
