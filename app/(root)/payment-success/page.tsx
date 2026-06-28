"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "@/components/shared/PaymentSuccess.module.css";

type Event = {
  _id: string;
  title: string;
  imageUrl: string;
  startDateTime: string;
  endDateTime: string;
};

const specialEventLinks: Record<string, string> = {
  "12TH July - PIYA TU AB TO AJAA - Online Dance class":
    "https://meet.google.com/mah-qwpr-hsd",
  "19TH July - JAWANI JANEMAN - Online Dance":
    "https://meet.google.com/zuq-khse-hty",
  "26TH JULY - HAWA HAWAI - ONLINE DANCE":
    "https://meet.google.com/mwu-kyvk-jcm",
};

const normalise = (str: string) =>
  str.trim().toLowerCase().replace(/\s+/g, " ");

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const paymentIntent = searchParams.get("payment_intent");
  const eventId = searchParams.get("eventId");

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventId) {
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events?id=${eventId}`);
        if (!res.ok) throw new Error("Failed to fetch event");

        const data = await res.json();
        setEvent(data);
      } catch (error) {
        console.error("Event fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const specialLink = event?.title
    ? Object.entries(specialEventLinks).find(
        ([key]) => normalise(key) === normalise(event.title)
      )?.[1]
    : null;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`${styles.container} min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10`}
    >
      {/* HEADER */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p className="text-lg text-gray-700 mt-3">
          You are all booked in for ReeBolly's upcoming event!
        </p>

        <p className="text-md text-gray-600 mt-2">
          <strong>Order ID:</strong> {paymentIntent}
        </p>
      </div>

      {/* SPECIAL LINK */}
      {specialLink && (
        <div className="mt-6 w-full max-w-xl bg-yellow-100 border border-yellow-400 p-6 rounded-xl shadow-sm text-center">
          <p className="font-semibold text-gray-800 text-lg">
            🎟 Save the link below to access the online class later
          </p>

          <a
            href={specialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-3 block font-medium"
          >
            Click here to access your event: {specialLink}
          </a>

          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            ⚠️ Please save this link securely or take a screenshot of this page.
            If you lose it, contact Reeha with your order ID as proof of
            purchase.
          </p>
        </div>
      )}

      {/* EVENT CARD */}
      {event && (
        <div className="mt-8 w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={800}
            height={450}
            className="w-full object-cover"
          />

          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>

            <p className="mt-3 text-gray-600">
              {new Date(event.startDateTime).toLocaleString()} →{" "}
              {new Date(event.endDateTime).toLocaleString()}
            </p>

            <p className="mt-5 text-xl text-gray-800">
              <strong>Amount paid:</strong> £{amount}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
