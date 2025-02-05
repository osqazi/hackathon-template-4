"use client";

import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = ({ amount, orderID }: { amount: number; orderID: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch the client secret for Stripe
  useEffect(() => {
    fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, orderID }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Failed to fetch clientSecret", data);
          toast.error("Error fetching payment details.");
        }
      })
      .catch((error) => {
        console.error("Error fetching clientSecret:", error);
        toast.error("Network error. Please try again.");
      });
  }, [amount, orderID]);

  // Function to update order status in Sanity
  const updateOrderStatus = async (orderID: string) => {
    try {
      const response = await fetch("/api/orderpaid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: orderID, paymentStatus: "Paid" }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Order status updated!");
      } else {
        toast.error("Failed to update order status.");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Order update failed.");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/orderComp` },
    });

    setLoading(false);

    if (result.error) {
      console.error("Payment error:", result.error.message);
      toast.error(result.error.message);
    } else {
      toast.success("Payment successful!");

      // Update order status in Sanity
      await updateOrderStatus(orderID);

      // Redirect user
      router.push("/orderComp");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg">
      {clientSecret && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <PaymentElement />
          <button
            type="submit"
            disabled={!stripe || !elements || loading}
            className="w-full bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
