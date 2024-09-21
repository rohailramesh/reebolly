"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
      <div>
        <h1>All Events</h1>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event) => (
            <div key={event._id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <img src={event.imageUrl} alt={event.title} width="200" />
              <p>Start: {new Date(event.startDateTime).toLocaleString()}</p>
              <p>End: {new Date(event.endDateTime).toLocaleString()}</p>
              <p>{event.price}</p>
              <Link href={`/events/${event._id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllEvents;
