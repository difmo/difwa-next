"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/config";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "difwa-stores"),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      }
    );

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <div className="text-gray-600 px-20 py-8">
      <h2 className="justify-center flex text-3xl font-bold p-4 ">
        Store List
      </h2>
      <ul className="flex flex-wrap gap-6">
        {data.map((store) => (
          <li
            key={store.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>
              <strong>Shop Name:</strong> {store.shopName || "N/A"}
            </p>
            <p>
              <strong>Owner Name:</strong> {store.ownerName || "N/A"}
            </p>
          
            <p>
              <strong>UPI ID:</strong> {store.upiId || "N/A"}
            </p>
            <p>
              <strong>User ID:</strong> {store.userId || "N/A"}
            </p>
            <p>
              <strong>Merchant ID:</strong> {store.merchantId || "N/A"}
            </p>
            <p>
              <strong>Earnings:</strong>{" "}
              {store.earnings !== undefined ? `$${store.earnings}` : "N/A"}
            </p>
            {store.imageUrl && (
              <img src={store.imageUrl} alt="Store Image" width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
    // <div>
    //   <h2 className="text-gray-600">Products List</h2>
    //   <ul>
    //     {data.map((item) => (
    //       <li key={item.id}>
    //         {item.name} - ${item.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Page;
