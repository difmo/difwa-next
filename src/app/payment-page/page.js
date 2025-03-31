"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js Router
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/config";
import { motion, AnimatePresence } from "framer-motion";
// import { AnimatePresence } from "framer-motion";

const PaymentPage = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter(); // Next.js router
  const [showModal, setShowModal] = useState(true);

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
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Secure Payment
            </h2>

            {/* User & Amount */}
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <>
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
                  <p className="text-lg">
                    <strong>User ID:</strong> {userId}
                  </p>
                  <p className="text-lg">
                    <strong>Amount to Pay:</strong> ₹ {amount.toFixed(2)}
                  </p>
                </div>

                {/* Pay Button */}
                <button
                  onClick={openCheckout}
                  className={`w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600 active:scale-95"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentPage;
