"use client";

import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg">
      {clientSecret && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <PaymentElement />
          <button
            type="submit"
            disabled={!stripe || !elements}
            className="w-full bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50"
          >
            Pay
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
