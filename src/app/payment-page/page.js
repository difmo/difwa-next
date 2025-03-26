"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js Router
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/config";

const PaymentPage = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter(); // Next.js router

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const userIdFromParams = urlParams.get("userId");
        const amountFromParams = parseFloat(urlParams.get("amount"));

        if (
          !userIdFromParams ||
          isNaN(amountFromParams) ||
          amountFromParams <= 0
        ) {
          throw new Error("Invalid or missing parameters in the URL.");
        }

        setUserId(userIdFromParams);
        setAmount(amountFromParams);
      } catch (err) {
        console.error(err.message);
        setError("Invalid payment details. Please check your link.");
      }
    }
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined" && window.Razorpay) {
        resolve(window.Razorpay);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(window.Razorpay);
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  };

  const updateWalletBalance = async (addedAmount) => {
    try {
      const userDocRef = doc(db, "difwa-users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const currentWalletBalance = userDoc.data().walletBalance || 0;
        const newWalletBalance =
          parseFloat(currentWalletBalance) + parseFloat(addedAmount);

        await updateDoc(userDocRef, { walletBalance: newWalletBalance });
        console.log("✅ Wallet balance updated successfully.");
      } else {
        console.log("❌ User document not found.");
      }
    } catch (e) {
      console.error("Error updating wallet balance:", e);
    }
  };

  const openCheckout = async () => {
    try {
      if (!userId || amount <= 0) throw new Error("Invalid payment details.");

      setLoading(true);
      const Razorpay = await loadRazorpay();

      const options = {
        key: "rzp_test_5JTg9I35AkiZMQ",
        amount: Math.round(amount * 100),
        currency: "INR",
        name: "Watrify Wallet",
        description: "Add money to your wallet",
        prefill: { contact: "7800730968", email: "test@example.com" },
        theme: { color: "#528FF0" },

        handler: async (response) => {
          setLoading(false);
          alert(
            `✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );

          await updateWalletBalance(amount);

          router.push(
            `/payment-result?payment_id=${response.razorpay_payment_id}&status=success`
          );
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            alert("❌ Payment was canceled.");
            const returnUrl = new URLSearchParams(window.location.search).get(
              "returnUrl"
            );
            if (returnUrl) {
              router.push(`${returnUrl}&status=failed`);
            }
          },
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      setLoading(false);
      console.error("Payment error:", err.message);
      alert(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p>
              <strong>User ID:</strong> {userId}
            </p>
            <p>
              <strong>Amount to Pay:</strong> ₹ {amount.toFixed(2)}
            </p>
          </div>
          <button
            onClick={openCheckout}
            className={`bg-blue-500 text-white px-6 py-2 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
