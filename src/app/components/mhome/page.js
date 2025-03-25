"use client";
import React from "react";
import Features from "../Features";
import Image from "next/image";
import age from "../../../../public/img/image.jpg";

const Page = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-6 md:px-12 py-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Water Can Delivery <br />{" "}
            <span className="text-blue-600">Right At Your Doorstep</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Order 10L, 15L, or 20L water cans through our app and get them
            delivered to your doorstep. Whether you're a customer or a vendor,
            our platform connects you seamlessly.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:opacity-80 transition">
              📱 App Store
            </button>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:opacity-80 transition">
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={age}
            alt="Water Delivery"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <Features />
    </>
  );
};

export default Page;
