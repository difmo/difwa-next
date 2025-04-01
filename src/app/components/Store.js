"use client";

import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/config";

const Store = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "difwa-stores"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPayments(data);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recent Payment Requests</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between items-center border-b pb-2 mb-2"
          >
            <div>
              <p className="font-bold">#{payment.id}</p>
              <p className="text-gray-600">{payment.storeName}</p>
              <p className="text-sm text-gray-500">{payment.email}</p>
              <p className="text-sm text-blue-500">
                UPI ID: {payment.upiId || "N/A"}
              </p>
            </div>
            <p className="text-gray-600">${payment.amount?.toLocaleString()}</p>
            <p className="text-gray-600">{payment.date}</p>
            <span
              className={`text-${
                payment.status === "Pending" ? "yellow" : "green"
              }-500`}
            >
              {payment.status}
            </span>
            {payment.status === "Pending" ? (
              <div>
                <button className="text-green-500 mr-2">Accept</button>
                <button className="text-red-500">Reject</button>
              </div>
            ) : (
              <span className="text-gray-500">Processed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
