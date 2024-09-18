"use client";
import React from "react";
import CheckoutPage from "@/components/shared/CheckoutPage";
import { convertToSubcurrency } from "@/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation"; // Import useParams for client-side routing

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function EventPage() {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const amount = 50;

  return (
    <>
      <div>Event id: {id}</div>
      <h1>Event price: £{amount}</h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "gbp",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </>
  );
}
