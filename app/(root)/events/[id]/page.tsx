"use client";
import React, { useEffect, useState } from "react";
import CheckoutPage from "@/components/shared/CheckoutPage";
import Image from "next/image";
import styles from "@/components/shared/EventPage.module.css";
import { convertToSubcurrency } from "@/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation"; // Import useParams for client-side routing
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
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

const EventPage = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const res = await fetch(`/api/events?id=${id}`); // Fetch event by ID
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          const data = await res.json();
          setEvent(data);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };

      fetchEvent();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.eventDetails}>
        <h1 className={styles.title}>{event.title}</h1>
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={800}
          height={500}
          className={styles.image}
        />
        <p className={styles.description}>{event.description}</p>
        <p className={styles.location}>Location: {event.location}</p>
        <p className={styles.dateTime}>
          Start: {new Date(event.startDateTime).toLocaleString()}
        </p>
        <p className={styles.dateTime}>
          End: {new Date(event.endDateTime).toLocaleString()}
        </p>
        <p className={styles.price}>Price: £{event.price}</p>
      </div>

      <div className={styles.checkoutSection}>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(event.price),
            currency: "gbp",
          }}
        >
          <CheckoutPage amount={event.price} />
        </Elements>
      </div>
    </div>
  );
};

export default EventPage;

// "use client";
// import React from "react";
// import CheckoutPage from "@/components/shared/CheckoutPage";
// import { convertToSubcurrency } from "@/lib/utils";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useParams } from "next/navigation"; // Import useParams for client-side routing

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// }
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// export default function EventPage() {
//   const params = useParams();
//   const { id } = params;
//   console.log(id);

//   const amount = 50;

//   return (
//     <>
//       <div>Event id: {id}</div>
//       <h1>Event price: £{amount}</h1>
//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubcurrency(amount),
//           currency: "gbp",
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </>
//   );
// }
