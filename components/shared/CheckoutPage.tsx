"use client";
import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "@/lib/utils";

interface CheckoutPageProps {
  amount: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const res = await fetch("/api/stripe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        });
        const data = await res.json();
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setErrorMessage(data?.error?.message);
        }
      } catch (error) {
        setErrorMessage("Error creating payment intent");
      }
    };

    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setErrorMessage("Stripe.js has not loaded yet. Try again.");
      setLoading(false);
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message || "Error processing payment");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://reebolly.vercel.app//payment-success?amount=${amount}`,
      },
    });
    if (error) {
      setErrorMessage(error.message || "Payment failed");
    }
    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md shadow-md"
      >
        <PaymentElement />
        {errorMessage && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`mt-4 w-full py-2 px-4 rounded-md text-white bg-black ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {!loading ? `Pay £${amount}` : "Processing..."}
        </button>
      </form>
    </>
  );
};

export default CheckoutPage;
